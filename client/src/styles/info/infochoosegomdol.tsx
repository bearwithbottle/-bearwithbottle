import { styled } from "styled-components";
import "../../assets/font/font.css";
import back from "../../assets/main/BG_feature.png";

export const GomdolContainer = styled.div`
  width: 360px;
  height: 800px;
  flex-direction: column;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  font-family: "ImcreSoojin";
`;
export const GomdolWarp = styled.div`
  height: 550px;
  width: 360px;
  margin-bottom: 62px;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;

export const PreWrap = styled.div`
  height: 103px;
  align-items: center;
  background-color: yellow;
`;

export const GomdolText = styled.div`
  font-size: 18px;
  margin-top: 20px;
  color: #fff;
`;
export const InfoCircleWarp = styled.div`
  margin: 26.5px 0 31px 0;
  width: 38px;
  height: 6px;
  justify-content: space-between;
`;
export const InfoCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #4d5055;
`;

export const GomdolgChoose = styled.div`
  width: 312px;
  height: 317px;
  border-radius: 16px;
  background-color: yellow;
`;
export const GomdolgChooseImg = styled.div`
  width: 312px;
  height: 312px;
  border-radius: 16px;
  background-color: black;
`;
