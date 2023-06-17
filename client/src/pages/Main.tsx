import {
  MainBox,
  MainText,
  MainBtnBox,
  MainGoogleLogo,
  MainGoogleBox,
  MainGoogleSpan,
  MainGoogleWrap,
  MainKakaoLogo,
  MainKakaoSpan,
  MainKakaWrap,
  MainKakaoBox,
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
        <MainKakaoBox href="/">
          <MainKakaWrap>
            <MainKakaoLogo />
            <MainKakaoSpan>페이스북으로 시작하기</MainKakaoSpan>
          </MainKakaWrap>
        </MainKakaoBox>
      </MainBtnBox>
    </MainBox>
  );
}

export default Main;
