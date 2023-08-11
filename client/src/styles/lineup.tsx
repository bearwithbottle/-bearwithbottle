import { styled } from "styled-components";

import back from "../assets/main/BG_feature.png";

export const LineUpBox = styled.div`
  width: 360px;
  height: 800px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;
export const LineUpTextBox = styled.div`
  width: 360px;
  height: 88px;

  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const LineUpText = styled.span`
  color: #fff;
  font-size: 20px;
`;
