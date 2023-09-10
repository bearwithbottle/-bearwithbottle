import {
  ShareBtnWrap,
  ShareBtnDot,
  ShareBtnBox,
} from "../../styles/mainbtn/sharebtn";

function ShareBtn({ hadleShare }: any) {
  return (
    <ShareBtnBox onClick={hadleShare}>
      <ShareBtnWrap>
        <ShareBtnDot>공유하기</ShareBtnDot>
      </ShareBtnWrap>
    </ShareBtnBox>
  );
}

export default ShareBtn;
