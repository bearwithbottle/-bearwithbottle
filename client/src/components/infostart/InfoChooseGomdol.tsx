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
      <NextSubmitBtn />
    </GomdolContainer>
  );
}

export default InfoChooseGomdol;
