import {
  MainFacebookBox,
  MainFacebookWrap,
  MainFacebookLogo,
  MainFacebookSpan,
} from "../../styles/mainbtn/facebookbtn";
import { auth, providerFacebook } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

function FacaBookBtn() {
  const [value, setValue] = useState("");

  const handleFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
        const user = data.user;
        const email = user.email;

        setValue(email || "");

        localStorage.setItem("email", email || "");
      })
      .catch((error) => {
        console.log("Facebook:", error);
      });
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
