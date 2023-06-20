import {
  Backround,
  PreBtnBox,
  PreBtnSpan,
  TopBox,
  TopTextBox,
  TopText,
  CircleBox,
  Circle,
  CircleT,
  BtnBox,
  YesBtnBox,
  NoBtnBox,
  YesBtn,
  NoBtn,
  TopWrap,
} from "../styles/info/infostart";
import { IoIosArrowBack } from "react-icons/io";

function InfoStart() {
  return (
    <Backround>
      <TopWrap>
        <PreBtnBox>
          <IoIosArrowBack className="PreBtn" />
          <PreBtnSpan>이전으로</PreBtnSpan>
        </PreBtnBox>
        <TopBox>
          <TopTextBox>
            <TopText>당신은 성인 입니까?</TopText>
            <CircleBox>
              <CircleT />
              <Circle />
              <Circle />
            </CircleBox>
          </TopTextBox>
          <BtnBox>
            <YesBtnBox>
              <YesBtn>Yes</YesBtn>
            </YesBtnBox>
            <NoBtnBox>
              <NoBtn>No</NoBtn>
            </NoBtnBox>
          </BtnBox>
        </TopBox>
      </TopWrap>
    </Backround>
  );
}

export default InfoStart;
