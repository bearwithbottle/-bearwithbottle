import { styled } from "styled-components";
import info from "../../assets/main/Frame_288.png";
export const ModalBox = styled.div``;

export const ModalContainer = styled.div`
  width: 360px;
  height: 770px;
  position: fixed;
  background-color: #232324;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  margin-top: 200px;
  width: 312px;
  height: 316px;
  position: fixed;
  border-radius: 16px;
  background-color: #afafaf;
`;
export const ModalContentBox = styled.div`
  width: 312px;
  height: 308.85px;
  border-radius: 16px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ModalText = styled.span`
  font-size: 20px;
  color: #523c2f;
  margin-top: 20px;
`;
export const ModalInfo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${info});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const ModalTextTwo = styled.span`
  font-size: 16px;
  color: #686868;
`;
export const ModalTextThree = styled.span`
  font-size: 12px;
  color: #bfbfbf;
`;
//Btn
export const ModalBtnBox = styled.div`
  width: 264px;
  height: 53px;
  justify-content: space-between;
  margin-bottom: 16px;
`;
// Yes

export const YesSubBtnWrap = styled.div`
  width: 124px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #c6c6c6;
`;

export const YesSubBtnDot = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 16px;
  color: #e2e2e2;
`;

export const YesBtnBox = styled.div`
  cursor: pointer;
  width: 124px;
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
// No

export const NoSubBtnWrap = styled.div`
  width: 124px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #c6c6c6;
`;

export const NoSubBtnDot = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 16px;
  color: #e2e2e2;
`;

export const NoBtnBox = styled.div`
  cursor: pointer;
  width: 124px;
  height: 53px;
  background-color: #969696;
  border-radius: 10px;
  margin-bottom: 33px;
  &:hover {
    ${NoSubBtnWrap} {
      background-color: #9381ff;
    }
    ${NoSubBtnDot} {
      border-color: #fff;
    }
    background-color: #5144a0;
  }
`;
