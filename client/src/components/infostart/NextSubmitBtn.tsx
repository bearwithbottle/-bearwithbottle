import {
  NextSubBtnBox,
  NextSubBtnWrap,
  NextSubBtnDot,
} from "../../styles/infobtn/nextsubmitbtn";

interface NextSubmitBtnProps {
  handleGomSubmit: () => void;
}

function NextSubmitBtn({ handleGomSubmit }: NextSubmitBtnProps) {
  return (
    <NextSubBtnBox onClick={handleGomSubmit}>
      <NextSubBtnWrap>
        <NextSubBtnDot>다음으로</NextSubBtnDot>
      </NextSubBtnWrap>
    </NextSubBtnBox>
  );
}

export default NextSubmitBtn;
