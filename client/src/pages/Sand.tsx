import {
  SandBox,
  SandMainBox,
  SandBarDisplay,
  SandTitle,
  SandMidBox,
  SandTextPongBox,
  SandTextPongContents,
  SandMidGom,
  SandBtnBox,
} from "../styles/sand";

import SandBtn from "../components/btn/SandBtn";
import HomeBtn from "../components/btn/HomeBtn";
import { Link } from "react-router-dom";

function Sand() {
  return (
    <SandBox>
      <SandMainBox>
        <SandBarDisplay>
          <SandTitle />
          <SandMidBox>
            <SandTextPongBox>
              <SandTextPongContents>
                안녕하십니까?
                <br />
                님에게 술을 보내보시겠어요?
              </SandTextPongContents>
            </SandTextPongBox>
            <SandMidGom />
          </SandMidBox>
          <SandBtnBox>
            <Link to="/list">
              <SandBtn />
            </Link>
            <HomeBtn />
          </SandBtnBox>
        </SandBarDisplay>
      </SandMainBox>
    </SandBox>
  );
}

export default Sand;
