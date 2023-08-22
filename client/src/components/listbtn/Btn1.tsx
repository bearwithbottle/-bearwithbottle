import {
  Btn1Box,
  Btn1Wrarp,
  BtnTextBox,
  Btn1img,
} from "../../styles/listbtn/btn1";
interface handleBtn1Click {
  handleBtn1Click: () => void;
}
function Btn1({ handleBtn1Click }: handleBtn1Click) {
  return (
    <Btn1Box onClick={handleBtn1Click}>
      <Btn1Wrarp>
        <Btn1img />
        <BtnTextBox>사랑하는</BtnTextBox>
      </Btn1Wrarp>
    </Btn1Box>
  );
}
export default Btn1;
