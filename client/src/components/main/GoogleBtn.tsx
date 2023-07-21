import {
  MainGoogleBox,
  MainGoogleWrap,
  MainGoogleLogo,
  MainGoogleSpan,
} from "../../styles/mainbtn/googlebtn";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

function GoogleBtn() {
  const [value, setValue] = useState("");

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const user = data.user;
        const email = user.email;

        setValue(email || "");

        localStorage.setItem("email", email || "");
      })
      .catch((error) => {
        console.log("Google Sign-in Error:", error);
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
