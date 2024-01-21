import { MainBox, MainText, MainBtnBox } from "../styles/main";
import GoogleBtn from "../components/main/GoogleBtn";
import FacaBookBtn from "../components/main/FacaBookBtn";
import GithubBtn from "../components/main/GithubBtn";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
function Main() {
  const goback = useNavigate();
  useEffect(() => {
    function isLogin() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const docRef = doc(db, "users", uid);
          const docSnapshot = await getDoc(docRef);
          const NameValue = docSnapshot.get("name");
          const ImgValue = docSnapshot.get("img");
          if (!NameValue) goback("/infostart");
          else if (!ImgValue) goback("/choosegomdol");
          goback("/bar");
        }
      });
    }
    isLogin();
  }, []);
  return (
    <MainBox>
      <MainText />
      <MainBtnBox>
        <GoogleBtn />
        <FacaBookBtn />
        <GithubBtn />
      </MainBtnBox>
    </MainBox>
  );
}

export default Main;
