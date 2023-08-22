import {
  Btn2Box,
  Btn2Wrarp,
  Btn2img,
  BtnTextBox,
} from "../../styles/listbtn/btn2";
interface handleBtn2Click {
  handleBtn2Click: () => void;
}
function Btn2({ handleBtn2Click }: handleBtn2Click) {
  return (
    <Btn2Box onClick={handleBtn2Click}>
      <Btn2Wrarp>
        <Btn2img />
        <BtnTextBox>감사하는</BtnTextBox>
      </Btn2Wrarp>
    </Btn2Box>
  );
}

export default Btn2;
