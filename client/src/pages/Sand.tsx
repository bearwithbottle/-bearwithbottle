/* eslint-disable react-hooks/exhaustive-deps */
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserid } from "../action";
function Sand() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loca = useLocation();
  const parts = loca.pathname.split("/");
  const userId = parts[parts.length - 1];

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid === userId) {
      navigate(`/bar/${uid}`);
    } else {
      dispatch(setUserid(userId));
    }
  }, []);
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
