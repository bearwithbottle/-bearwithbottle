import { styled } from "styled-components";
import "../../assets/font/font.css";
import back from "../../assets/main/BG_feature.png";
import frame from "../../assets/info/Frame_291.png";
import gomone from "../../assets/info/gomone.png";
import gomtwo from "../../assets/info/gomtwo.png";
import gomthree from "../../assets/info/gomthree.png";

export const GomdolContainer = styled.div`
  width: 360px;
  height: 800px;
  flex-direction: column;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  font-family: "ImcreSoojin";
`;

export const PreWrap = styled.div`
  height: 103px;
  align-items: center;
`;
export const TextBox = styled.div`
  width: 360px;
  height: 88px;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.span`
  font-size: 20px;
  color: #fff;
`;
export const TextBoxBox = styled.div`
  width: 270px;
  height: 50px;
  flex-direction: column;
  align-items: center;
`;
export const InfoCircleWarp = styled.div`
  margin: 26.5px 0 31px 0;
  width: 38px;
  height: 6px;
  justify-content: space-between;
`;
export const InfoCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #4d5055;
`;
export const GomdolBox = styled.div`
  width: 312px;
  height: 317px;
  border-radius: 16px;
  background-image: url(${frame});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;

  margin-bottom: 32px;
`;
export const GomdolNow = styled.div<{
  isOne: boolean;
  isTwo: boolean;
  isThree: boolean;
}>`
  width: 312px;
  height: 267px;
  margin-top: 40px;
  border-radius: 16px;
  ${(props) => props.isOne && `background-image: url(${gomone});`}
  ${(props) => props.isTwo && `background-image: url(${gomtwo});`}
  ${(props) => props.isThree && `background-image: url(${gomthree});`}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const ChooseBox = styled.div`
  width: 397px;
  height: 128px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 58px;
`;
export const ChooseContentsOneBox = styled.div<{ isOne: boolean }>`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: #757380;
  ${(props) => props.isOne && "background-color: #6659AF;"}
  ${(props) => props.isOne && " outline: 3px solid #9381FF;"}
`;
export const ChooseContentsOne = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-image: url(${gomone});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const ChooseContentsTwoBox = styled.div<{ isTwo: boolean }>`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: #757380;
  ${(props) => props.isTwo && "background-color: #6659AF;"}
  ${(props) => props.isTwo && " outline: 3px solid #9381FF;"}
`;
export const ChooseContentsTwo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-image: url(${gomtwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ChooseContentsThreeBox = styled.div<{ isThree: boolean }>`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: #757380;
  ${(props) => props.isThree && "background-color: #6659AF;"}
  ${(props) => props.isThree && " outline: 3px solid #9381FF;"}
`;
export const ChooseContentsThree = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-image: url(${gomthree});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
