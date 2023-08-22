import {
  Two1Box,
  Two1Wrarp,
  Two1img,
  BtnTextBox,
} from "../../styles/twobtn/two1";
interface handleTwo1Click {
  handleTwo1Click: () => void;
}
function Two1({ handleTwo1Click }: handleTwo1Click) {
  return (
    <Two1Box onClick={handleTwo1Click}>
      <Two1Wrarp>
        <Two1img />
        <BtnTextBox>유머 있는</BtnTextBox>
      </Two1Wrarp>
    </Two1Box>
  );
}

export default Two1;
