import { styled } from "styled-components";

import barBG from "../assets/main/Bar_BG.png";
import "../assets/font/font.css";
import wait from "../assets/main/BG_feature.png";

import loding_e from "../assets/main/Loding_e.png";
import loding_text from "../assets/main/please Wait....png";
import text from "../assets/test.png";
import title from "../assets/bar/title.png";
export const WaitBox = styled.div`
  width: 360px;
  height: 800px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url(${wait});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;
export const LodingBox = styled.div`
  width: 360px;
  height: 223px;
  margin-top: 168px;
  flex-direction: column;
  align-items: center;
`;

export const LodingGom = styled.div`
  width: 180px;
  height: 125px;
  margin-bottom: 22px;
  background-image: url(${loding_e});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const LodingText = styled.div`
  width: 172px;
  height: 28px;
  background-image: url(${loding_text});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const BarMainBox = styled.div`
  width: 360px;
  height: 800px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url(${barBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;

export const BarDisplay = styled.div`
  width: 360px;
  height: 730px;
  margin: 35px 0;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  width: 360px;
  height: 124px;
  background-image: url(${title});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const MidBox = styled.div`
  width: 360px;
  height: 296px;
  padding-left: 24px;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 85px;
`;
export const TextPongBox = styled.div`
  width: 238px;
  height: 83px;
  border-radius: 10px;
  background-color: #afafaf;
`;
export const TextPongContents = styled.div`
  width: 238px;
  height: 60px;
  border-radius: 10px;
  padding: 19px 12px;
  background-color: #f2f2f2;
  line-height: 23px;
`;
export const MidGom = styled.div<{ image: string }>`
  width: 234px;
  height: 200px;
  ${(props) => props.image && `background-image: url(${props.image});`}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const BtnBox = styled.div`
  width: 312px;
  height: 186px;
  flex-direction: column;
  justify-content: space-between;
`;
export const TextBox = styled.div`
  width: 54px;
  height: 120px;
  top: 450px;
  right: 790px;
  position: fixed;
  background-image: url(${text});
  background-size: cover;
  cursor: pointer;
`;
