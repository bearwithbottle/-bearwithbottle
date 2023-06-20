import {
  MainGoogleBox,
  MainGoogleWrap,
  MainGoogleLogo,
  MainGoogleSpan,
} from "../../styles/btn/googlebtn";

function GoogleBtn() {
  return (
    <MainGoogleBox>
      <MainGoogleWrap>
        <MainGoogleLogo />
        <MainGoogleSpan>Google계정으로 시작</MainGoogleSpan>
      </MainGoogleWrap>
    </MainGoogleBox>
  );
}

export default GoogleBtn;
