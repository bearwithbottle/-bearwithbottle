import {
  Two4Box,
  Two4Wrarp,
  Two4img,
  BtnTextBox,
} from "../../styles/twobtn/two4";
interface handleTwo4Click {
  handleTwo4Click: () => void;
}
function Two4({ handleTwo4Click }: handleTwo4Click) {
  return (
    <Two4Box onClick={handleTwo4Click}>
      <Two4Wrarp>
        <Two4img />
        <BtnTextBox>신중한</BtnTextBox>
      </Two4Wrarp>
    </Two4Box>
  );
}

export default Two4;
