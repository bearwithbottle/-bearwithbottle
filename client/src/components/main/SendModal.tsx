import {
  BottlesModalBox,
  BottlesModalContents,
  BottlesModalInfo,
  BottlesModalInfoIn,
  BottlesImgBox,
  BottlesImg,
  BottlesTextBox,
  BottlesTextTitle,
  BottlesTextName,
  BottlesTagBox,
  Tags,
  TagText,
  MidLine,
  TextBox,
  MailBox,
  MailBoxIn,
  MailDot,
  MailName,
  MailContent,
  Xbox,
} from "../../styles/mainbtn/bottlesmodal";

function SendModal({ saveCode, arr, handleIsOpen }: any) {
  const saveBack = arr?.color;
  return (
    <BottlesModalBox>
      <BottlesModalContents>
        <BottlesModalInfo>
          <BottlesModalInfoIn>
            <BottlesImgBox back={saveCode[0]?.back_image}>
              <BottlesImg storage={saveCode[0]?.storage} />
            </BottlesImgBox>
            <BottlesTextBox>
              <BottlesTextTitle>{saveCode[0]?.name}</BottlesTextTitle>
              <BottlesTextName>{saveCode[0]?.code}</BottlesTextName>
            </BottlesTextBox>
            {/* Tags */}
            <BottlesTagBox>
              <Tags>
                <TagText>{saveCode[0]?.hash1}</TagText>
              </Tags>
              <Tags>
                <TagText>{saveCode[0]?.hash2}</TagText>
              </Tags>
              <Tags>
                <TagText>{saveCode[0]?.hash3}</TagText>
              </Tags>
            </BottlesTagBox>
            <MidLine />
            <TextBox>{saveCode[0]?.text}</TextBox>
          </BottlesModalInfoIn>
        </BottlesModalInfo>
        <MailBox>
          <MailBoxIn>
            <MailDot>
              <MailName>{arr?.sender}</MailName>
              <MailContent saveBack={saveBack}>{arr?.message}</MailContent>
            </MailDot>
          </MailBoxIn>
        </MailBox>
      </BottlesModalContents>
      <Xbox onClick={handleIsOpen} />
    </BottlesModalBox>
  );
}

export default SendModal;
