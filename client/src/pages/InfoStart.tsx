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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { setName } from "../action";

import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import {
  onAuthStateChanged,
  getAuth,
  deleteUser,
  signOut,
} from "firebase/auth";
import { db, auth } from "../config";

function InfoStart() {
  const [NameValue, SetNameValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isInfoModalVisible, setInfoModalVisible] = useState(true);
  const [isInfoNextModalVisible, setInfoNextModalVisible] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //value
  const handleSearchInputChange = (e: any) => {
    SetNameValue(e.target.value);
  };
  //유저상태확인
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) navigate("/");
      else {
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnapshot = await getDoc(docRef);
        const ImgValue = docSnapshot.get("img");
        if (ImgValue) navigate("/bar");
      }
    });
  }, []);

  const handleSaveName = async () => {
    if (isSaving) {
      return; // 이미 저장 중이면 함수 실행 중지
    }
    setIsSaving(true); // 저장 중으로 표시
    dispatch(setName(NameValue));
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user.uid; // 이 부분을 수정
          setData(uid);

          const userDocRef = doc(db, "users", uid);
          await setDoc(userDocRef, {
            name: NameValue,
            id: uid,
            letters: [],
          });
        } catch (error) {
          console.error("ErrorImg:", error);
        } finally {
          setIsSaving(false); // 저장 완료 후 저장 중 플래그를 해제
          navigate("/choosegomdol");
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
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user.uid;
          const userDocRef = doc(db, "users", uid);
          await deleteDoc(userDocRef);
          handleSignOut();
        } catch (error) {
          console.error(error);
        } finally {
          copyToClipboard("https://barewithbottle.web.app");
          navigate("/");
        }
      }
    });
  };
  const handleSignOut = async () => {
    try {
      const user = auth.currentUser; // 현재 사용자 가져오기
      if (user) {
        await deleteUser(user); // 사용자 삭제 시도
      } else {
        console.log("user");
      }
    } catch (error) {
      console.error(error);
    }
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
          {/* <InfoCircleWarp>
            <InfoCircle />
            <InfoCircle />
            <InfoCircle />
          </InfoCircleWarp> */}
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
      {NameValue.length >= 3 && !/\s/.test(NameValue) ? (
        <NextSubmitBtnTwo handleSaveName={handleSaveName} />
      ) : (
        <NextBtn />
      )}
    </InfoContainer>
  );
}

export default InfoStart;
