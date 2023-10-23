import { styled } from "styled-components";
import main from "../assets/main/Bar_BG.png";
import maintext from "../assets/bar/title.png";
import text from "../assets/text/speech_2line.png";

export const SandBox = styled.div`
  width: 360px;
  height: 800px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url(${main});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;
export const SandMainBox = styled.div`
  width: 360px;
  height: 800px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url();
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;

export const SandBarDisplay = styled.div`
  width: 360px;
  height: 730px;
  margin: 35px 0;
  flex-direction: column;
  align-items: center;
`;
export const SandTitle = styled.div`
  width: 360px;
  height: 130px;
  margin-bottom: 50px;
  background-image: url(${maintext});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const SandMidBox = styled.div`
  width: 360px;
  height: 296px;
  padding-left: 24px;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 85px;
`;
export const SandTextPongBox = styled.div`
  width: 240px;
  height: 100px;
  position: absolute;
  transform: translate(10%, -95%);
`;
export const SandTextImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${text});
  background-repeat: no-repeat;
  position: absolute;
`;
export const SandTextPongContents = styled.div`
  padding: 10px;
  font-size: 15px;
  line-height: 20px;
  position: absolute;
`;
export const MapBox = styled.div`
  flex-direction: column;
  margin-bottom: 65px;
`;
export const SandMidGom = styled.div<{ gom: string }>`
  width: 234px;
  height: 200px;
  position: absolute;
  transform: translate(-3%, 20%);
  background-image: ${({ gom }) => `url(${gom})`};
  background-size: cover;
`;
export const SandBtnBox = styled.div`
  width: 312px;
  height: 122px;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: space-between;
`;
export const MailBox = styled.div`
  width: 360px;
  height: 128px;

  position: absolute;
  cursor: pointer;
  transform: translate(-3.5%, 80%);
`;
export const LetterCodeBox = styled.div<{ img: string }>`
  width: 64px;
  height: 128px;
  cursor: pointer;
  ${(props) => props.img && `background-image: url(${props.img});`}
  background-size: cover;
`;
export const LetterStiker = styled.div<{ sticker: string }>`
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  transform: translate(30%, 250%);
  ${(props) => props.sticker && `background-image: url(${props.sticker});`}
  background-size: cover;
`;
