import {
  QuestionListTwoBox,
  QuestionListTwoTextBox,
  QuestionListTwoText,
  QuestionListContents,
  BtnBox1,
} from "../styles/listtwo";

import PreBtn from "../components/infostart/PreBtn";

import Two1 from "../components/listtwo/Two1";
import Two2 from "../components/listtwo/Two2";
import Two3 from "../components/listtwo/Two3";
import Two4 from "../components/listtwo/Two4";
import Two5 from "../components/listtwo/Two5";
import Two6 from "../components/listtwo/Two6";
import Two7 from "../components/listtwo/Two7";
import Two8 from "../components/listtwo/Two8";
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
          <Two1 />
          <Two2 />
        </BtnBox1>
        <BtnBox1>
          <Two3 />
          <Two4 />
        </BtnBox1>
        <BtnBox1>
          <Two5 />
          <Two6 />
        </BtnBox1>
        <BtnBox1>
          <Two7 />
          <Two8 />
        </BtnBox1>
      </QuestionListContents>
    </QuestionListTwoBox>
  );
}

export default QuestionListTwo;
