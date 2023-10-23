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

import { setFirst } from "../action";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function QuestionListTwo() {
  const dispatch = useDispatch();
  const name = useSelector((state: { name: string }) => state.name);

  const handleTwo1Click = () => {
    dispatch(setFirst("과일"));
  };
  const handleTwo2Click = () => {
    dispatch(setFirst("소주"));
  };
  const handleTwo3Click = () => {
    dispatch(setFirst("허브"));
  };
  const handleTwo4Click = () => {
    dispatch(setFirst("카라멜"));
  };
  const handleTwo5Click = () => {
    dispatch(setFirst("달달"));
  };
  const handleTwo6Click = () => {
    dispatch(setFirst("스모키"));
  };
  const handleTwo7Click = () => {
    dispatch(setFirst("시트러스"));
  };
  const handleTwo8Click = () => {
    dispatch(setFirst("부드러운"));
  };
  return (
    <QuestionListTwoBox>
      <PreBtn />
      <QuestionListTwoTextBox>
        <QuestionListTwoText>
          {name}님을 보면 떠오르는
          <br />
          키워드를 골라보세요
        </QuestionListTwoText>
      </QuestionListTwoTextBox>
      <Link to="/lineup">
        <QuestionListContents>
          <BtnBox1>
            <Two1 handleTwo1Click={handleTwo1Click} />
            <Two2 handleTwo2Click={handleTwo2Click} />
          </BtnBox1>
          <BtnBox1>
            <Two3 handleTwo3Click={handleTwo3Click} />
            <Two4 handleTwo4Click={handleTwo4Click} />
          </BtnBox1>
          <BtnBox1>
            <Two5 handleTwo5Click={handleTwo5Click} />
            <Two6 handleTwo6Click={handleTwo6Click} />
          </BtnBox1>
          <BtnBox1>
            <Two7 handleTwo7Click={handleTwo7Click} />
            <Two8 handleTwo8Click={handleTwo8Click} />
          </BtnBox1>
        </QuestionListContents>
      </Link>
    </QuestionListTwoBox>
  );
}

export default QuestionListTwo;
