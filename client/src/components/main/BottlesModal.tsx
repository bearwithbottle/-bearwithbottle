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
import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config";
function BottlesModal({ handleLetterClick, selectedLetter, handleIndex }: any) {
  const [arr, setArr] = useState<any>(null);

  function getRandomBottles(count: number, firstChoiceStr: string) {
    const bottlesCollectionRef = collection(db, "recommend");
    const q = query(bottlesCollectionRef, where("code", "==", firstChoiceStr));

    return getDocs(q).then((querySnapshot) => {
      const documents = querySnapshot.docs.map((doc) => doc.data());
      const randomBottles = [];

      while (randomBottles.length < count && documents.length > 0) {
        const randomIndex = Math.floor(Math.random() * documents.length);
        randomBottles.push(documents[randomIndex]);
        documents.splice(randomIndex, 1);
      }

      return randomBottles;
    });
  }
  useEffect(() => {
    const firstChoice = selectedLetter.code;
    async function fetchBottles() {
      const bottles = await getRandomBottles(1, firstChoice);
      setArr(bottles);
    }

    fetchBottles();
  }, []);

  return (
    <BottlesModalBox>
      <BottlesModalContents>
        <BottlesModalInfo>
          <BottlesModalInfoIn>
            <BottlesImgBox>
              <BottlesImg />
            </BottlesImgBox>
            <BottlesTextBox>
              <BottlesTextTitle>{arr && arr[0].name}</BottlesTextTitle>
              <BottlesTextName>{arr && arr[0].code}</BottlesTextName>
            </BottlesTextBox>
            {/* Tags */}
            <BottlesTagBox>
              <Tags>
                <TagText>{arr && arr[0].hash1}</TagText>
              </Tags>
              <Tags>
                <TagText>{arr && arr[0].hash2}</TagText>
              </Tags>
              <Tags>
                <TagText>{arr && arr[0].hash3}</TagText>
              </Tags>
            </BottlesTagBox>
            <MidLine />
            <TextBox>{arr && arr[0].text}</TextBox>
          </BottlesModalInfoIn>
        </BottlesModalInfo>
        <MailBox>
          <MailBoxIn>
            <MailDot>
              <MailName>{selectedLetter.sender}</MailName>
              <MailContent>{selectedLetter.message}</MailContent>
            </MailDot>
          </MailBoxIn>
        </MailBox>
      </BottlesModalContents>
      {/* <Xbox onClick={handleIndex} /> */}
    </BottlesModalBox>
  );
}

export default BottlesModal;
