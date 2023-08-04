import {
  QuestionListBox,
  QuestionListTextBox,
  QuestionListText,
  QuestionListContents,
  BtnBox1,
} from "../styles/list";
import PreBtn from "../components/infostart/PreBtn";
import Btn1 from "../components/listbtn/Btn1";
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
            <Btn1 />
          </BtnBox1>
          <BtnBox1>
            <Btn1 />
            <Btn1 />
          </BtnBox1>
          <BtnBox1>
            <Btn1 />
            <Btn1 />
          </BtnBox1>
          <BtnBox1>
            <Btn1 />
            <Btn1 />
          </BtnBox1>
        </QuestionListContents>
      </Link>
    </QuestionListBox>
  );
}

export default QuestionList;
