import {
  MainGoogleBox,
  MainGoogleWrap,
  MainGoogleLogo,
  MainGoogleSpan,
} from "../../styles/mainbtn/googlebtn";

//firebase
import { auth, providerGoogle, db } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUid } from "../../action";
function GoogleBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      const uid = result.user.uid;

      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDoc(userDocRef);
      console.log("왜", userDocSnap.exists());
      // localStorage.setItem("uid", uid || "");
      dispatch(setUid(uid));
      if (userDocSnap.exists()) {
        // 이미 존재하는 uid라면 /bar로 이동
        navigate(`/bar`);
      } else {
        // 새로운 uid면 데이터베이스에 추가하고 /info-start로 이동
        const user = result.user; // 사용자 정보 가져오기
        await setDoc(userDocRef, {
          name: user.displayName || "", // 사용자의 이름 저장
          id: uid,
        });

        navigate(`/infostart`);
      }
    } catch (error) {
      console.log("Google:", error);
    }
  };

  return (
    <MainGoogleBox onClick={handleGoogle}>
      <MainGoogleWrap>
        <MainGoogleLogo />
        <MainGoogleSpan>Google계정으로 시작</MainGoogleSpan>
      </MainGoogleWrap>
    </MainGoogleBox>
  );
}

export default GoogleBtn;
