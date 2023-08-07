import {
  NextSubBtnBox,
  NextSubBtnWrap,
  NextSubBtnDot,
} from "../../styles/infobtn/nextsubmitbtntwo";
interface NextSubmitBtnProps {
  handleSaveName: () => void;
}
function NextSubmitBtnTwo({ handleSaveName }: NextSubmitBtnProps) {
  return (
    <NextSubBtnBox onClick={handleSaveName}>
      <NextSubBtnWrap>
        <NextSubBtnDot>다음으로</NextSubBtnDot>
      </NextSubBtnWrap>
    </NextSubBtnBox>
  );
}

export default NextSubmitBtnTwo;
