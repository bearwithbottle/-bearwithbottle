import {
  MainFacebookBox,
  MainFacebookWrap,
  MainFacebookLogo,
  MainFacebookSpan,
} from "../../styles/btn/facebookbtn";

function FacaBookBtn() {
  return (
    <MainFacebookBox>
      <MainFacebookWrap>
        <MainFacebookLogo />
        <MainFacebookSpan>페이스북으로 시작하기</MainFacebookSpan>
      </MainFacebookWrap>
    </MainFacebookBox>
  );
}

export default FacaBookBtn;
