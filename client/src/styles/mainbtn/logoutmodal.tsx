import { styled } from "styled-components";
export const LogoutModalBox = styled.div`
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
export const Logoutbox = styled.div`
  width: 312px;
  height: 210px;
  background-color: #afafaf;
  border-radius: 16px;
`;
export const LogoutboxIn = styled.div`
  width: 312px;
  height: 207px;
  background-color: #fff;
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const LogoutTopText = styled.p`
  font-size: 20px;
  color: #523c2f;
  margin-top: 21px;
`;
export const LogoutMidText = styled.p`
  font-size: 12px;
  color: #bfbfbf;
`;
export const LogoutBtnBox = styled.div`
  width: 273px;
  height: 53px;
  justify-content: space-between;
  margin-bottom: 22px;
`;
export const NextSubBtnWrap = styled.div`
  width: 128px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #9381ff;
`;

export const NextSubBtnDot = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 18px;
  color: #ffff;
`;

export const NextSubBtnBox = styled.div`
  cursor: pointer;
  width: 128px;
  height: 53px;
  background-color: #5144a0;
  border-radius: 10px;
  &:active {
    ${NextSubBtnWrap} {
      background-color: #6659af;
    }
  }
`;

export const HomeBtnWrap = styled.div`
  width: 272px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #9381ff;
`;

export const HomeBtnDot = styled.div`
  width: 264px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 18px;
  color: #ffff;
`;

export const HomeBtnBox = styled.div`
  cursor: pointer;
  width: 272px;
  height: 53px;
  background-color: #5144a0;
  border-radius: 10px;
  &:active {
    ${HomeBtnWrap} {
      background-color: #6659af;
    }
  }
`;
