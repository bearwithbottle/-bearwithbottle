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

import { setSecond } from "../action";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function QuestionList() {
  const name = useSelector((state: { name: string }) => state.name);

  const dispatch = useDispatch();

  const handleBtn1Click = () => {
    dispatch(setSecond("연인"));
  };
  const handleBtn2Click = () => {
    dispatch(setSecond("감사"));
  };
  const handleBtn3Click = () => {
    dispatch(setSecond("퇴근"));
  };
  const handleBtn4Click = () => {
    dispatch(setSecond("위로"));
  };
  const handleBtn5Click = () => {
    dispatch(setSecond("축제"));
  };
  const handleBtn6Click = () => {
    dispatch(setSecond("승리"));
  };
  const handleBtn7Click = () => {
    dispatch(setSecond("기본"));
  };
  const handleBtn8Click = () => {
    dispatch(setSecond("기념"));
  };

  return (
    <QuestionListBox>
      <PreBtn />
      <QuestionListTextBox>
        <QuestionListText>{name}님은 어떤사람인가요?</QuestionListText>
      </QuestionListTextBox>
      <Link to="/listtwo">
        <QuestionListContents>
          <BtnBox1>
            <Btn1 handleBtn1Click={handleBtn1Click} />
            <Btn2 handleBtn2Click={handleBtn2Click} />
          </BtnBox1>
          <BtnBox1>
            <Btn3 handleBtn3Click={handleBtn3Click} />
            <Btn4 handleBtn4Click={handleBtn4Click} />
          </BtnBox1>
          <BtnBox1>
            <Btn5 handleBtn5Click={handleBtn5Click} />
            <Btn6 handleBtn6Click={handleBtn6Click} />
          </BtnBox1>
          <BtnBox1>
            <Btn7 handleBtn7Click={handleBtn7Click} />
            <Btn8 handleBtn8Click={handleBtn8Click} />
          </BtnBox1>
        </QuestionListContents>
      </Link>
    </QuestionListBox>
  );
}

export default QuestionList;
