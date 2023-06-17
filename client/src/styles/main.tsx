import { styled } from "styled-components";
import main from "../assets/main/main_background.png";
import maintext from "../assets/main/main_text.png";
import maingooglelogo from "../assets/main/main_google_logo.png";
import mainkakaologo from "../assets/main/main_kakao_logo.png";
import "../assets/font/font.css";

export const MainBox = styled.div`
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

export const MainText = styled.div`
  width: 360px;
  height: 313px;
  background-image: url(${maintext});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 141px;
`;

// Btn

export const MainBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 312px;
  height: 122px;
  margin-bottom: 94px;
`;

//Google
export const MainGoogleBox = styled.a`
  width: 312px;
  height: 53px;
  background-color: #ae4213;
  border-radius: 10px;
`;
export const MainGoogleWrap = styled.div`
  width: 312px;
  height: 48px;
  background-color: #ea5514;
  border-radius: 10px;
  align-items: center;
`;
export const MainGoogleLogo = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${maingooglelogo});
  background-size: cover;
  margin-right: 10px;
`;
export const MainGoogleSpan = styled.span`
  color: #ffff;
  font-size: 18px;
`;

// Facebook
export const MainKakaoBox = styled.a`
  width: 312px;
  height: 53px;
  background-color: #31498b;
  border-radius: 10px;
`;
export const MainKakaWrap = styled.div`
  width: 312px;
  height: 48px;
  background-color: #5475d0;
  border-radius: 10px;
  align-items: center;
`;
export const MainKakaoLogo = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${mainkakaologo});
  background-size: cover;
  margin-right: 10px;
`;
export const MainKakaoSpan = styled.span`
  color: #ffff;
  font-size: 18px;
`;
