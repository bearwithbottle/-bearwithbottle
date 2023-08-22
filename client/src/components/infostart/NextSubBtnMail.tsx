import {
  NextSubBtnBox,
  NextSubBtnWrap,
  NextSubBtnDot,
} from "../../styles/infobtn/nextsubmitbtn";
interface NextSubmitBtnProps {
  handleMessageInput: () => void;
}
function NextSubmitBtn({ handleMessageInput }: NextSubmitBtnProps) {
  return (
    <NextSubBtnBox onClick={handleMessageInput}>
      <NextSubBtnWrap>
        <NextSubBtnDot>다음으로</NextSubBtnDot>
      </NextSubBtnWrap>
    </NextSubBtnBox>
  );
}

export default NextSubmitBtn;
