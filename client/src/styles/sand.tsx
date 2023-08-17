import { styled } from "styled-components";
import main from "../assets/main/Bar_BG.png";
import maintext from "../assets/bar/title.png";

export const SandBox = styled.div`
  width: 360px;
  height: 800px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url(${main});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;
export const SandMainBox = styled.div`
  width: 360px;
  height: 800px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url();
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;

export const SandBarDisplay = styled.div`
  width: 360px;
  height: 730px;
  margin: 35px 0;
  flex-direction: column;
  align-items: center;
`;
export const SandTitle = styled.div`
  width: 360px;
  height: 130px;
  background-image: url(${maintext});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const SandMidBox = styled.div`
  width: 360px;
  height: 296px;
  padding-left: 24px;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 85px;
`;
export const SandTextPongBox = styled.div`
  width: 238px;
  height: 83px;
  border-radius: 10px;
  background-color: #afafaf;
`;
export const SandTextPongContents = styled.div`
  width: 238px;
  height: 78px;
  border-radius: 10px;
  padding: 19px 12px;
  background-color: #f2f2f2;
  line-height: 23px;
`;
export const SandMidGom = styled.div`
  width: 234px;
  height: 200px;
  background-color: wheat;
`;
export const SandBtnBox = styled.div`
  width: 312px;
  height: 122px;
  flex-direction: column;
  justify-content: space-between;
`;
