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
} from "firebase/firestore";
import Draggable, { DraggableData } from "react-draggable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef } from "react";
function LineUp() {
  const [position, setPosition] = useState<any>({ x: 0 });
  const [randomBottles, setRandomBottles] = useState<DocumentData[]>([]);
  const [Opacity, setOpacity] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getRandomBottles(
    count: number,
    firstChoiceStr: string,
    secondChoiceStr: string
  ) {
    const bottlesCollectionRef = collection(db, "recommend");
    const q = query(
      bottlesCollectionRef,
      where("level1", "==", firstChoiceStr),
      where("level2", "==", secondChoiceStr)
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
    const firstChoice = "소주";
    const secondChoice = "승리";

    getRandomBottles(3, firstChoice, secondChoice).then((bottles) => {
      setRandomBottles(bottles);
      console.log(bottles);
    });
  }, []);
  const trackPos = (data: any) => {
    setPosition({ x: data.x });
    console.log(position);
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
