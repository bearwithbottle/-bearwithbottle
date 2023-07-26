import {
  MainFacebookBox,
  MainFacebookWrap,
  MainFacebookLogo,
  MainFacebookSpan,
} from '../../styles/mainbtn/facebookbtn';
import { auth, providerFacebook } from '../../config';
import { signInWithPopup } from 'firebase/auth';

function FacaBookBtn() {
  const handleFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
        const uid = data.user.uid;

        localStorage.setItem('uid', uid || '');
      })
      .catch((error) => {
        console.log('Facebook:', error);
      });
  };
  return (
    <MainFacebookBox onClick={handleFacebook}>
      <MainFacebookWrap>
        <MainFacebookLogo />
        <MainFacebookSpan>페이스북으로 시작하기</MainFacebookSpan>
      </MainFacebookWrap>
    </MainFacebookBox>
  );
}

export default FacaBookBtn;
