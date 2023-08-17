import { styled } from "styled-components";

import back from "../assets/main/BG_feature.png";

export const MailBox = styled.div`
  width: 360px;
  height: 800px;
  padding: 0;
  flex-direction: column;
  align-items: center;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;
export const MailTextBox = styled.div`
  width: 360px;
  height: 88px;

  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const MailText = styled.span`
  color: #fff;
  font-size: 20px;
`;
export const NameWrap = styled.div`
  width: 312px;
  height: 64px;
  background-color: #afafaf;
  border-radius: 16px;
`;

export const NameBox = styled.input`
  font-size: 14px;
  font-family: "ImcreSoojin";
  padding: 20px 30px;
  width: 312px;
  height: 20px;
  background-color: #ffff;
  border-radius: 16px;
  border: none;
  outline: none;
`;
export const MailContentsBox = styled.div`
  width: 312px;
  height: 467px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const SandMailBox = styled.div`
  width: 312px;
  height: 331px;
  border-radius: 16px;
  background-color: #afafaf;
`;
export const SandMailBoxIn = styled.div`
  width: 312px;
  height: 326px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;
export const SandMailBoxDot = styled.textarea<{ selectedColor: string }>`
  width: 292px;
  height: 306px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: "ImcreSoojin";
  border-radius: 16px;
  border: none;
  outline: none;
  border: 2px dashed #c489ff;
  background-color: ${({ selectedColor }) => selectedColor || "#bcd5fc"};
  align-items: center;
  padding: 20px 17px;
`;
export const ColorBox = styled.div`
  width: 292px;
  height: 40px;
  justify-content: space-between;
`;
export const ColorOne = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fdb7b7;
`;
export const ColorTwo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fcea85;
`;
export const ColorThree = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #a5ffde;
`;

export const ColorFour = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #bcd5fc;
`;

export const ColorFive = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #e0dbfd;
`;
