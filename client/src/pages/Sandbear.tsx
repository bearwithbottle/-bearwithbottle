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
            placeholder="닉네임을 적어라 입력하세요. (10자 이하)"
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
