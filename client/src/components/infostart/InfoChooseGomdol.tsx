import {
  GomdolContainer,
  GomdolWarp,
  PreWrap,
  GomdolText,
  InfoCircleWarp,
  InfoCircle,
  GomdolgChoose,
  GomdolgChooseImg,
} from "../../styles/info/infochoosegomdol";
import PreBtn from "./PreBtn";
import NextSubmitBtn from "./NextSubmitBtn";
import { Link } from "react-router-dom";

function InfoChooseGomdol() {
  return (
    <GomdolContainer>
      <PreWrap>
        <PreBtn />
      </PreWrap>
      <GomdolWarp>
        <GomdolText>안녕</GomdolText>
        <InfoCircleWarp>
          <InfoCircle />
          <InfoCircle />
          <InfoCircle />
        </InfoCircleWarp>
        <GomdolgChoose>
          <GomdolgChooseImg />
        </GomdolgChoose>
      </GomdolWarp>
      <Link to="/bar">
        <NextSubmitBtn />
      </Link>
    </GomdolContainer>
  );
}

export default InfoChooseGomdol;
