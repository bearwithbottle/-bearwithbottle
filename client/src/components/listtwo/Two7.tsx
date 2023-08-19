import {
  Two7Box,
  Two7Wrarp,
  Two7img,
  BtnTextBox,
} from "../../styles/twobtn/two7";
interface handleTwo7Click {
  handleTwo7Click: () => void;
}
function Two7({ handleTwo7Click }: handleTwo7Click) {
  return (
    <Two7Box onClick={handleTwo7Click}>
      <Two7Wrarp>
        <Two7img />
        <BtnTextBox>개성있는</BtnTextBox>
      </Two7Wrarp>
    </Two7Box>
  );
}

export default Two7;
