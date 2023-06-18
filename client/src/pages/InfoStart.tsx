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
  YesBtnInline,
  NoBtnInline,
} from "../styles/info/infostart";
import { IoIosArrowBack } from "react-icons/io";

function InfoStart() {
  return (
    <Backround>
      <TopBox>
        <PreBtnBox>
          <IoIosArrowBack className="PreBtn" />
          <PreBtnSpan>이전으로</PreBtnSpan>
        </PreBtnBox>
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
            <YesBtn>
              <YesBtnInline>Yes</YesBtnInline>
            </YesBtn>
          </YesBtnBox>
          <NoBtnBox>
            <NoBtn>
              <NoBtnInline>No</NoBtnInline>
            </NoBtn>
          </NoBtnBox>
        </BtnBox>
      </TopBox>
    </Backround>
  );
}

export default InfoStart;
