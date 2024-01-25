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
import { query, getDocs, collection, where } from "firebase/firestore";

import { db } from "../config";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
function To() {
  const sender = useSelector((state: { sender: string }) => state.sender);
  const uidId = useSelector((state: { userid: string }) => state.userid);
  const navi = useNavigate();
  const fetchUserData = async (uid: string | number) => {
    const userCollectionRef = collection(db, "users");
    const q = query(userCollectionRef, where("id", "==", uid));
    const userDocSnap = await getDocs(q);

    if (userDocSnap.empty) {
      return null;
    }

    const userData = userDocSnap.docs[0].data();
    return userData;
  };

  const { data: userData } = useQuery(["userData"], () => fetchUserData(uidId));

  const handleTobar = () => {
    navi(`/send/${uidId}`);
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
              {userData?.name}님의 Bar가기
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
