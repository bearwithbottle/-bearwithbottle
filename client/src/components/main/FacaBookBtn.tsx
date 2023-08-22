import {
  MainFacebookBox,
  MainFacebookWrap,
  MainFacebookLogo,
  MainFacebookSpan,
} from "../../styles/mainbtn/facebookbtn";
import { auth, providerFacebook, db } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUid } from "../../action";

function FacaBookBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, providerFacebook);
      const uid = result.user.uid;

      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDoc(userDocRef);
      dispatch(setUid(uid));
      localStorage.setItem("uid", uid || "");

      if (userDocSnap.exists()) {
        // 이미 존재하는 uid라면 /bar로 이동
        navigate("/bar");
      } else {
        // 새로운 uid면 데이터베이스에 추가하고 /info-start로 이동
        const user = result.user; // 사용자 정보 가져오기
        await setDoc(userDocRef, {
          name: user.displayName || "", // 사용자의 이름 저장
        });
        navigate("/infostart");
      }
    } catch (error) {
      console.log("Facebook:", error);
    }
  };

  return (
    <MainFacebookBox onClick={handleFacebook}>
      <MainFacebookWrap>
        <MainFacebookLogo />
        <MainFacebookSpan>페이스북으로 시작하기</MainFacebookSpan>
      </MainFacebookWrap>
    </MainFacebookBox>
  );
}

export default FacaBookBtn;
