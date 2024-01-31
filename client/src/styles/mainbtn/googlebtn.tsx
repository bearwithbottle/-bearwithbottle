import maingooglelogo from "../../assets/main/main_google_logo.png";
import "../../assets/font/font.css";
import { styled } from "styled-components";

//Google
export const MainGoogleBox = styled.a`
  width: 312px;
  height: 53px;
  background-color: #ae4213;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const MainGoogleWrap = styled.div`
  width: 312px;
  height: 48px;
  background-color: #ea5514;
  border-radius: 10px;
  align-items: center;
`;
export const MainGoogleLogo = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${maingooglelogo});
  background-size: cover;
  margin-right: 10px;
`;
export const MainGoogleSpan = styled.span`
  color: #ffff;
  font-size: 18px;
`;
