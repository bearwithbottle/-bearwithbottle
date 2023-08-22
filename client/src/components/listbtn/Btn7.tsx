import {
  Btn7Box,
  Btn7Wrarp,
  BtnTextBox,
  Btn7img,
} from "../../styles/listbtn/btn7";
interface handleBtn7Click {
  handleBtn7Click: () => void;
}
function Btn7({ handleBtn7Click }: handleBtn7Click) {
  return (
    <Btn7Box onClick={handleBtn7Click}>
      <Btn7Wrarp>
        <Btn7img />
        <BtnTextBox>이유가 뭐 있나</BtnTextBox>
      </Btn7Wrarp>
    </Btn7Box>
  );
}
export default Btn7;
