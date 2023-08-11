import { LineUpBox, LineUpTextBox, LineUpText } from "../styles/lineup";
import { useState, useEffect } from "react";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../config";
import PreBtn from "../components/infostart/PreBtn";
function LineUp() {
  const [randomBottles, setRandomBottles] = useState<DocumentData[]>([]);

  function getRandomBottles(count: any) {
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
      {randomBottles &&
        randomBottles.map((bottle, index) => (
          <div key={index}>
            <h2>{bottle.code}</h2>
            <p>{bottle.name}</p>
            <p>{bottle.text}</p>
          </div>
        ))}
    </LineUpBox>
  );
}

export default LineUp;
