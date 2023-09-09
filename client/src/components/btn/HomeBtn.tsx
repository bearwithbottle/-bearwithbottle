import {
  HomeBtnWrap,
  HomeBtnBox,
  HomeBtnDot,
} from "../../styles/mainbtn/homebtn";
interface handleBar {
  handleBar: () => void;
}
function HomeBtn({ handleBar }: handleBar) {
  return (
    <HomeBtnBox onClick={handleBar}>
      <HomeBtnWrap>
        <HomeBtnDot>내 Bar가기</HomeBtnDot>
      </HomeBtnWrap>
    </HomeBtnBox>
  );
}

export default HomeBtn;
