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
  SandTextImg,
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
import { setSendUid, setName } from "../action";
function Sand() {
  const { uid } = useParams();
  const [userData, setUserData] = useState<DocumentData>();
  const dispatch = useDispatch();
  const navi = useNavigate();
  let name: string;
  useEffect(() => {
    async function fetchUserData() {
      try {
        if (uid) {
          const userCollectionRef = collection(db, "users");
          const q = query(userCollectionRef, where("id", "==", uid));
          const userDocSnap = await getDocs(q);
          setUserData(userDocSnap);
          if (!userDocSnap.empty) {
            const userData = userDocSnap.docs[0].data();
            name = userData.name;
            dispatch(setName(name));
            dispatch(setSendUid(uid));
          }
        } else {
          navi("/");
        }
      } catch (error) {
        console.error("사용자 데이터 가져오기 중 오류 발생:", error);
      }
    }
    fetchUserData();
  }, []);
  const handleSave = () => {
    if (uid) {
      navi("/list");
    }
  };
  const handleBar = () => {
    navi(`/`);
  };

  return (
    <SandBox>
      <SandMainBox>
        <SandBarDisplay>
          <SandTitle />
          <SandMidBox>
            {userData?.docs.map((docSnapshot: any, index: any) => {
              const data = docSnapshot.data();
              const letters = data.letters || [];
              const numLetters = letters.length;
              // 개수제한
              const randomIndexes: any[] = [];
              if (numLetters > 0) {
                // data.letters 배열의 길이가 1 이상일 때만 실행
                while (randomIndexes.length < 5) {
                  const randomIndex = Math.floor(Math.random() * numLetters);

                  if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                  }
                }
              }
              const randomLetters = randomIndexes.map(
                (randomIndex) => letters[randomIndex]
              );

              return (
                <MapBox key={index}>
                  <SandTextPongBox>
                    <SandTextImg />
                    <SandTextPongContents>
                      환영해요, 방문객님,
                      <br />
                      {data.name}님께 선물할
                      <br />
                      최고의 라인업을 준비해놨답니다.
                    </SandTextPongContents>
                  </SandTextPongBox>
                  <SandMidGom gom={data.img} />
                  <MailBox>
                    {randomLetters.map((letter: any, letterIndex: any) => (
                      <div key={letterIndex}>
                        <LetterCodeBox img={letter?.setbear} />
                        <LetterStiker sticker={letter?.sticker} />
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
