import mainfacebooklogo from "../../assets/main/main_facebook_logo.png";
import "../../assets/font/font.css";
import { styled } from "styled-components";

export const MainGithubBox = styled.a`
  width: 312px;
  height: 53px;
  background-color: #31498b;
  border-radius: 10px;
  cursor: pointer;
`;
export const MainGithubWrap = styled.div`
  width: 312px;
  height: 48px;
  background-color: #5475d0;
  border-radius: 10px;
  align-items: center;
`;
export const MainGithubLogo = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${mainfacebooklogo});
  background-size: cover;
  margin-right: 10px;
`;
export const MainGithubSpan = styled.span`
  color: #ffff;
  font-size: 18px;
`;
