import { styled } from "styled-components";
import "../assets/font/font.css";
import back from "../assets/main/BG_feature.png";
export const InfoContainer = styled.div`
  width: 360px;
  height: 800px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;
export const InfoBox = styled.div`
  margin-top: 31px;
  flex-direction: column;
`;

export const InfoBoxWrap = styled.div`
  margin-top: 41px;
  flex-direction: column;
  align-items: center;
`;
export const InfoNameText = styled.span`
  font-size: 22px;
  color: #ffff;
  text-align: center;
  line-height: 30px;
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
export const NextSubBtnWrap = styled.div`
  cursor: pointer;
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
  width: 312px;
  height: 53px;
  background-color: #5144a0;
  border-radius: 10px;
  margin-bottom: 33px;
  &:active {
    ${NextSubBtnWrap} {
      background-color: #6659af;
    }
  }
`;
