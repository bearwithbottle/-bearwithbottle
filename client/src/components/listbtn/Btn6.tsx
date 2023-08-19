import {
  Btn6Box,
  Btn6Wrarp,
  BtnTextBox,
  Btn6img,
} from "../../styles/listbtn/btn6";
interface handleBtn6Click {
  handleBtn6Click: () => void;
}
function Btn6({ handleBtn6Click }: handleBtn6Click) {
  return (
    <Btn6Box onClick={handleBtn6Click}>
      <Btn6Wrarp>
        <Btn6img />
        <BtnTextBox>응원하고싶은</BtnTextBox>
      </Btn6Wrarp>
    </Btn6Box>
  );
}
export default Btn6;
