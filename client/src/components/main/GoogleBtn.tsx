import {
  MainGoogleBox,
  MainGoogleWrap,
  MainGoogleLogo,
  MainGoogleSpan,
} from "../../styles/mainbtn/googlebtn";
import { auth, providerGoogle } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

function GoogleBtn() {
  const [value, setValue] = useState("");

  const handleGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        const user = data.user;
        const email = user.email;

        setValue(email || "");

        localStorage.setItem("email", email || "");
      })
      .catch((error) => {
        console.log("Google:", error);
      });
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
