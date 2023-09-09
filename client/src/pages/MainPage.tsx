/* eslint-disable react-hooks/exhaustive-deps */
import {
  WaitBox,
  LodingBox,
  LodingGom,
  LodingText,
  BarMainBox,
  BarDisplay,
  Title,
  TextPongBox,
  MidBox,
  TextPongContents,
  MidGom,
  BtnBox,
  LettersBox,
  LetterCodeBox,
  LetterStiker,
} from "../styles/mainbar";
import { useState, useEffect } from "react";
import ShareBtn from "../components/btn/ShareBtn";
import Refrigerator from "../components/btn/Refrigerator";
import ChangeName from "../components/btn/ChangeName";
import RfriModal from "../components/main/RefriModal";
import BottlesModal from "../components/main/BottlesModal";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../config";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { setImage, setName } from "../action";
import { Link } from "react-router-dom";

function MainPage() {
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const uid = localStorage.getItem("uid");
  const [letters, setLetters] = useState<DocumentData[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<DocumentData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const [name, image] = [
    useSelector((state: { name: string }) => state.name),
    useSelector((state: { image: string }) => state.image),
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      const docRef = doc(db, "users", uid);

      getDoc(docRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            const nameData = userData.name;
            const imgData = userData.img;
            dispatch(setName(nameData));
            dispatch(setImage(imgData));
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error getting document:", error);
        });
    }
  }, []);
  useEffect(() => {
    async function fetchLetters() {
      if (uid) {
        try {
          const userDocRef = doc(db, "users", uid); // 로컬 uid 값으로 사용자 문서 참조 가져오기

          const docSnapshot = await getDoc(userDocRef);
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            const lettersData = userData.letters || []; // letters 배열 데이터 가져오기
            setLetters(lettersData);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    fetchLetters();
  }, []);
  const getRandomLetters = () => {
    if (letters.length <= 5) {
      return letters;
    }

    const shuffledLetters = [...letters];

    for (let i = shuffledLetters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledLetters[i], shuffledLetters[j]] = [
        shuffledLetters[j],
        shuffledLetters[i],
      ];
    }

    return shuffledLetters.slice(0, 5);
  };
  const randomLetters = getRandomLetters();

  const handlemodal = () => {
    setIsModal((pre) => !pre);
  };
  const handleopen = () => {
    setIsOpen((pre) => !pre);
  };
  const handleLetterClick = (e: any, index: number) => {
    e.preventDefault();
    if (randomLetters[index]) {
      setSelectedLetter(randomLetters[index]);
      console.log(randomLetters[index]);
    }
  };
  const openModal = (index: any) => {
    setSelectedLetter(index);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedLetter(null);
    setIsModalOpen(false);
  };

  return (
    <WaitBox>
      {isLoading ? (
        <BarMainBox>
          {isModal && <RfriModal handlemodal={handlemodal} />}
          {isOpen && <BottlesModal handleopen={handleopen} />}
          <BarDisplay>
            <Title />
            <MidBox>
              <TextPongBox>
                <TextPongContents>
                  {name}님 안녕하십니까?
                  <br />
                  자신의 Bar를 홍보 해보시죠.
                </TextPongContents>
              </TextPongBox>
              <MidGom image={image} />
              <LettersBox>
                {randomLetters.map((letter, index) => (
                  <li key={index} onClick={(e) => handleLetterClick(e, index)}>
                    <LetterCodeBox img={letter.setbear} />
                    <LetterStiker sticker={letter.sticker} />
                    {isOpen && <BottlesModal handleopen={handleopen} />}
                  </li>
                ))}
              </LettersBox>
            </MidBox>
            <BtnBox>
              <ShareBtn />
              <Refrigerator handlemodal={handlemodal} />
              <Link to={`/name/${uid}`}>
                <ChangeName />
              </Link>
            </BtnBox>
          </BarDisplay>
        </BarMainBox>
      ) : (
        <LodingBox>
          <LodingGom />
          <LodingText />
        </LodingBox>
      )}
    </WaitBox>
  );
}

export default MainPage;
