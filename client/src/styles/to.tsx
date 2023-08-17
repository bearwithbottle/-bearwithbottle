import { styled } from "styled-components";

import back from "../assets/main/BG_feature.png";
import last from "../assets/to.png";

export const ToBox = styled.div`
  width: 360px;
  height: 800px;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
  position: relative;
`;
export const TextBox = styled.div`
  width: 360px;
  height: 88px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 88px;
`;
export const Text = styled.span`
  font-size: 20px;
  color: #fff;
`;
export const ToMailBox = styled.div`
  width: 274px;
  height: 298px;
  background-size: cover;
  background-image: url(${last});
`;
export const MailText = styled.div`
  color: #686868;
  font-size: 16px;
  top: 65%;
  position: absolute;
`;
export const BtnBox = styled.div`
  width: 312px;
  height: 122px;

  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 33px;
`;
//btn
export const NextSubBtnWrap = styled.div`
  width: 312px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #9381ff;
`;

export const NextSubBtnDot = styled.div`
  width: 301.6px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 18px;
  color: #ffff;
`;

export const NextSubBtnBox = styled.div`
  cursor: pointer;
  width: 312px;
  height: 53px;
  background-color: #5144a0;
  border-radius: 10px;

  &:active {
    ${NextSubBtnWrap} {
      background-color: #6659af;
    }
  }
`;
export const MyHomeBtnWrap = styled.div`
  width: 312px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #ccc3ff;
`;

export const MyHomeBtnDot = styled.div`
  width: 301.6px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 18px;
  color: #7266b4;

  &:active {
    ${MyHomeBtnWrap} {
      color: #fff;
    }
  }
`;

export const MyHomeBtnBox = styled.div`
  cursor: pointer;
  width: 312px;
  height: 53px;
  background-color: #746ca3;
  border-radius: 10px;

  &:active {
    ${MyHomeBtnWrap} {
      background-color: #6659af;
    }
  }
`;
