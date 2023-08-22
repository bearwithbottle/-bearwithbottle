import {
  ToBox,
  TextBox,
  Text,
  ToMailBox,
  BtnBox,
  NextSubBtnBox,
  NextSubBtnWrap,
  NextSubBtnDot,
  MyHomeBtnBox,
  MyHomeBtnWrap,
  MyHomeBtnDot,
  MailText,
} from "../styles/to";

import { useSelector } from "react-redux/es/hooks/useSelector";
function To() {
  const sender = useSelector((state: { sender: string }) => state.sender);
  return (
    <ToBox>
      <TextBox>
        <Text>
          소중한 마음
          <br />
          제가 잘 전달해드리겠습니다.
        </Text>
      </TextBox>
      <ToMailBox>
        <MailText>from,{sender}</MailText>
      </ToMailBox>
      <BtnBox>
        <NextSubBtnBox>
          <NextSubBtnWrap>
            <NextSubBtnDot>님의 Bar가기</NextSubBtnDot>
          </NextSubBtnWrap>
        </NextSubBtnBox>
        <MyHomeBtnBox>
          <MyHomeBtnWrap>
            <MyHomeBtnDot>내 Bar 가기</MyHomeBtnDot>
          </MyHomeBtnWrap>
        </MyHomeBtnBox>
      </BtnBox>
    </ToBox>
  );
}

export default To;
