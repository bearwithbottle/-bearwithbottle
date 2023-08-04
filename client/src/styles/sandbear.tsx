import { styled } from "styled-components";

import back from "../assets/main/BG_feature.png";

export const SandBearBox = styled.div`
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
export const SandBearTextBox = styled.div`
  width: 360px;
  height: 88px;

  justify-content: center;
  align-items: center;
`;
export const SandBearText = styled.span`
  color: #fff;
  font-size: 20px;
`;
export const MailBox = styled.div`
  width: 312px;
  height: 467px;
  flex-direction: column;
  align-items: center;
  background-color: red;
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
  height: 59px;
  background-color: #ffff;
  border-radius: 16px;
  border: none;
  outline: none;
`;
export const MailTextBox = styled.div`
  width: 302px;
  height: 331px;
  background-color: #898b8e;
  border-radius: 16px;
  margin-bottom: 33px;
`;

export const MailTextWrap = styled.div`
  width: 302px;
  height: 326px;
  border-radius: 16px;
  align-items: center;
  background-color: #c6c6c6;
`;

export const MailTextDot = styled.div`
  width: 301.6px;
  height: 40px;
  border-radius: 8px;
  border: 1px dotted #9a9a9a;
  align-items: center;
  font-size: 18px;
  color: #959595;
`;
