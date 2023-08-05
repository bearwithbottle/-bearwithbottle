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

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setImage } from "../../action";
import { storage } from "../../config";
import { ref, getDownloadURL } from "firebase/storage";
import gomone from "../../assets/info/gomone.png";
import gomtwo from "../../assets/info/gomtwo.png";
import gomthree from "../../assets/info/gomthree.png";
function InfoChooseGomdol() {
  const [isOne, setIsOne] = useState(true);
  const [isTwo, setIsTwo] = useState(false);
  const [isThree, setIsThress] = useState(false);
  const [isFour, setIsFour] = useState(false);
  const [isFive, setIsFive] = useState(false);
  //img
  const [oneUrl, setOneUrl] = useState<string | null>(null);
  const [twoUrl, setTwoUrl] = useState<string | null>(null);
  const [threeUrl, setThreeUrl] = useState<string | null>(null);
  const [FourUrl, setFourUrl] = useState<string | null>(null);
  const [FiveUrl, setFiveUrl] = useState<string | null>(null);
  const dispatch = useDispatch();
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
    dispatch(setImage(gomone));
  };

  const handleTwo = () => {
    setIsOne(false);
    setIsTwo(true);
    setIsThress(false);
    setIsFour(false);
    setIsFive(false);
    dispatch(setImage(gomtwo));
  };

  const handleThree = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(true);
    setIsFour(false);
    setIsFive(false);
    dispatch(setImage(gomthree));
  };
  const handleFour = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(false);
    setIsFour(true);
    setIsFive(false);
  };
  const handleFive = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(false);
    setIsFour(false);
    setIsFive(true);
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
      <Link to="/bar">
        <NextSubmitBtn />
      </Link>
    </GomdolContainer>
  );
}

export default InfoChooseGomdol;
