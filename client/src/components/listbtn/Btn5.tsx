import {
  Btn5Box,
  Btn5Wrarp,
  BtnTextBox,
  Btn5img,
} from "../../styles/listbtn/btn5";
interface handleBtn5Click {
  handleBtn5Click: () => void;
}
function Btn5({ handleBtn5Click }: handleBtn5Click) {
  return (
    <Btn5Box onClick={handleBtn5Click}>
      <Btn5Wrarp>
        <Btn5img />
        <BtnTextBox>함께 즐기고 싶은</BtnTextBox>
      </Btn5Wrarp>
    </Btn5Box>
  );
}
export default Btn5;
