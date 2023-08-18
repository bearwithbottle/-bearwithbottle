import {
  LineUpBox,
  LineUpTextBox,
  LineUpText,
  RecoBox,
  RecoBoxContents,
  RecoBoxContentsIn,
  RecoImgBox,
  RecoTextBox,
  RecoTextTitle,
  RecoTextName,
  RecoTagBox,
  Tags,
  TagText,
  MidLine,
  TextBox,
  NextSubBtnWrap,
  NextSubBtnDot,
  NextSubBtnBox,
  RecoImg,
} from "../styles/lineup";
import { db } from "../config";
import PreBtn from "../components/infostart/PreBtn";
import { setBear, setCode } from "../action";

import { useState, useEffect } from "react";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
  writeBatch,
  doc,
} from "firebase/firestore";
import Draggable, { DraggableData } from "react-draggable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function LineUp() {
  const [position, setPosition] = useState<any>({ x: 0 });
  const [Opacity, setOpacity] = useState(false);
  const [randomBottles, setRandomBottles] = useState<DocumentData[]>([]);
  const [randomRecommends, setRandomRecommends] = useState<DocumentData[]>([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getRecommend(
    count: number,
    firstChoiceStr: string
    // secondChoiceStr: string
  ) {
    const bottlesCollectionRef = collection(db, "recommend");
    const q = query(
      bottlesCollectionRef,
      where("code", "==", firstChoiceStr)
      // where("level2", "==", secondChoiceStr)
    );

    return getDocs(q).then((querySnapshot) => {
      const documents = querySnapshot.docs.map((doc) => doc.data());
      const randomRecommends = [];

      while (randomRecommends.length < count && documents.length > 0) {
        const randomIndex = Math.floor(Math.random() * documents.length);
        randomRecommends.push(documents[randomIndex]);
        documents.splice(randomIndex, 1);
      }

      return randomRecommends;
    });
  }

  //수정
  function getBottles(
    count: number,
    firstChoiceStr: string
    // secondChoiceStr: string
  ) {
    const bottlesCollectionRef = collection(db, "bottles");
    const q = query(
      bottlesCollectionRef,
      where("code", "==", firstChoiceStr)
      // where("level2", "==", secondChoiceStr)
    );

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
  const handleGiftClick = (index: any) => {
    if (randomBottles[index]) {
      dispatch(setBear(randomBottles[index].storage));
      dispatch(setCode(randomBottles[index].code));
      navigate("/mail");
    }
  };

  useEffect(() => {
    const firstChoice = "windsor";
    // const secondChoice = "승리";

    getRecommend(3, firstChoice).then((bottles) => {
      setRandomRecommends(bottles);
      console.log("Reco", bottles);
    });
    getBottles(1, firstChoice).then((bottles) => {
      setRandomBottles(bottles);
      console.log("Bottles", bottles[0]);
      const date = bottles[0];
      const bottlesCollectionRef = collection(db, "recommend");
      const q = query(bottlesCollectionRef, where("code", "==", firstChoice));

      getDocs(q).then((querySnapshot) => {
        const batch = writeBatch(db);

        querySnapshot.forEach((docSnapshot) => {
          const docRef = doc(bottlesCollectionRef, docSnapshot.id);

          const updatedFields = { ...date };

          batch.update(docRef, updatedFields);
        });

        batch
          .commit()
          .then(() => {
            console.log("Data updated successfully", randomRecommends);
          })
          .catch((error) => {
            console.error("Error updating data:", error);
          });
      });
    });
  }, []);
  const trackPos = (data: any) => {
    setPosition({ x: data.x });
  };

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  return (
    <LineUpBox>
      <PreBtn />
      <LineUpTextBox>
        <LineUpText>
          제가 추천하는 라인업을
          <br /> 한 번 살펴보시겠어요?
        </LineUpText>
      </LineUpTextBox>
      <Draggable
        axis="x"
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
        bounds={{ left: -325, right: 325 }}
      >
        <RecoBox>
          {randomBottles &&
            randomBottles.map((bottle, index) => (
              <div key={index}>
                <RecoBoxContents>
                  <RecoBoxContentsIn>
                    <RecoImgBox>
                      <RecoImg url={bottle.storage} />
                    </RecoImgBox>
                    <RecoTextBox>
                      <RecoTextTitle>{bottle.name}</RecoTextTitle>
                      <RecoTextName>{bottle.name_eng}</RecoTextName>
                    </RecoTextBox>
                    <RecoTagBox>
                      <Tags>
                        <TagText>{bottle.hash1}</TagText>
                      </Tags>
                      <Tags>
                        <TagText>{bottle.hash2}</TagText>
                      </Tags>
                      <Tags>
                        <TagText>{bottle.hash3}</TagText>
                      </Tags>
                    </RecoTagBox>
                    <MidLine />
                    <TextBox>{bottle.text}</TextBox>
                    <NextSubBtnBox>
                      <NextSubBtnWrap>
                        <NextSubBtnDot onClick={() => handleGiftClick(index)}>
                          이 주류 선물하기
                        </NextSubBtnDot>
                      </NextSubBtnWrap>
                    </NextSubBtnBox>
                  </RecoBoxContentsIn>
                </RecoBoxContents>
              </div>
            ))}
        </RecoBox>
      </Draggable>
    </LineUpBox>
  );
}

export default LineUp;
