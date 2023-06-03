import { styled } from "styled-components";
import main from "../assets/main/main_background.png";
import maintext from "../assets/main/main_text.png";
import "../assets/font/font.css";

export const MainBox = styled.div`
  width: 360px;
  height: 800px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${main});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
`;

export const MainText = styled.div`
  width: 360px;
  height: 313px;
  background-image: url(${maintext});
  background-repeat: no-repeat;
  background-size: auto;
`;
