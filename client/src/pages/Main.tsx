import { MainBox, Neon00, Neon01 } from "../styles/main";
import neon00 from "../assets/main_neon.png";
import neon01 from "../assets/main_neon01.png";

function Main() {
  return (
    <MainBox>
      <Neon00 src={neon00} />
      <Neon01 src={neon01} />
    </MainBox>
  );
}

export default Main;
