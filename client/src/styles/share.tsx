import { styled } from "styled-components";
import xbox from "../assets/main/boxX.png";
import "../assets/font/font.css";
import back from "../assets/main/Bar_BG.png";
import line33 from "../assets/text/speech_2line.png";
export const BottlesModalBox = styled.div`
  background-color: rgba(35, 35, 35, 0.9); /* 배경색에 투명도 추가 */
  width: 360px;
  height: 800px;
  transform: translate(0%, 0%);
  font-family: "ImcreSoojin";
  position: fixed;
  z-index: 1;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const ShareBox = styled.div`
  width: 312px;
  height: 505px;
  border-radius: 16px;

  background-color: #afafaf;
`;
export const ShareBoxIn = styled.div`
  width: 312px;
  height: 500px;
  border-radius: 16px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  justify-content: space-between;
  background-color: #ffffff;
`;
export const ShareText = styled.p`
  font-size: 20px;
  color: #523c2f;
`;
export const ImgBox = styled.div`
  width: 272px;
  height: 272px;
  border-radius: 16px;
  background-image: url(${back});
  background-size: cover;
`;
export const ImgGom = styled.div<{ image: string }>`
  width: 150px;
  height: 150px;
  position: absolute;
  transform: translate(-20%, 60%);
  background-size: cover;
  ${(props) => props.image && `background-image: url(${props.image});`}
`;
export const TextPongBox33 = styled.div`
  width: 250px;
  height: 100px;
  position: relative;
`;
export const TextImg = styled.div`
  width: 100%;
  vertical-align: middle;
  background-image: url(${line33});
  background-size: cover;
`;
export const TextPongContents = styled.p`
  position: absolute;
  transform: translate(0%, 40%);
`;
export const ImgText = styled.div`
  width: 190px;
  height: 74px;
  font-size: 15px;
  align-items: center;
  position: absolute;
  transform: translate(-8%, 20%);
`;
export const OOO = styled.div`
  width: 24px;
  height: 4px;
  border-radius: 7px;
  background-color: #d8d8d8;
`;
export const InText = styled.p`
  width: 272px;
  height: 40px;
  color: #686868;
  text-align: center;
`;

export const ShareBtnWrap = styled.div`
  width: 272px;
  height: 45px;
  border-radius: 10px;
  align-items: center;
  background-color: #9381ff;
`;

export const ShareBtnDot = styled.div`
  width: 264px;
  height: 40px;
  border-radius: 8px;
  border: 2px dotted #e2e2e2;
  align-items: center;
  font-size: 18px;
  color: #ffff;
`;

export const ShareBtnBox = styled.div`
  cursor: pointer;
  font-size: 18px;
  width: 272px;
  height: 49px;
  background-color: #5144a0;
  border-radius: 10px;
  &:active {
    ${ShareBtnWrap} {
      background-color: #6659af;
    }
  }
`;

export const Modalbox = styled.div`
  width: 312px;
  height: 64px;
  border-radius: 16px;
  background-color: #afafaf;
`;
export const ModalIn = styled.div`
  width: 312px;
  height: 59px;
  border-radius: 16px;
  align-items: center;
  color: #686868;
  background-color: #ffffff;
`;

export const Xbox = styled.div`
  width: 56px;
  height: 56px;
  background-image: url(${xbox});
  background-size: cover;
  margin-top: 45px;
  cursor: pointer;
`;
