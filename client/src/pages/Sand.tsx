import {
  SandBox,
  SandMainBox,
  SandBarDisplay,
  SandTitle,
  SandMidBox,
  SandTextPongBox,
  SandTextPongContents,
  SandMidGom,
  SandBtnBox,
  MapBox,
  MailBox,
  LetterCodeBox,
  LetterStiker,
} from "../styles/sand";

import SandBtn from "../components/btn/SandBtn";
import HomeBtn from "../components/btn/HomeBtn";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../config";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setSendUid } from "../action";
function Sand() {
  const { id } = useParams();
  const [userData, setUserData] = useState<DocumentData>();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const save = id;
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    async function fetchUserData() {
      try {
        if (id) {
          const userCollectionRef = collection(db, "users");
          const q = query(userCollectionRef, where("id", "==", id));
          const userDocSnap = await getDocs(q);
          setUserData(userDocSnap);
        }
      } catch (error) {
        console.error("사용자 데이터 가져오기 중 오류 발생:", error);
      }
    }
    fetchUserData();
  }, [id]);
  const handleSave = () => {
    if (save) {
      dispatch(setSendUid(save));
      navi("/list");
    }
  };
  const handleBar = () => {
    if (uid) {
      navi(`/bar/${uid}`);
    } else {
      navi(`/`);
    }
  };
  return (
    <SandBox>
      <SandMainBox>
        <SandBarDisplay>
          <SandTitle />
          <SandMidBox>
            {userData &&
              userData.docs.map((docSnapshot: any, index: any) => {
                const data = docSnapshot.data();
                const letters = data.letters || [];
                const numLetters = letters.length;
                // 개수제한
                const randomIndexes: any[] = [];
                while (randomIndexes.length < 5) {
                  const randomIndex = Math.floor(Math.random() * numLetters);
                  if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                  }
                }
                const randomLetters = randomIndexes.map(
                  (randomIndex) => letters[randomIndex]
                );

                return (
                  <MapBox key={index}>
                    <SandTextPongBox>
                      <SandTextPongContents>
                        안녕하십니까?
                        <br />
                        {data.name}님에게 술을 보내보시겠어요?
                      </SandTextPongContents>
                    </SandTextPongBox>
                    <SandMidGom gom={data.img} />
                    <MailBox>
                      {randomLetters.map((letter: any, letterIndex: any) => (
                        <div key={letterIndex}>
                          <LetterCodeBox img={letter.setbear} />
                          <LetterStiker sticker={letter.sticker} />
                        </div>
                      ))}
                    </MailBox>
                  </MapBox>
                );
              })}
          </SandMidBox>
          <SandBtnBox>
            <SandBtn handleSave={handleSave} />
            <HomeBtn handleBar={handleBar} />
          </SandBtnBox>
        </SandBarDisplay>
      </SandMainBox>
    </SandBox>
  );
}

export default Sand;
