import {
  Btn4Box,
  Btn4Wrarp,
  BtnTextBox,
  Btn4img,
} from "../../styles/listbtn/btn4";
interface handleBtn4Click {
  handleBtn4Click: () => void;
}
function Btn4({ handleBtn4Click }: handleBtn4Click) {
  return (
    <Btn4Box onClick={handleBtn4Click}>
      <Btn4Wrarp>
        <Btn4img />
        <BtnTextBox>슬픔을 위로하는</BtnTextBox>
      </Btn4Wrarp>
    </Btn4Box>
  );
}
export default Btn4;
