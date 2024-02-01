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
import PreBtnGomdol from "./PreBtnGomdol";
import NextSubmitBtn from "./NextSubmitBtn";
import { setImage } from "../../action";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//firebase
import { storage, db, auth } from "../../config";
import { onAuthStateChanged } from "firebase/auth";
import { ref, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import Draggable from "react-draggable";
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
  //drag
  const [position, setPosition] = useState<any>({ x: 0 });
  const [Opacity, setOpacity] = useState(false);
  //auth
  const [data, setData] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  useEffect(() => {
    const getImageUrl = async () => {
      try {
        const imageNames = [
          "gomdol1.png",
          "gomdol2.png",
          "gomdol3.png",
          "gomdol4.png",
          "gomdol5.png",
        ];
        const setters = [
          setOneUrl,
          setTwoUrl,
          setThreeUrl,
          setFourUrl,
          setFiveUrl,
        ];

        for (let i = 0; i < imageNames.length; i++) {
          const imageName = imageNames[i];
          const imageRef = ref(storage, imageName);
          const imageUrl = await getDownloadURL(imageRef);
          setters[i](imageUrl);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getImageUrl();
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) navigate("/");
      else {
        const uid = user?.uid;
        const userDocRef = doc(db, "users", uid);
        const userDocSnap = await getDoc(userDocRef);
        const ImgValue = userDocSnap.get("img");

        if (ImgValue) {
          navigate("/bar");
        }
      }
    });
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
    if (isSaving) {
      return; // 이미 저장 중이면 함수 실행 중지
    }
    setIsSaving(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user.uid;
          setData(uid);
          const userDocRef = doc(db, "users", uid);
          await updateDoc(userDocRef, {
            img: selector,
          });
        } catch (error) {
          console.error(error);
        } finally {
          setIsSaving(false); // 저장 완료 후 저장 중 플래그를 해제
          navigate("/bar");
        }
      }
    });
  };
  const trackPos = (data: any) => {
    setPosition({ x: data.x });
  };

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  return (
    <GomdolContainer>
      <PreWrap>
        <PreBtnGomdol />
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
      <Draggable
        axis="x"
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
        bounds={{ left: -170, right: 170 }}
      >
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
      </Draggable>
      <NextSubmitBtn handleGomSubmit={handleGomSubmit} />
    </GomdolContainer>
  );
}

export default InfoChooseGomdol;
