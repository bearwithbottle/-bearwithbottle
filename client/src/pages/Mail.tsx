import {
  MailBox,
  MailTextBox,
  MailText,
  NameWrap,
  NameBox,
  SandMailBox,
  MailContentsBox,
  SandMailBoxIn,
  SandMailBoxDot,
  ColorBox,
  ColorOne,
  ColorTwo,
  ColorThree,
  ColorFour,
  ColorFive,
} from "../styles/mail";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import NextSubBtnMail from "../components/infostart/NextSubBtnMail";
import NextBtn from "../components/infostart/NextBtn";
import PreBtn from "../components/infostart/PreBtn";
import { setColor, setMessage, setSender } from "../action";
function Mail() {
  const [NameValue, SetNameValue] = useState("");
  const [MailValue, SetMail] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };
  const handleSearchInputChange = (e: any) => {
    SetNameValue(e.target.value);
  };
  const handleMailInputChange = (e: any) => {
    SetMail(e.target.value);
  };
  const handleMessageInput = () => {
    dispatch(setSender(NameValue));
    dispatch(setMessage(MailValue));
    dispatch(setColor(selectedColor));
    navigate("/decorate");
  };
  return (
    <MailBox>
      <PreBtn />
      <MailTextBox>
        <MailText>
          소중한 메세지를 함께
          <br />
          전해드리겠습니다.
        </MailText>
      </MailTextBox>
      <NameWrap>
        <NameBox
          value={NameValue}
          onChange={handleSearchInputChange}
          maxLength={10}
          placeholder="보내는 이 (10자 이하)"
        />
      </NameWrap>
      <MailContentsBox>
        <SandMailBox>
          <SandMailBoxIn>
            <SandMailBoxDot
              placeholder="메세지를 입력하세요."
              selectedColor={selectedColor}
              value={MailValue}
              onChange={handleMailInputChange}
            />
          </SandMailBoxIn>
        </SandMailBox>
        <ColorBox>
          <ColorOne onClick={() => handleColorClick("#fdb7b7")} />
          <ColorTwo onClick={() => handleColorClick("#fcea85")} />
          <ColorThree onClick={() => handleColorClick("#a5ffde")} />
          <ColorFour onClick={() => handleColorClick("#bcd5fc")} />
          <ColorFive onClick={() => handleColorClick("#e0dbfd")} />
        </ColorBox>
      </MailContentsBox>
      {NameValue.length >= 3 && !/\s/.test(NameValue) && MailValue !== "" ? (
        <NextSubBtnMail handleMessageInput={handleMessageInput} />
      ) : (
        <NextBtn />
      )}
    </MailBox>
  );
}

export default Mail;
