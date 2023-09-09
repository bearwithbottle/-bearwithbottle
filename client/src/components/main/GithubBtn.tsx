import {
  MainGithubBox,
  MainGithubWrap,
  MainGithubLogo,
  MainGithubSpan,
} from "../../styles/mainbtn/githubbtn";
import { auth, providerGithub, db } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { doc, setDoc, getDoc } from "firebase/firestore";
import { setUid } from "../../action";

function GithubBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGithub = async () => {
    try {
      const result = await signInWithPopup(auth, providerGithub);
      const uid = result.user.uid;

      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDoc(userDocRef);
      localStorage.setItem("uid", uid || "");
      dispatch(setUid(uid));
      if (userDocSnap.exists()) {
        // 이미 존재하는 uid라면 /bar로 이동
        navigate(`/bar/${uid}`);
      } else {
        // 새로운 uid면 데이터베이스에 추가하고 /info-start로 이동
        const user = result.user; // 사용자 정보 가져오기
        await setDoc(userDocRef, {
          name: user.displayName || "", // 사용자의 이름 저장
          id: uid,
        });
        navigate(`/infostart/${uid}`);
      }
    } catch (error) {
      console.log("Github:", error);
    }
  };
  return (
    <MainGithubBox onClick={handleGithub}>
      <MainGithubWrap>
        <MainGithubLogo />
        <MainGithubSpan>깃허브(으)로 시작하기</MainGithubSpan>
      </MainGithubWrap>
    </MainGithubBox>
  );
}

export default GithubBtn;
