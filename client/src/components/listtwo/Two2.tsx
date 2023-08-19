import {
  Two2Box,
  Two2Wrarp,
  Two2img,
  BtnTextBox,
} from "../../styles/twobtn/two2";
interface handleTwo2Click {
  handleTwo2Click: () => void;
}
function Two2({ handleTwo2Click }: handleTwo2Click) {
  return (
    <Two2Box onClick={handleTwo2Click}>
      <Two2Wrarp>
        <Two2img />
        <BtnTextBox>성실한</BtnTextBox>
      </Two2Wrarp>
    </Two2Box>
  );
}

export default Two2;
