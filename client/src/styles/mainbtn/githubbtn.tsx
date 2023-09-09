import maingitlogo from "../../assets/main/main_git_logo.png";
import "../../assets/font/font.css";
import { styled } from "styled-components";

export const MainGithubBox = styled.a`
  width: 312px;
  height: 53px;
  background-color: #4f2783;
  border-radius: 10px;
  cursor: pointer;
`;
export const MainGithubWrap = styled.div`
  width: 312px;
  height: 48px;
  background-color: #6e43c8;
  border-radius: 10px;
  align-items: center;
`;
export const MainGithubLogo = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${maingitlogo});
  background-size: cover;
  margin-right: 10px;
`;
export const MainGithubSpan = styled.span`
  color: #ffff;
  font-size: 18px;
`;
