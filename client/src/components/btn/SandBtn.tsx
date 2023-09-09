import {
  SandBtnBox,
  SandBtnDot,
  SandBtnWrap,
} from "../../styles/mainbtn/sandbtn";
interface handleSave {
  handleSave: () => void;
}
function SandBtn({ handleSave }: handleSave) {
  return (
    <SandBtnBox onClick={handleSave}>
      <SandBtnWrap>
        <SandBtnDot>주류 선물하기</SandBtnDot>
      </SandBtnWrap>
    </SandBtnBox>
  );
}

export default SandBtn;
