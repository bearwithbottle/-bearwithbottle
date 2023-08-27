import { MainBox, MainText, MainBtnBox } from "../styles/main";
import GoogleBtn from "../components/main/GoogleBtn";
import FacaBookBtn from "../components/main/FacaBookBtn";
import GithubBtn from "../components/main/GithubBtn";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Main() {
  const goback = useNavigate();
  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      goback(`/bar/${uid}`);
    }
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
