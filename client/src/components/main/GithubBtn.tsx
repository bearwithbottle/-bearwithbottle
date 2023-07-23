import {
  MainGithubBox,
  MainGithubWrap,
  MainGithubLogo,
  MainGithubSpan,
} from "../../styles/mainbtn/githubbtn";
import { auth, providerGithub } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

function GithubBtn() {
  const [value, setValue] = useState("");

  const handleGithub = () => {
    signInWithPopup(auth, providerGithub)
      .then((data) => {
        const user = data.user;
        const email = user.email;

        setValue(email || "");

        localStorage.setItem("email", email || "");
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
