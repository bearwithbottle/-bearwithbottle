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
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { db } from "../config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setSendUid, setName } from "../action";
function Sand() {
  const { uid } = useParams();
  const dispatch = useDispatch();
  const navi = useNavigate();

  const fetchUserData = async (uid: any) => {
    const userCollectionRef = collection(db, "users");
    const q = query(userCollectionRef, where("id", "==", uid));
    const userDocSnap = await getDocs(q);

    if (userDocSnap.empty) {
      return null;
    }

    const userData = userDocSnap.docs[0].data();
    dispatch(setName(userData?.name));
    dispatch(setSendUid(userData?.id));

    return userData;
  };

  const { data: userData } = useQuery(["userData"], () => fetchUserData(uid));

  const Lettersarr = userData?.letters;
  function getRandomIndexes(arr: any[]) {
    const randomIndexes: any[] = [];

    if (arr && arr.length > 0) {
      const length = arr.length;
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
    } else {
      return arr;
    }

    return randomIndexes.map((randomIndex) => arr[randomIndex]);
  }
  const randomLetters = getRandomIndexes(Lettersarr);

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
            <MapBox>
              <SandTextPongBox>
                <SandTextImg />
                <SandTextPongContents>
                  환영해요, 방문객님,
                  <br />
                  {userData?.name}님께 선물할
                  <br />
                  최고의 라인업을 준비해놨답니다.
                </SandTextPongContents>
              </SandTextPongBox>
              <SandMidGom gom={userData?.img} />
              <MailBox>
                {randomLetters?.map((letter: any, letterIndex: any) => (
                  <div key={letterIndex}>
                    <LetterCodeBox img={letter?.setbear} />
                    <LetterStiker sticker={letter?.sticker} />
                  </div>
                ))}
              </MailBox>
            </MapBox>
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
