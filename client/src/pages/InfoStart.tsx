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
import InfoNextModal from "../components/infostart/InfoNextModal";
import InfoModal from "../components/infostart/InfoModal";
import PreBtn from "../components/infostart/PreBtn";
import NextBtn from "../components/infostart/NextBtn";
import NextSubmitBtn from "../components/infostart/NextSubmitBtn";
import { useState } from "react";
function InfoStart() {
  const [NameValue, SetNameValue] = useState("");
  const [isInfoModalVisible, setInfoModalVisible] = useState(true);
  const [isInfoNextModalVisible, setInfoNextModalVisible] = useState(false);

  const handleSearchInputChange = (e: any) => {
    SetNameValue(e.target.value);
    console.log(e.target.value);
  };

  const handleInfoModalClose = () => {
    setInfoModalVisible(false);
  };

  const handleNoButtonClick = () => {
    setInfoNextModalVisible(true);
  };

  const handleInfoNextModalClose = () => {
    setInfoNextModalVisible(false);
  };
  const handleCopyLink = () => {
    // 링크 복사 동작을 수행하는 코드 작성
  };
  return (
    <InfoContainer>
      <InfoBox>
        {isInfoModalVisible && (
          <InfoModal
            onClose={handleInfoModalClose}
            onNoButtonClick={handleNoButtonClick}
          />
        )}
        {isInfoNextModalVisible && (
          <InfoNextModal
            onClose={handleInfoNextModalClose}
            onCopyLink={handleCopyLink}
          />
        )}
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
              value={NameValue}
              onChange={handleSearchInputChange}
              maxLength={10}
              placeholder="닉네임을 적어라 입력하세요. (10자 이하)"
            />
          </NameWrap>
        </InfoBoxWrap>
      </InfoBox>
      {NameValue === "" ? <NextBtn /> : <NextSubmitBtn />}
    </InfoContainer>
  );
}

export default InfoStart;
