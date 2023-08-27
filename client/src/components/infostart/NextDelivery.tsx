import {
  NextSubBtnBox,
  NextSubBtnWrap,
  NextSubBtnDot,
} from "../../styles/infobtn/nextsubmitbtn";
interface handleExport {
  handleExport: () => void;
}
function NextDelivery({ handleExport }: handleExport) {
  return (
    <NextSubBtnBox onClick={handleExport}>
      <NextSubBtnWrap>
        <NextSubBtnDot>보내기</NextSubBtnDot>
      </NextSubBtnWrap>
    </NextSubBtnBox>
  );
}

export default NextDelivery;
