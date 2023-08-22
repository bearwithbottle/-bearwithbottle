import {
  Btn8Box,
  Btn8Wrarp,
  BtnTextBox,
  Btn8img,
} from "../../styles/listbtn/btn8";
interface handleBtn8Click {
  handleBtn8Click: () => void;
}
function Btn8({ handleBtn8Click }: handleBtn8Click) {
  return (
    <Btn8Box onClick={handleBtn8Click}>
      <Btn8Wrarp>
        <Btn8img />
        <BtnTextBox>함께 기념하고 싶은</BtnTextBox>
      </Btn8Wrarp>
    </Btn8Box>
  );
}
export default Btn8;
