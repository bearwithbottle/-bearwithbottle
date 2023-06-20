import { styled } from "styled-components";
import "../../assets/font/font.css";
import back from "../../assets/main/BG_feature.png";

export const Backround = styled.div`
  width: 360px;
  height: 800px;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
  flex-direction: column;
`;
export const TopWrap = styled.div`
  flex-direction: column;
`;
export const TopBox = styled.div`
  flex-direction: column;
  align-items: center;
`;
export const PreBtnBox = styled.div`
  align-items: center;
  justify-content: flex-start;
  color: #909195;
  :hover {
    cursor: pointer;
  }
  .PreBtn {
    width: 35px;
    height: 35px;
  }
`;

export const PreBtnSpan = styled.span`
  font-size: 18px;
`;

export const TopTextBox = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopText = styled.span`
  font-size: 20px;
  align-items: center;
  height: 64px;
  color: #ffff;
`;
export const CircleBox = styled.div`
  width: 38px;
  justify-content: space-between;
`;

export const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #4d5055;
`;
export const CircleT = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #909195;
`;

export const BtnBox = styled.div`
  margin-top: 31px;
  width: 312px;
  height: 53px;
  justify-content: space-between;
`;

export const YesBtnBox = styled.div`
  width: 150px;
  height: 53px;
  border-radius: 10px;
  background-color: #969696;
  :hover {
    color: #ffff;
    background-color: #9381ff;
  }
`;

export const YesBtn = styled.div`
  height: 48px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  background-color: #c6c6c6;
  :hover {
    background-color: #9381ff;
  }
`;
export const NoBtnBox = styled.div`
  width: 150px;
  height: 53px;
  border-radius: 10px;
  background-color: #969696;
`;

export const NoBtn = styled.div`
  height: 48px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  background-color: #c6c6c6;
`;
