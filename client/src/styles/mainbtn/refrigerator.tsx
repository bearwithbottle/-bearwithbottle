import { styled } from "styled-components";

export const RefrigeratorWrap = styled.div`
  width: 312px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #ccc3ff;
`;

export const RefrigeratorDot = styled.div`
  width: 301.6px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #ccc3ff;
  align-items: center;
  font-size: 18px;
  color: #7266b4;
`;

export const RefrigeratorBox = styled.div`
  cursor: pointer;
  width: 312px;
  height: 53px;
  background-color: #746ca3;
  border-radius: 10px;

  &:active {
    ${RefrigeratorWrap} {
      background-color: #6659af;
      color: #fff;
    }
  }
`;
