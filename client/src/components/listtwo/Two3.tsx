import {
  Two3Box,
  Two3Wrarp,
  Two3img,
  BtnTextBox,
} from "../../styles/twobtn/two3";
interface handleTwo3Click {
  handleTwo3Click: () => void;
}
function Two3({ handleTwo3Click }: handleTwo3Click) {
  return (
    <Two3Box onClick={handleTwo3Click}>
      <Two3Wrarp>
        <Two3img />
        <BtnTextBox>시크한</BtnTextBox>
      </Two3Wrarp>
    </Two3Box>
  );
}

export default Two3;
