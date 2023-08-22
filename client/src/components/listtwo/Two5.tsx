import {
  Two5Box,
  Two5Wrarp,
  Two5img,
  BtnTextBox,
} from "../../styles/twobtn/two5";
interface handleTwo5Click {
  handleTwo5Click: () => void;
}
function Two5({ handleTwo5Click }: handleTwo5Click) {
  return (
    <Two5Box onClick={handleTwo5Click}>
      <Two5Wrarp>
        <Two5img />
        <BtnTextBox>애교있는</BtnTextBox>
      </Two5Wrarp>
    </Two5Box>
  );
}

export default Two5;
