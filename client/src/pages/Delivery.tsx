import {
  DeliveryBox,
  DeliveryMidBox,
  DeliveryImgBox,
  DeliveryImgBoxIn,
  DeliveryTextBox,
  DeliveryTextTitle,
  DeliveryTextName,
  DeliveryImgBack,
  DeliveryTagBox,
  Tags,
  TagText,
  DeliveryImg,
  DeliverySticker,
  MailBox,
  MailBoxIn,
  MailDot,
  MailName,
  MailContent,
} from "../styles/delivery";
import PreBtn from "../components/infostart/PreBtn";
import NextDelivery from "../components/infostart/NextDelivery";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "../config";
import { Link } from "react-router-dom";
function Delivery() {
  const [Value, setValue] = useState<any>([]);
  const sender = useSelector((state: { sender: string }) => state.sender);
  const message = useSelector((state: { message: string }) => state.message);
  const code = useSelector((state: { code: string }) => state.code);
  const sticker = useSelector((state: { sticker: string }) => state.sticker);
  const setbear = useSelector((state: { setbear: string }) => state.setbear);
  const uidId = useSelector((state: { userid: string }) => state.userid);
  async function getDocuments(value: string) {
    const q = query(
      collection(db, "recommend"),
      where("code", "==", value),
      limit(1)
    );

    try {
      const querySnapshot = await getDocs(q);
      const documents = querySnapshot.docs.map((doc) => doc.data());
      return documents;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function fetchData() {
    const value = code;
    const documentsWithSpecificValue = await getDocuments(value);
    setValue(documentsWithSpecificValue);
  }
  async function addValuesToLettersField() {
    try {
      const docRef = doc(db, "users", `${uidId}`);

      const newData = {
        sender: sender,
        message: message,
        code: code,
        sticker: sticker,
        setbear: setbear,
      };

      const userDoc = await getDoc(docRef);
      const existingLetters = userDoc.data()?.letters || []; // 기존의 letters 배열 가져오기

      const updatedLetters = [...existingLetters, newData]; // 새 데이터를 추가한 새로운 배열 생성

      await setDoc(docRef, { letters: updatedLetters }, { merge: true });
    } catch (error) {
      console.error(error);
    }
  }
  const handleExport = () => {
    addValuesToLettersField();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DeliveryBox>
      <PreBtn />
      <DeliveryMidBox>
        <DeliveryImgBox>
          {Value.map((document: any, index: any) => (
            <div key={index}>
              <DeliveryImgBoxIn>
                <DeliveryImgBack back={document.back_image}>
                  <DeliveryImg url={document.storage} />
                  <DeliverySticker sticker={sticker} />
                </DeliveryImgBack>
                <DeliveryTextBox>
                  <DeliveryTextTitle>{document.name}</DeliveryTextTitle>
                  <DeliveryTextName>{document.code}</DeliveryTextName>
                </DeliveryTextBox>
                <DeliveryTagBox>
                  <Tags>
                    <TagText>{document.hash1}</TagText>
                  </Tags>
                  <Tags>
                    <TagText>{document.hash2}</TagText>
                  </Tags>
                  <Tags>
                    <TagText>{document.hash3}</TagText>
                  </Tags>
                </DeliveryTagBox>
              </DeliveryImgBoxIn>
            </div>
          ))}
        </DeliveryImgBox>
        <MailBox>
          <MailBoxIn>
            <MailDot>
              <MailName>{sender}</MailName>
              <MailContent>{message}</MailContent>
            </MailDot>
          </MailBoxIn>
        </MailBox>
      </DeliveryMidBox>
      <Link to="/to">
        <NextDelivery handleExport={handleExport} />
      </Link>
    </DeliveryBox>
  );
}

export default Delivery;
