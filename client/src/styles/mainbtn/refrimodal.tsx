import { styled } from "styled-components";
import test from "../../assets/test.png";
import xbox from "../../assets/main/boxX.png";
export const RefriModalBox = styled.div`
  background-color: rgba(35, 35, 35, 0.9); /* 배경색에 투명도 추가 */
  width: 360px;
  height: 800px;
  font-family: "ImcreSoojin";
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;
export const RefriModalContents = styled.div`
  width: 312px;
  height: 540px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const BottleBox = styled.div`
  width: 104px;
  height: 164px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BottleBoxImg = styled.div`
  background-image: url(${test});
  background-size: cover;
  width: 54px;
  height: 120px;
`;
export const BottleBoxNameBox = styled.div`
  box-sizing: border-box;
  width: 82px;
  height: 32px;
  border-radius: 6px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  background-color: #e3deff;
  color: #8977f4;
  font-size: 14px;
  padding: 5px;
`;
export const BottleBoxName = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Xbox = styled.div`
  width: 56px;
  height: 56px;
  background-image: url(${xbox});
  background-size: cover;
  margin-top: 92px;
`;
