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

import { DocumentData } from "firebase/firestore";
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
  console.log(sliceLetter);
  function what(e: any, index: any) {
    setArr(index);
    console.log("test", arr);
  }
  return (
    <RefriModalBox>
      <RefriModalContents>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {sliceLetter.map((slice, index) => (
            <SwiperSlide key={index}>
              <div className="sliceLetterBox">
                {slice.map((letter, innerIndex) => (
                  <BottleBox key={innerIndex} onClick={(e) => what(e, letter)}>
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
