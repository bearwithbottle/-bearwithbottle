import {
  InfoBox,
  InfoNameText,
  InfoCircleWarp,
  InfoBoxWrap,
  InfoCircle,
  NameWrap,
  NameBox,
  InfoContainer,
  NextSubBtnWrap,
  NextSubBtnDot,
  NextSubBtnBox,
} from "../styles/name";
import PreBtn from "../components/infostart/PreBtn";
import NextBtn from "../components/infostart/NextBtn";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../config";

function Name() {
  const [NameValue, SetNameValue] = useState("");
  const [uid, stateUid] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleSearchInputChange = (e: any) => {
    SetNameValue(e.target.value);
  };
  const handleSaveName = async () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const data = user.uid;
          stateUid(data);
        }
      });
      // const uid = localStorage.getItem("uid");
      if (uid) {
        const userDocRef = doc(db, "users", uid);
        await setDoc(
          userDocRef,
          {
            name: NameValue,
          },
          { merge: true }
        );
        navigate(`/bar`);
      }
    } catch (error) {
      console.error("ErrorImg:", error);
    }
  };

  const renderNextButton =
    NameValue.length >= 3 ? (
      <NextSubBtnBox>
        <NextSubBtnWrap onClick={handleSaveName}>
          <NextSubBtnDot>다음으로</NextSubBtnDot>
        </NextSubBtnWrap>
      </NextSubBtnBox>
    ) : (
      <NextSubBtnBox>
        <NextBtn />
      </NextSubBtnBox>
    );
  return (
    <InfoContainer>
      <InfoBox>
        <PreBtn />
        <InfoBoxWrap>
          <InfoNameText>당신의 이름을 작성해 주세요.</InfoNameText>
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
      {renderNextButton}
    </InfoContainer>
  );
}

export default Name;
