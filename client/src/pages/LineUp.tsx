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
import { useState, useEffect } from "react";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../config";
import PreBtn from "../components/infostart/PreBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBear, setCode } from "../action";
function LineUp() {
  const [randomBottles, setRandomBottles] = useState<DocumentData[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getRandomBottles(count: number) {
    const bottlesCollectionRef = collection(db, "bottles");
    return getDocs(bottlesCollectionRef).then((querySnapshot) => {
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
    getRandomBottles(3).then((bottles) => {
      setRandomBottles(bottles);
      console.log(bottles);
    });
  }, []);

  return (
    <LineUpBox>
      <PreBtn />
      <LineUpTextBox>
        <LineUpText>
          제가 추천하는 라인업을
          <br /> 한 번 살펴보시겠어요?
        </LineUpText>
      </LineUpTextBox>
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
    </LineUpBox>
  );
}

export default LineUp;
