import {
  ToBox,
  TextBox,
  Text,
  ToMailBox,
  BtnBox,
  NextSubBtnBox,
  NextSubBtnWrap,
  NextSubBtnDot,
  MyHomeBtnBox,
  MyHomeBtnWrap,
  MyHomeBtnDot,
  MailText,
} from "../styles/to";

import { useSelector } from "react-redux";
import {
  DocumentData,
  query,
  getDocs,
  collection,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../config";
import { useNavigate } from "react-router-dom";
function To() {
  const sender = useSelector((state: { sender: string }) => state.sender);
  const senduid = useSelector((state: { senduid: string }) => state.senduid);
  const [userData, setUserData] = useState<DocumentData | null>(null);
  const navi = useNavigate();
  // const uid = localStorage.getItem("uid");
  useEffect(() => {
    async function fetchUserData() {
      try {
        if (senduid) {
          const userCollectionRef = collection(db, "users");
          const q = query(userCollectionRef, where("id", "==", senduid));

          const querySnapshot = await getDocs(q);
          if (querySnapshot.size === 0) {
            console.log("해당 사용자를 찾을 수 없습니다.");
            return;
          }
          const userData = querySnapshot.docs[0].data();
          setUserData(userData);
        }
      } catch (error) {
        console.error("사용자 데이터를 불러오는 도중 오류 발생:", error);
      }
    }

    fetchUserData();
  }, [senduid]);
  const handleTobar = () => {
    navi(`/send/${senduid}`);
  };
  const handleToHome = () => {
    navi(`/bar`);
  };
  return (
    <ToBox>
      <TextBox>
        <Text>
          소중한 마음
          <br />
          제가 잘 전달해드리겠습니다.
        </Text>
      </TextBox>
      <ToMailBox>
        <MailText>from,{sender}</MailText>
      </ToMailBox>
      <BtnBox>
        <NextSubBtnBox>
          <NextSubBtnWrap>
            <NextSubBtnDot onClick={handleTobar}>
              {userData && userData.name}님의 Bar가기
            </NextSubBtnDot>
          </NextSubBtnWrap>
        </NextSubBtnBox>
        <MyHomeBtnBox>
          <MyHomeBtnWrap>
            <MyHomeBtnDot onClick={handleToHome}>내 Bar 가기</MyHomeBtnDot>
          </MyHomeBtnWrap>
        </MyHomeBtnBox>
      </BtnBox>
    </ToBox>
  );
}

export default To;
