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
import { Link } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { setName } from "../action";

function InfoStart() {
  const [NameValue, SetNameValue] = useState("");
  const [isInfoModalVisible, setInfoModalVisible] = useState(true);
  const [isInfoNextModalVisible, setInfoNextModalVisible] = useState(false);

  const dispatch = useDispatch();
  //value
  const handleSearchInputChange = (e: any) => {
    SetNameValue(e.target.value);
  };
  //savename
  const handleSaveName = () => {
    dispatch(setName(NameValue));
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
    copyToClipboard("https://www.youtube.com/watch?v=ApXoWvfEYVU");
  };
  const copyToClipboard = (text: any) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
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
      {NameValue === "" ? (
        <NextBtn />
      ) : (
        <Link to="/Info-choose-gomdol" onClick={handleSaveName}>
          <NextSubmitBtn />
        </Link>
      )}
    </InfoContainer>
  );
}

export default InfoStart;
