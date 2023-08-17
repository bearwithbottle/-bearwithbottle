import { styled } from "styled-components";

import back from "../assets/main/BG_feature.png";

export const LineUpBox = styled.div`
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
  overflow-x: hidden;
`;
export const LineUpTextBox = styled.div`
  width: 360px;
  height: 88px;

  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const LineUpText = styled.span`
  color: #fff;
  font-size: 20px;
`;

export const RecoBox = styled.div`
  width: 960px;
  height: 502px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 113px;
`;
export const RecoBoxContents = styled.div`
  width: 312px;
  height: 502px;
  border-radius: 16px;
  background-color: #afafaf;
`;
export const RecoBoxContentsIn = styled.div`
  width: 312px;
  height: 497px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
`;
export const RecoImgBox = styled.div`
  width: 272px;
  height: 168px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;
export const RecoImg = styled.div<{ url: string }>`
  width: 54px;
  height: 120px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
`;
export const RecoTextBox = styled.div`
  width: 271px;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;
`;
export const RecoTextTitle = styled.span`
  color: #444444;
  font-size: 24px;
`;
export const RecoTextName = styled.span`
  font-size: 12px;
  color: #aaaaaa;
`;
// Tag
export const RecoTagBox = styled.div`
  width: 158px;
  height: 27px;
  align-items: center;
  justify-content: center;
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
//Mid
export const MidLine = styled.div`
  width: 24px;
  height: 4px;
  border-radius: 7px;
  background-color: #d8d8d8;
`;
//Text
export const TextBox = styled.div`
  width: 272px;
  height: 82px;
  font-size: 14px;
  color: #444444;
  text-align: center;
`;
//Btn
export const NextSubBtnWrap = styled.div`
  width: 272px;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  background-color: #9381ff;
`;

export const NextSubBtnDot = styled.div`
  width: 264px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 18px;
  color: #ffff;
`;

export const NextSubBtnBox = styled.div`
  cursor: pointer;
  width: 272px;
  height: 53px;
  background-color: #5144a0;
  border-radius: 10px;
  &:active {
    ${NextSubBtnWrap} {
      background-color: #6659af;
    }
  }
`;
