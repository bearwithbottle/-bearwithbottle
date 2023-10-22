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
import NextSubmitBtnTwo from "../components/infostart/NextSubmitBtnTwo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { setName } from "../action";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../config";

function InfoStart() {
  const [NameValue, SetNameValue] = useState("");
  const [isInfoModalVisible, setInfoModalVisible] = useState(true);
  const [isInfoNextModalVisible, setInfoNextModalVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //value
  const handleSearchInputChange = (e: any) => {
    SetNameValue(e.target.value);
  };
  //savename
  const handleSaveName = async () => {
    dispatch(setName(NameValue));
    try {
      const uid = localStorage.getItem("uid");
      if (uid) {
        const userDocRef = doc(db, "users", uid);
        await setDoc(userDocRef, {
          name: NameValue,
          id: uid,
          letters: [],
        });
        navigate("/choosegomdol");
      }
    } catch (error) {
      console.error("ErrorImg:", error);
    }
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
          <InfoNameText>
            만나서 반갑습니다.
            <br />
            당신의 성함을 알려주세요.
          </InfoNameText>
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
        <NextSubmitBtnTwo handleSaveName={handleSaveName} />
      )}
    </InfoContainer>
  );
}

export default InfoStart;
