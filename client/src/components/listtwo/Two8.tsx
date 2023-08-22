import {
  Two8Box,
  Two8Wrarp,
  Two8img,
  BtnTextBox,
} from "../../styles/twobtn/two8";

interface handleTwo8Click {
  handleTwo8Click: () => void;
}
function Two8({ handleTwo8Click }: handleTwo8Click) {
  return (
    <Two8Box onClick={handleTwo8Click}>
      <Two8Wrarp>
        <Two8img />
        <BtnTextBox>다정한</BtnTextBox>
      </Two8Wrarp>
    </Two8Box>
  );
}

export default Two8;
