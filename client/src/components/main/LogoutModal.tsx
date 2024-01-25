import {
  LogoutModalBox,
  Logoutbox,
  LogoutboxIn,
  LogoutTopText,
  LogoutMidText,
  LogoutBtnBox,
  NextSubBtnBox,
  NextSubBtnWrap,
  NextSubBtnDot,
  HomeBtnWrap,
  HomeBtnDot,
  HomeBtnBox,
} from "../../styles/mainbtn/logoutmodal";
import { signOut } from "firebase/auth";
import { auth } from "../../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LogoutModal({ handleLogout }: any) {
  const [isNext, setIsNext] = useState(true);
  const navi = useNavigate();
  const realLogout = () => {
    setIsNext((pre) => !pre);
  };
  const handleHome = () => {
    signOut(auth)
      .then(() => {
        navi("/");
      })
      .catch((error) => {
        console.error("로그아웃 중에 오류가 발생했습니다.", error);
      });
  };
  let logoutBtnBoxContent;
  if (isNext) {
    logoutBtnBoxContent = (
      <LogoutBtnBox onClick={realLogout}>
        <NextSubBtnBox>
          <NextSubBtnWrap>
            <NextSubBtnDot>Yes</NextSubBtnDot>
          </NextSubBtnWrap>
        </NextSubBtnBox>
        <NextSubBtnBox>
          <NextSubBtnWrap>
            <NextSubBtnDot onClick={handleLogout}>No</NextSubBtnDot>
          </NextSubBtnWrap>
        </NextSubBtnBox>
      </LogoutBtnBox>
    );
  } else {
    logoutBtnBoxContent = (
      <LogoutBtnBox onClick={handleLogout}>
        <HomeBtnBox>
          <HomeBtnWrap>
            <HomeBtnDot onClick={handleHome}>홈으로</HomeBtnDot>
          </HomeBtnWrap>
        </HomeBtnBox>
      </LogoutBtnBox>
    );
  }

  return (
    <LogoutModalBox>
      <Logoutbox>
        <LogoutboxIn>
          <LogoutTopText>로그 아웃</LogoutTopText>
          <LogoutMidText>로그아웃 하시겠습니까?</LogoutMidText>
          {logoutBtnBoxContent}
        </LogoutboxIn>
      </Logoutbox>
    </LogoutModalBox>
  );
}

export default LogoutModal;
