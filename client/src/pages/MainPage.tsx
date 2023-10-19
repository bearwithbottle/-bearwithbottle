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
  TextImg,
  TextPongBox33,
  MidBox,
  TextPongContents,
  MidGom,
  BtnBox,
  LettersBox,
  LetterCodeBox,
  LetterStiker,
  LogoutBox,
  LogoutText,
} from "../styles/mainbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShareBtn from "../components/btn/ShareBtn";
import Refrigerator from "../components/btn/Refrigerator";
import ChangeName from "../components/btn/ChangeName";
import RfriModal from "../components/main/RefriModal";
import BottlesModal from "../components/main/BottlesModal";
import LogoutModal from "../components/main/LogoutModal";
import Share from "../components/Share";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../config";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { setImage, setName } from "../action";
import { Link } from "react-router-dom";

function MainPage() {
  const [isModal, setIsModal] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navi = useNavigate();

  const uid = localStorage.getItem("uid");
  const [letters, setLetters] = useState<DocumentData[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<DocumentData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOut, setIsOut] = useState(false);
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
    } else {
      navi("/");
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

  const handleLetterClick = (e: any, index: number) => {
    e.preventDefault();
    if (randomLetters[index]) {
      setSelectedLetter(randomLetters[index]);
      setIsModalOpen(true);
    }
  };
  const handleIndex = () => {
    setIsModalOpen(false);
  };
  const hadleShare = () => {
    setIsShare((pre) => !pre);
  };
  const handleLogout = () => {
    setIsOut((pre) => !pre);
  };
  const textPongBox =
    name.length <= 10 ? (
      <TextPongBox>
        <TextImg />
        <TextPongContents>
          {name}님 안녕하십니까?
          <br />
          자신의 Bar를 홍보 해보시죠.
        </TextPongContents>
      </TextPongBox>
    ) : (
      <TextPongBox33>
        <TextImg />
        <TextPongContents>
          {name}님
          <br />
          안녕하십니까?
          <br />
          자신의 Bar를 홍보 해보시죠.
        </TextPongContents>
      </TextPongBox33>
    );

  return (
    <WaitBox>
      {isLoading ? (
        <BarMainBox>
          {isModal && <RfriModal handlemodal={handlemodal} />}

          {isModalOpen && (
            <BottlesModal
              handleLetterClick={handleLetterClick}
              selectedLetter={selectedLetter}
              handleIndex={handleIndex}
            />
          )}
          {isShare && (
            <Share
              name={name}
              image={image}
              uid={uid}
              hadleShare={hadleShare}
            />
          )}
          {isOut && <LogoutModal handleLogout={handleLogout} />}
          <BarDisplay>
            <Title />
            <MidBox>
              {textPongBox}
              <MidGom image={image} />
              <LettersBox>
                {randomLetters.map((letter, index) => (
                  <li key={index} onClick={(e) => handleLetterClick(e, index)}>
                    <LetterCodeBox img={letter.setbear} />
                    <LetterStiker sticker={letter.sticker} />
                  </li>
                ))}
              </LettersBox>
            </MidBox>
            <BtnBox>
              <ShareBtn hadleShare={hadleShare} />
              <Refrigerator handlemodal={handlemodal} />
              <LogoutBox>
                <Link to={`/name`}>
                  <ChangeName />
                </Link>
                <LogoutText onClick={handleLogout}>로그 아웃</LogoutText>
              </LogoutBox>
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
