import {
  Btn3Box,
  Btn3Wrarp,
  BtnTextBox,
  Btn3img,
} from "../../styles/listbtn/btn3";
interface handleBtn3Click {
  handleBtn3Click: () => void;
}
function Btn3({ handleBtn3Click }: handleBtn3Click) {
  return (
    <Btn3Box onClick={handleBtn3Click}>
      <Btn3Wrarp>
        <Btn3img />
        <BtnTextBox>피로를 풀어주는</BtnTextBox>
      </Btn3Wrarp>
    </Btn3Box>
  );
}
export default Btn3;
