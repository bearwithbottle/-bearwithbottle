import { styled } from "styled-components";
export const NextModalBox = styled.div``;

export const NextModalContainer = styled.div`
  width: 360px;
  height: 755px;
  position: fixed;
  background-color: #232324;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextModalContent = styled.div`
  margin-top: 200px;
  width: 312px;
  height: 225px;
  position: fixed;
  border-radius: 16px;
  background-color: #afafaf;
`;
export const NextModalContentBox = styled.div`
  width: 312px;
  height: 220px;
  border-radius: 16px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NextModalText = styled.span`
  font-size: 20px;
  color: #686868;
  margin-bottom: 20px;
`;

export const NextModalTextTwo = styled.span`
  font-size: 12px;
  color: #bfbfbf;
`;

export const NextModalTextBox = styled.div`
  height: 62px;
  flex-direction: column;
  align-items: center;
  margin-top: 62px;
`;

//btn
export const YesSubBtnBox = styled.div`
  margin-top: 30px;
`;
export const YesSubBtnWrap = styled.div`
  width: 272px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #c6c6c6;
`;

export const YesSubBtnDot = styled.div`
  width: 262px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 16px;
  color: #e2e2e2;
`;

export const YesBtnBox = styled.div`
  cursor: pointer;
  width: 272px;
  height: 53px;
  background-color: #969696;
  border-radius: 10px;
  margin-bottom: 33px;
  &:hover {
    ${YesSubBtnWrap} {
      background-color: #9381ff;
    }
    ${YesSubBtnDot} {
      border-color: #fff;
    }
    background-color: #5144a0;
  }
`;
