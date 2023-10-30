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

function BottlesModal({
  handleLetterClick,
  selectedLetter,
  handleIndex,
  arr,
}: any) {
  return (
    <BottlesModalBox>
      <BottlesModalContents>
        <BottlesModalInfo>
          <BottlesModalInfoIn>
            <BottlesImgBox back={arr[0]?.back_image}>
              <BottlesImg storage={arr[0]?.storage} />
            </BottlesImgBox>
            <BottlesTextBox>
              <BottlesTextTitle>{arr[0]?.name}</BottlesTextTitle>
              <BottlesTextName>{arr[0]?.code}</BottlesTextName>
            </BottlesTextBox>
            {/* Tags */}
            <BottlesTagBox>
              <Tags>
                <TagText>{arr[0]?.hash1}</TagText>
              </Tags>
              <Tags>
                <TagText>{arr[0]?.hash2}</TagText>
              </Tags>
              <Tags>
                <TagText>{arr[0]?.hash3}</TagText>
              </Tags>
            </BottlesTagBox>
            <MidLine />
            <TextBox>{arr[0]?.text}</TextBox>
          </BottlesModalInfoIn>
        </BottlesModalInfo>
        <MailBox>
          <MailBoxIn>
            <MailDot>
              <MailName>{selectedLetter?.sender}</MailName>
              <MailContent>{selectedLetter?.message}</MailContent>
            </MailDot>
          </MailBoxIn>
        </MailBox>
      </BottlesModalContents>
      <Xbox onClick={handleIndex} />
    </BottlesModalBox>
  );
}

export default BottlesModal;
