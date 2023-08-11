import {
  QuestionListBox,
  QuestionListTextBox,
  QuestionListText,
  QuestionListContents,
  BtnBox1,
} from "../styles/list";
import PreBtn from "../components/infostart/PreBtn";
import Btn1 from "../components/listbtn/Btn1";
import Btn2 from "../components/listbtn/Btn2";
import Btn3 from "../components/listbtn/Btn3";
import Btn4 from "../components/listbtn/Btn4";
import Btn5 from "../components/listbtn/Btn5";
import Btn6 from "../components/listbtn/Btn6";
import Btn7 from "../components/listbtn/Btn7";
import Btn8 from "../components/listbtn/Btn8";
import { Link } from "react-router-dom";
function QuestionList() {
  return (
    <QuestionListBox>
      <PreBtn />
      <QuestionListTextBox>
        <QuestionListText>name님은 어떤사람인가요?</QuestionListText>
      </QuestionListTextBox>
      <Link to="/listtwo">
        <QuestionListContents>
          <BtnBox1>
            <Btn1 />
            <Btn2 />
          </BtnBox1>
          <BtnBox1>
            <Btn3 />
            <Btn4 />
          </BtnBox1>
          <BtnBox1>
            <Btn5 />
            <Btn6 />
          </BtnBox1>
          <BtnBox1>
            <Btn7 />
            <Btn8 />
          </BtnBox1>
        </QuestionListContents>
      </Link>
    </QuestionListBox>
  );
}

export default QuestionList;
