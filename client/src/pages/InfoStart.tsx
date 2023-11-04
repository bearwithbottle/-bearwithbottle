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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { setName } from "../action";

import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../config";

function InfoStart() {
  const [NameValue, SetNameValue] = useState("");
  const [isInfoModalVisible, setInfoModalVisible] = useState(true);
  const [isInfoNextModalVisible, setInfoNextModalVisible] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //value
  const handleSearchInputChange = (e: any) => {
    SetNameValue(e.target.value);
  };

  const handleSaveName = async () => {
    dispatch(setName(NameValue));

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const result = user.uid;
        setData(result);
        try {
          const uid = data;
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
      }
    });
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
    copyToClipboard("barewithbottle.firebaseapp.com");
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
              placeholder="입력하십시오. (10자 이하) 저장하기"
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
