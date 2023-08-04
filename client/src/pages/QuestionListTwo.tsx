import {
  QuestionListTwoBox,
  QuestionListTwoTextBox,
  QuestionListTwoText,
  QuestionListContents,
  BtnBox1,
} from "../styles/listtwo";

import PreBtn from "../components/infostart/PreBtn";
import Btn2 from "../components/listbtn/Btn2";
function QuestionListTwo() {
  return (
    <QuestionListTwoBox>
      <PreBtn />
      <QuestionListTwoTextBox>
        <QuestionListTwoText>
          name님을 보면 떠오르는
          <br />
          키워드를 골라보세요
        </QuestionListTwoText>
      </QuestionListTwoTextBox>
      <QuestionListContents>
        <BtnBox1>
          <Btn2 />
          <Btn2 />
        </BtnBox1>
        <BtnBox1>
          <Btn2 />
          <Btn2 />
        </BtnBox1>
        <BtnBox1>
          <Btn2 />
          <Btn2 />
        </BtnBox1>
        <BtnBox1>
          <Btn2 />
          <Btn2 />
        </BtnBox1>
      </QuestionListContents>
    </QuestionListTwoBox>
  );
}

export default QuestionListTwo;
