import {
  MainGithubBox,
  MainGithubWrap,
  MainGithubLogo,
  MainGithubSpan,
} from "../../styles/mainbtn/githubbtn";
import { auth, providerGithub } from "../../config";
import { signInWithPopup } from "firebase/auth";

function GithubBtn() {
  const handleGithub = () => {
    signInWithPopup(auth, providerGithub)
      .then((data) => {
        const uid = data.user.uid;

        localStorage.setItem("uid", uid || "");
      })
      .catch((error) => {
        console.log("Github:", error);
      });
  };
  return (
    <MainGithubBox onClick={handleGithub}>
      <MainGithubWrap>
        <MainGithubLogo />
        <MainGithubSpan>Github 계정으로 시작</MainGithubSpan>
      </MainGithubWrap>
    </MainGithubBox>
  );
}

export default GithubBtn;
