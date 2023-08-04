import {
  MainGoogleBox,
  MainGoogleWrap,
  MainGoogleLogo,
  MainGoogleSpan,
} from "../../styles/mainbtn/googlebtn";

//firebase
import { auth, providerGoogle, db } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

function GoogleBtn() {
  const navigate = useNavigate();
  const handleGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then(async (data) => {
        const uid = data.user.uid;
        await setDoc(doc(db, "users", uid), {
          name: "김찬희",
        });

        localStorage.setItem("uid", uid || "");
        navigate("/info-start");
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
