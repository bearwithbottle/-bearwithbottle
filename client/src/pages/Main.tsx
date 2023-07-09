import { MainBox, MainText, MainBtnBox } from "../styles/main";
import GoogleBtn from "../components/main/GoogleBtn";
import FacaBookBtn from "../components/main/FacaBookBtn";
import GithubBtn from "../components/main/GithubBtn";
import { Link } from "react-router-dom";

function Main() {
  return (
    <MainBox>
      <MainText />
      <MainBtnBox>
        <Link to="/info-start">
          <GoogleBtn />
        </Link>
        <FacaBookBtn />
        <GithubBtn />
      </MainBtnBox>
    </MainBox>
  );
}

export default Main;
