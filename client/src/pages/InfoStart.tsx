import {
  InfoBox,
  InfoNameText,
  InfoCircleWarp,
  InfoBoxWrap,
  InfoCircle,
  NameWrap,
  NameBox,
  InfoContainer,
} from "../styles/info/infostart";
import PreBtn from "../components/infostart/PreBtn";
import NextBtn from "../components/infostart/NextBtn";
import NextSubmitBtn from "../components/infostart/NextSubmitBtn";
import { useState } from "react";
function InfoStart() {
  const [NameValue, SetNameValue] = useState("");
  const handleSearchInputChange = (e: any) => {
    SetNameValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <InfoContainer>
      <InfoBox>
        <PreBtn />
        <InfoBoxWrap>
          <InfoNameText>당신의 이름을 작성해 주세요</InfoNameText>
          <InfoCircleWarp>
            <InfoCircle />
            <InfoCircle />
            <InfoCircle />
          </InfoCircleWarp>
          <NameWrap>
            <NameBox
              onChange={handleSearchInputChange}
              maxLength={10}
              placeholder="닉네임을 적어라 입력하세요. (10자 이하)"
            />
          </NameWrap>
          <div>*샬라샬라 해주세여.</div>
        </InfoBoxWrap>
      </InfoBox>
      {/* <NextBtn /> */}
      <NextSubmitBtn />
    </InfoContainer>
  );
}

export default InfoStart;
