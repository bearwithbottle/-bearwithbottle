import { styled } from "styled-components";

import back from "../assets/main/BG_feature.png";
import nodeco from "../assets/deco/nodeco.png";
import cutedeco from "../assets/deco/cutedeco.png";
import raindeco from "../assets/deco/raindeco.png";
import good from "../assets/deco/gooddeco.png";
export const DecorateBox = styled.div`
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
  position: relative;
  justify-content: space-between;
`;
export const DecorateTextBox = styled.div`
  width: 360px;
  height: 88px;

  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const DecorateText = styled.span`
  color: #fff;
  font-size: 20px;
`;
export const DecorateMidBox = styled.div`
  width: 312px;
  height: 483px;
  flex-direction: column;
  justify-content: space-between;
`;
export const DecorateImgBox = styled.div`
  width: 312px;
  height: 367px;
  border-radius: 16px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const DecorateImg = styled.div<{ img: any }>`
  width: 135px;
  height: 300px;
  position: absolute;
  background-color: blue;
  background-size: cover;
  background-image: ${({ img }) => `url(${img})`};
`;
export const DecorateImgdeco = styled.div<{
  isOne: boolean;
  isTwo: boolean;
  isThree: boolean;
  isFour: boolean;
}>`
  width: 96px;
  height: 96px;
  top: 59%;
  left: 50%;
  position: absolute;
  ${(props) => props.isOne && `background-image: url();`}
  ${(props) => props.isTwo && `background-image: url(${cutedeco});`}
  ${(props) => props.isThree && `background-image: url(${raindeco});`}
  ${(props) => props.isFour && `background-image: url(${good});`}
  background-size: cover;
`;
export const DecorateDoceBox = styled.div`
  width: 312px;
  height: 100px;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const DecorateNodecoBox = styled.div<{ isOne: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  ${(props) =>
    props.isOne &&
    `border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);`}
`;
export const DecorateNodeco = styled.div`
  width: 64px;
  height: 64px;
  cursor: pointer;
  background-image: url(${nodeco});
  background-size: cover;
`;
export const DecorateCuteBox = styled.div<{ isTwo: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  ${(props) =>
    props.isTwo &&
    `border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);`}
`;
export const DecorateCute = styled.div<{ twoUrl: string }>`
  width: 64px;
  height: 64px;
  cursor: pointer;
  background-image: url(${(props) => props.twoUrl});
  background-size: cover;
`;
export const DecorateRainBox = styled.div<{ isThree: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  ${(props) =>
    props.isThree &&
    `border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);`}
`;
export const DecorateRain = styled.div<{ threeUrl: string }>`
  width: 64px;
  height: 64px;
  cursor: pointer;
  background-image: url(${(props) => props.threeUrl});
  background-size: cover;
`;
export const DecorateGoodBox = styled.div<{ isFour: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  ${(props) =>
    props.isFour &&
    `border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.3);`}
`;
export const DecorateGood = styled.div<{ FourUrl: string }>`
  width: 64px;
  height: 64px;
  cursor: pointer;
  background-image: url(${(props) => props.FourUrl});
  background-size: cover;
`;
