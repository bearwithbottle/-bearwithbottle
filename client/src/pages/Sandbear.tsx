import {
  SandBearBox,
  SandBearTextBox,
  SandBearText,
  MailBox,
  NameWrap,
  NameBox,
  MailTextBox,
  MailTextWrap,
  MailTextDot,
} from "../styles/sandbear";
import PreBtn from "../components/infostart/PreBtn";
function Sandbear() {
  return (
    <SandBearBox>
      <PreBtn />
      <SandBearTextBox>
        <SandBearText>sadasdsad</SandBearText>
      </SandBearTextBox>
      <MailBox>
        <NameWrap>
          <NameBox
            maxLength={10}
            placeholder="입력하십시오. (10자 이하) 저장하기"
          />
        </NameWrap>
        <MailTextBox>
          <MailTextWrap>
            <MailTextDot></MailTextDot>
          </MailTextWrap>
        </MailTextBox>
      </MailBox>
    </SandBearBox>
  );
}

export default Sandbear;
