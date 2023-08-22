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
interface handleopen {
  handleopen: () => void;
}
function BottlesModal({ handleopen }: handleopen) {
  return (
    <BottlesModalBox>
      <BottlesModalContents>
        <BottlesModalInfo>
          <BottlesModalInfoIn>
            <BottlesImgBox>
              <BottlesImg />
            </BottlesImgBox>
            <BottlesTextBox>
              <BottlesTextTitle>아페롤</BottlesTextTitle>
              <BottlesTextName>Aperol</BottlesTextName>
            </BottlesTextBox>
            {/* Tags */}
            <BottlesTagBox>
              <Tags>
                <TagText>#오렌지</TagText>
              </Tags>
              <Tags>
                <TagText>#독특함</TagText>
              </Tags>
              <Tags>
                <TagText>#허브</TagText>
              </Tags>
            </BottlesTagBox>
            <MidLine />
            <TextBox>
              활기차고 생생한 오렌지 색의 색조가 독특한 느낌을 줍니다. 식전주로
              많이 활용되는만큼, 특별한 식사 자리에 함께해 보세요
            </TextBox>
          </BottlesModalInfoIn>
        </BottlesModalInfo>
        <MailBox>
          <MailBoxIn>
            <MailDot>
              <MailName>5글자넘어가면안돼요</MailName>
              <MailContent>
                반가워요반가워요반가워요반 가워요반가워요반가워요반가워요반
                가워요반가워요반가워요반가워요반가워
                반가워요반가워요반가워요반가워요요반가워요반가워요반가워요반가워요반가워요반가워요반가워요
              </MailContent>
            </MailDot>
          </MailBoxIn>
        </MailBox>
      </BottlesModalContents>
      <Xbox onClick={handleopen} />
    </BottlesModalBox>
  );
}

export default BottlesModal;
