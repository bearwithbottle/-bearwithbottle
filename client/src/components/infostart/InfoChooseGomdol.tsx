import {
  GomdolContainer,
  PreWrap,
  TextBox,
  Text,
  TextBoxBox,
  InfoCircleWarp,
  InfoCircle,
  GomdolBox,
  GomdolNow,
  ChooseBox,
  ChooseContentsOneBox,
  ChooseContentsTwoBox,
  ChooseContentsThreeBox,
  ChooseContentsOne,
  ChooseContentsTwo,
  ChooseContentsThree,
  ChooseContentsFourBox,
  ChooseContentsFour,
  ChooseContentsFiveBox,
  ChooseContentsFive,
} from "../../styles/info/infochoosegomdol";
import PreBtn from "./PreBtn";
import NextSubmitBtn from "./NextSubmitBtn";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage } from "../../action";
import { storage, db } from "../../config";
import { ref, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
function InfoChooseGomdol() {
  const [isOne, setIsOne] = useState(true);
  const [isTwo, setIsTwo] = useState(false);
  const [isThree, setIsThress] = useState(false);
  const [isFour, setIsFour] = useState(false);
  const [isFive, setIsFive] = useState(false);
  //img
  const [oneUrl, setOneUrl] = useState<string>("");
  const [twoUrl, setTwoUrl] = useState<string>("");
  const [threeUrl, setThreeUrl] = useState<string>("");
  const [FourUrl, setFourUrl] = useState<string>("");
  const [FiveUrl, setFiveUrl] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state: any) => state.image);
  useEffect(() => {
    const getImageUrl = async (imageName: string, setUrl: any) => {
      try {
        const imageRef = ref(storage, imageName);
        const url = await getDownloadURL(imageRef);
        setUrl(url);
      } catch (error) {
        console.error(imageName, error);
      }
    };

    getImageUrl("gomdol1.png", setOneUrl);
    getImageUrl("gomdol2.png", setTwoUrl);
    getImageUrl("gomdol3.png", setThreeUrl);
    getImageUrl("gomdol4.png", setFourUrl);
    getImageUrl("gomdol5.png", setFiveUrl);
  }, []);

  const handleOne = () => {
    setIsOne(true);
    setIsTwo(false);
    setIsThress(false);
    setIsFour(false);
    setIsFive(false);
    dispatch(setImage(oneUrl));
  };

  const handleTwo = () => {
    setIsOne(false);
    setIsTwo(true);
    setIsThress(false);
    setIsFour(false);
    setIsFive(false);
    dispatch(setImage(twoUrl));
  };

  const handleThree = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(true);
    setIsFour(false);
    setIsFive(false);
    dispatch(setImage(threeUrl));
  };
  const handleFour = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(false);
    setIsFour(true);
    setIsFive(false);
    dispatch(setImage(FourUrl));
  };
  const handleFive = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(false);
    setIsFour(false);
    setIsFive(true);
    dispatch(setImage(FiveUrl));
  };
  const handleGomSubmit = async () => {
    try {
      // 로컬 스토리지에서 uid 값을 가져오기
      const uid = localStorage.getItem("uid");
      if (uid) {
        const userDocRef = doc(db, "users", uid);
        await updateDoc(userDocRef, {
          img: selector,
        });
        navigate("/bar");
      }
    } catch (error) {
      console.error("ErrorImg:", error);
    }
  };

  return (
    <GomdolContainer>
      <PreWrap>
        <PreBtn />
      </PreWrap>
      <TextBox>
        <TextBoxBox>
          <Text>당신의 바텐더를 선택해 주세요</Text>
          <InfoCircleWarp>
            <InfoCircle />
            <InfoCircle />
            <InfoCircle />
          </InfoCircleWarp>
        </TextBoxBox>
      </TextBox>
      <GomdolBox>
        <GomdolNow
          isOne={isOne}
          isTwo={isTwo}
          isThree={isThree}
          isFour={isFour}
          isFive={isFive}
        />
      </GomdolBox>
      <ChooseBox>
        <ChooseContentsOneBox onClick={handleOne} isOne={isOne}>
          <ChooseContentsOne oneUrl={oneUrl} />
        </ChooseContentsOneBox>
        <ChooseContentsTwoBox onClick={handleTwo} isTwo={isTwo}>
          <ChooseContentsTwo twoUrl={twoUrl} />
        </ChooseContentsTwoBox>
        <ChooseContentsThreeBox onClick={handleThree} isThree={isThree}>
          <ChooseContentsThree threeUrl={threeUrl} />
        </ChooseContentsThreeBox>
        {/* 4,5 rr */}
        <ChooseContentsFourBox onClick={handleFour} isFour={isFour}>
          <ChooseContentsFour FourUrl={FourUrl} />
        </ChooseContentsFourBox>
        <ChooseContentsFiveBox onClick={handleFive} isFive={isFive}>
          <ChooseContentsFive FiveUrl={FiveUrl} />
        </ChooseContentsFiveBox>
      </ChooseBox>
      <NextSubmitBtn handleGomSubmit={handleGomSubmit} />
    </GomdolContainer>
  );
}

export default InfoChooseGomdol;
