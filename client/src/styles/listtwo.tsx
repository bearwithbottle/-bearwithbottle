import { styled } from "styled-components";

import back from "../assets/main/BG_feature.png";

export const QuestionListTwoBox = styled.div`
  width: 360px;
  height: 800px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "ImcreSoojin";
`;
export const QuestionListTwoTextBox = styled.div`
  width: 360px;
  height: 88px;

  justify-content: center;
  align-items: center;
`;
export const QuestionListTwoText = styled.span`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
export const QuestionListContents = styled.div`
  width: 312px;
  height: 618px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const BtnBox1 = styled.div`
  justify-content: space-between;
`;
