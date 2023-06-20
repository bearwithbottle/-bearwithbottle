import { MainBox, MainText, MainBtnBox } from "../styles/main";
import GoogleBtn from "../components/main/GoogleBtn";
import FacaBookBtn from "../components/main/FacaBookBtn";

function Main() {
  return (
    <MainBox>
      <MainText />
      <MainBtnBox>
        <GoogleBtn />
        <FacaBookBtn />
      </MainBtnBox>
    </MainBox>
  );
}

export default Main;
