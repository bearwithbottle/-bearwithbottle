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
  TextBox,
} from "../styles/mainbar";
import { useState, useEffect } from "react";
import ShareBtn from "../components/btn/ShareBtn";
import Refrigerator from "../components/btn/Refrigerator";
import ChangeName from "../components/btn/ChangeName";
import RfriModal from "../components/main/RefriModal";
import BottlesModal from "../components/main/BottlesModal";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../config";
import { doc, getDoc } from "firebase/firestore";
import { setImage, setName } from "../action";
function MainPage() {
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [name, image] = [
    useSelector((state: { name: string }) => state.name),
    useSelector((state: { image: string }) => state.image),
  ];
  console.log("name", name);
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
            console.log("Data:", userData);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error("Error getting document:", error);
        });
    }
  }, []);

  const handlemodal = () => {
    setIsModal((pre) => !pre);
  };
  const handleopen = () => {
    setIsOpen((pre) => !pre);
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
            </MidBox>
            <TextBox onClick={handleopen} />
            <BtnBox>
              <ShareBtn />
              <Refrigerator handlemodal={handlemodal} />
              <ChangeName />
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
