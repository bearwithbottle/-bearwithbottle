import { styled } from "styled-components";

export const HomeBtnWrap = styled.div`
  width: 312px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #9381ff;
`;

export const HomeBtnDot = styled.div`
  width: 301.6px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 18px;
  color: #ffff;
`;

export const HomeBtnBox = styled.div`
  cursor: pointer;
  width: 312px;
  height: 53px;
  background-color: #5144a0;
  border-radius: 10px;

  &:active {
    ${HomeBtnWrap} {
      background-color: #6659af;
    }
  }
`;
