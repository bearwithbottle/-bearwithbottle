import { styled } from "styled-components";

import back from "../assets/main/BG_feature.png";

export const DeliveryBox = styled.div`
  width: 360px;
  height: 800px;
  padding: 0;
  flex-direction: column;
  align-items: center;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
  justify-content: space-between;
  position: relative;
`;

export const DeliveryMidBox = styled.div`
  width: 312px;
  height: 587px;
  flex-direction: column;
  justify-content: space-between;
`;
export const DeliveryImgBox = styled.div`
  width: 312px;
  height: 384px;
  border-radius: 16px;
  background-color: #afafaf;
`;
export const DeliveryImgBoxIn = styled.div`
  width: 312px;
  height: 379px;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f2f2f2;
`;
export const DeliveryImgBack = styled.div`
  width: 272px;
  height: 232px;
  border-radius: 16px;
  align-items: center;
  background-color: blue;
`;
export const DeliveryImg = styled.div<{ url: string }>`
  width: 81px;
  height: 180px;

  background-size: cover;
  background-image: ${({ url }) => `url(${url})`};
`;
export const DeliverySticker = styled.div<{ sticker: string }>`
  width: 48px;
  height: 48px;
  top: 34%;
  left: 50%;
  position: absolute;
  background-size: cover;
  background-image: ${({ sticker }) => `url(${sticker})`};
`;
export const DeliveryTextBox = styled.div`
  width: 271px;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;
`;
export const DeliveryTextTitle = styled.span`
  color: #444444;
  font-size: 24px;
`;
export const DeliveryTextName = styled.span`
  font-size: 12px;
  color: #aaaaaa;
`;
//tags
export const DeliveryTagBox = styled.div`
  width: 158px;
  height: 27px;
  align-items: center;
  justify-content: space-evenly;
`;
export const Tags = styled.div`
  padding: 1px;
  height: 15px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: #e3deff;
`;
export const TagText = styled.span`
  font-size: 9px;
  color: #8977f4;
`;
//mail
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
export const MailName = styled.div<{ children: React.ReactNode }>`
  width: 272px;
  font-size: 16px;
  padding-left: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  color: #686868;
`;

export const MailContent = styled.div`
  width: 272px;
  height: 107px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  font-size: 14px;
  color: #444444;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #bcd5fc;
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
