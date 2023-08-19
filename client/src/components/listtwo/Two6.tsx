import {
  Two6Box,
  Two6Wrarp,
  Two6img,
  BtnTextBox,
} from "../../styles/twobtn/two6";
interface handleTwo6Click {
  handleTwo6Click: () => void;
}
function Two6({ handleTwo6Click }: handleTwo6Click) {
  return (
    <Two6Box onClick={handleTwo6Click}>
      <Two6Wrarp>
        <Two6img />
        <BtnTextBox>열정적인</BtnTextBox>
      </Two6Wrarp>
    </Two6Box>
  );
}

export default Two6;
