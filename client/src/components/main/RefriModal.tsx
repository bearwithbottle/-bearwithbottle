import {
  RefriModalBox,
  RefriModalContents,
  BottleBox,
  BottleBoxImg,
  BottleBoxNameBox,
  BottleBoxName,
  Xbox,
  LetterStiker,
} from "../../styles/mainbtn/refrimodal";
import { useEffect, useState } from "react";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../config";
interface handlemodal {
  handlemodal: () => void;
}
function RfriModal({ handlemodal }: handlemodal) {
  let uid: string | null;
  const [letters, setLetters] = useState<DocumentData[]>([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid = user.uid;
      }
    });
    async function fetchLetters() {
      if (uid) {
        try {
          const userDocRef = doc(db, "users", uid); // 로컬 uid 값으로 사용자 문서 참조 가져오기

          const docSnapshot = await getDoc(userDocRef);
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            const lettersData = userData.letters || []; // letters 배열 데이터 가져오기
            setLetters(lettersData);
            console.log(lettersData);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    fetchLetters();
  }, []);
  return (
    <RefriModalBox>
      <RefriModalContents>
        {letters.map((letter, index) => (
          <BottleBox key={index}>
            <BottleBoxImg img={letter.setbear} />
            <LetterStiker sticker={letter.sticker} />
            <BottleBoxNameBox>
              <BottleBoxName>{letter.sender}</BottleBoxName>
            </BottleBoxNameBox>
          </BottleBox>
        ))}
      </RefriModalContents>
      <Xbox onClick={handlemodal} />
    </RefriModalBox>
  );
}

export default RfriModal;
