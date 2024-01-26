import {
  RefriModalBox,
  RefriModalContents,
  BottleBox,
  BottleBoxImg,
  BottleBoxNameBox,
  BottleBoxName,
  Xbox,
  LetterStiker,
} from "../../styles/mainbtn/refrimodal";
import Modalmodal from "./Modalmodal";
import {
  DocumentData,
  query,
  getDocs,
  where,
  limit,
  collection,
} from "firebase/firestore";
import { db } from "../../config";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

interface handlemodal {
  handlemodal: () => void;
  isletters: DocumentData[];
}
function RfriModal({ handlemodal, isletters }: handlemodal) {
  const [arr, setArr] = useState<any>();
  const [saveCode, setSaveCode] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  function sliceArray<T>(arr: T[]): T[][] {
    const sliceArr: T[][] = [];
    let index = 0;

    while (index < arr.length) {
      sliceArr.push(arr.slice(index, index + 9));
      index += 9;
    }

    return sliceArr;
  }
  const sliceLetter = sliceArray(isletters);

  async function what(letter: any) {
    setArr(letter);
    const code = letter.code;
    const getFire = await getRandomBottles(code);
    setSaveCode(getFire);
    setIsOpen((pre) => !pre);
  }
  async function getRandomBottles(code: string) {
    const bottlesCollectionRef = collection(db, "recommend");
    const q = query(bottlesCollectionRef, where("code", "==", code), limit(1));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const documents = querySnapshot.docs.map((doc) => doc.data());
      return documents;
    }
    return null;
  }
  function handleIsOpen() {
    setIsOpen((pre) => !pre);
  }
  return (
    <RefriModalBox>
      {isOpen && (
        <Modalmodal saveCode={saveCode} arr={arr} handleIsOpen={handleIsOpen} />
      )}
      <RefriModalContents>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={500}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="swiper"
        >
          {sliceLetter.map((slice, index) => (
            <SwiperSlide key={index}>
              <div className="sliceLetterBox">
                {slice.map((letter, innerIndex) => (
                  <BottleBox key={innerIndex} onClick={(e) => what(letter)}>
                    <BottleBoxImg img={letter.setbear} />
                    <LetterStiker sticker={letter.sticker} />
                    <BottleBoxNameBox>
                      <BottleBoxName>{letter.sender}</BottleBoxName>
                    </BottleBoxNameBox>
                  </BottleBox>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </RefriModalContents>
      <Xbox onClick={handlemodal} />
    </RefriModalBox>
  );
}

export default RfriModal;
