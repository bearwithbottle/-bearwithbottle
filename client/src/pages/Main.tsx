import { MainBox, MainText, MainBtnBox } from "../styles/main";
import GoogleBtn from "../components/main/GoogleBtn";
import FacaBookBtn from "../components/main/FacaBookBtn";
import GithubBtn from "../components/main/GithubBtn";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config";

function Main() {
  const add = async () => {
    await setDoc(doc(db, "test,TEST"), {
      name: "테스트네임",
    });
  };

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
