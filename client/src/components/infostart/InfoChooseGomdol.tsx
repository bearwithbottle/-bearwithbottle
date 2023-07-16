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
} from "../../styles/info/infochoosegomdol";
import PreBtn from "./PreBtn";
import NextSubmitBtn from "./NextSubmitBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setImage } from "../../action";
import gomone from "../../assets/info/gomone.png";
import gomtwo from "../../assets/info/gomtwo.png";
import gomthree from "../../assets/info/gomthree.png";
function InfoChooseGomdol() {
  const [isOne, setIsOne] = useState(true);
  const [isTwo, setIsTwo] = useState(false);
  const [isThree, setIsThress] = useState(false);
  const dispatch = useDispatch();

  const handleOne = () => {
    setIsOne(true);
    setIsTwo(false);
    setIsThress(false);
    dispatch(setImage(gomone));
  };

  const handleTwo = () => {
    setIsOne(false);
    setIsTwo(true);
    setIsThress(false);
    dispatch(setImage(gomtwo));
  };

  const handleThree = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(true);
    dispatch(setImage(gomthree));
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
        <GomdolNow isOne={isOne} isTwo={isTwo} isThree={isThree} />
      </GomdolBox>
      <ChooseBox>
        <ChooseContentsOneBox onClick={handleOne} isOne={isOne}>
          <ChooseContentsOne />
        </ChooseContentsOneBox>
        <ChooseContentsTwoBox onClick={handleTwo} isTwo={isTwo}>
          <ChooseContentsTwo />
        </ChooseContentsTwoBox>
        <ChooseContentsThreeBox onClick={handleThree} isThree={isThree}>
          <ChooseContentsThree />
        </ChooseContentsThreeBox>
      </ChooseBox>
      <Link to="/bar">
        <NextSubmitBtn />
      </Link>
    </GomdolContainer>
  );
}

export default InfoChooseGomdol;
