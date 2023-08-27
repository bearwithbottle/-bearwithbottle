import { styled } from "styled-components";
import main from "../assets/main/main_background.png";
import maintext from "../assets/main/main_text.png";
import "../assets/font/font.css";

export const MainBox = styled.div`
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

export const MainText = styled.div`
  width: 310px;
  height: 316px;
  background-image: url(${maintext});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 141px;
`;

// Btn

export const MainBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 312px;
  height: 191px;
  margin-bottom: 50px;
`;
