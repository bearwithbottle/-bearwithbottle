import { styled } from "styled-components";

import xbox from "../../assets/main/boxX.png";
export const BottlesModalBox = styled.div`
  background-color: rgba(35, 35, 35, 0.9); /* 배경색에 투명도 추가 */
  width: 360px;
  height: 800px;
  transform: translate(0%, 0%);
  font-family: "ImcreSoojin";
  position: fixed;
  z-index: 2;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const BottlesModalContents = styled.div`
  width: 312px;
  height: 587px;
  flex-direction: column;
  justify-content: space-between;
`;

export const BottlesModalInfo = styled.div`
  width: 312px;
  height: 384px;
  border-radius: 16px;
  background-color: #afafaf;
`;
export const BottlesModalInfoIn = styled.div`
  width: 312px;
  height: 379px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
`;
export const BottlesImgBox = styled.div<{ back: string }>`
  width: 272px;
  height: 168px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  ${(props) => props.back && `background-image: url(${props.back});`}
  background-size: cover;
`;
export const BottlesImg = styled.div<{ storage: string }>`
  width: 54px;
  height: 150px;
  ${(props) => props.storage && `background-image: url(${props.storage});`}
  background-size: cover;
`;
export const BottlesTextBox = styled.div`
  width: 271px;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;
`;
export const BottlesTextTitle = styled.span`
  color: #444444;
  font-size: 24px;
`;
export const BottlesTextName = styled.span`
  font-size: 12px;
  color: #aaaaaa;
`;
export const BottlesTagBox = styled.div`
  width: 158px;
  height: 27px;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
`;
export const Tags = styled.div`
  width: 42px;
  height: 15px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  font-family: "Pre";
  background-color: #e3deff;
`;
export const TagText = styled.span`
  font-size: 9px;
  color: #8977f4;
`;
export const MidLine = styled.div`
  width: 24px;
  height: 7px;
  border-radius: 7px;
  background-color: #d8d8d8;
`;
export const TextBox = styled.div`
  width: 272px;
  height: 40px;
  font-size: 12px;
  line-height: 18px;
  color: #444444;
  text-align: center;
`;
export const MailBox = styled.div`
  width: 312px;
  height: 187px;
  border-radius: 16px;
  background-color: #afafaf;
`;
export const MailBoxIn = styled.div`
  width: 312px;
  height: 182px;
  border-radius: 16px;
  align-items: center;
  background-color: #f2f2f2;
`;
export const MailDot = styled.div`
  width: 292px;
  height: 162px;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px dotted #c489ff;
`;
export const MailName = styled.div`
  width: 272px;
  font-size: 16px;

  padding-left: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  color: #686868;
`;

export const MailContent = styled.div<{ saveBack: string }>`
  width: 272px;
  height: 107px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  font-size: 14px;
  color: #444444;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.saveBack};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
    border-radius: 15px;
    height: 3px;
    width: 3px;
  }
`;
export const Xbox = styled.div`
  width: 56px;
  height: 56px;
  background-image: url(${xbox});
  background-size: cover;
  margin-top: 45px;
  cursor: pointer;
`;
