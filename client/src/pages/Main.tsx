import {
  MainBox,
  MainText,
  MainBtnBox,
  MainGoogleLogo,
  MainGoogleBox,
  MainGoogleSpan,
  MainGoogleWrap,
  MainFacebookLogo,
  MainFacebookSpan,
  MainFacebookWrap,
  MainFacebookBox,
} from "../styles/main";
function Main() {
  return (
    <MainBox>
      <MainText />
      <MainBtnBox>
        <MainGoogleBox href="/">
          <MainGoogleWrap>
            <MainGoogleLogo />
            <MainGoogleSpan>Google 계정으로 시작</MainGoogleSpan>
          </MainGoogleWrap>
        </MainGoogleBox>
        <MainFacebookBox href="/">
          <MainFacebookWrap>
            <MainFacebookLogo />
            <MainFacebookSpan>페이스북으로 시작하기</MainFacebookSpan>
          </MainFacebookWrap>
        </MainFacebookBox>
      </MainBtnBox>
    </MainBox>
  );
}

export default Main;
