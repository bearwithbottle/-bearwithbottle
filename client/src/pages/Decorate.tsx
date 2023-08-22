import {
  DecorateBox,
  DecorateTextBox,
  DecorateText,
  DecorateMidBox,
  DecorateImgBox,
  DecorateImg,
  DecorateImgdeco,
  DecorateDoceBox,
  DecorateNodeco,
  DecorateCute,
  DecorateRain,
  DecorateGood,
  DecorateNodecoBox,
  DecorateCuteBox,
  DecorateRainBox,
  DecorateGoodBox,
} from "../styles/decorate";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PreBtn from "../components/infostart/PreBtn";
import NextMailBtn from "../components/infostart/NextMailBtn";
import { storage } from "../config";
import { ref, getDownloadURL } from "firebase/storage";
import { setSticker } from "../action";

function Decorate() {
  const [isOne, setIsOne] = useState(true);
  const [isTwo, setIsTwo] = useState(false);
  const [isThree, setIsThress] = useState(false);
  const [isFour, setIsFour] = useState(false);
  //img
  const [oneUrl, setOneUrl] = useState<string>("");
  const [twoUrl, setTwoUrl] = useState<string>("");
  const [threeUrl, setThreeUrl] = useState<string>("");
  const [FourUrl, setFourUrl] = useState<string>("");
  //redux
  const dispatch = useDispatch();
  const img = useSelector<any>((state) => state.setbear);
  useEffect(() => {
    const getImageUrl = async (imageName: string, setUrl: any) => {
      try {
        const imageRef = ref(storage, imageName);
        const url = await getDownloadURL(imageRef);
        setUrl(url);
      } catch (error) {
        console.error(imageName, error);
      }
    };

    getImageUrl("nodeco.png", setOneUrl);
    getImageUrl("cutedeco.png", setTwoUrl);
    getImageUrl("raindeco.png", setThreeUrl);
    getImageUrl("gooddeco.png", setFourUrl);
  }, []);
  const handleOne = () => {
    setIsOne(true);
    setIsTwo(false);
    setIsThress(false);
    setIsFour(false);
    dispatch(setSticker(""));
  };

  const handleTwo = () => {
    setIsOne(false);
    setIsTwo(true);
    setIsThress(false);
    setIsFour(false);
    dispatch(setSticker(twoUrl));
  };

  const handleThree = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(true);
    setIsFour(false);
    dispatch(setSticker(threeUrl));
  };
  const handleFour = () => {
    setIsOne(false);
    setIsTwo(false);
    setIsThress(false);
    setIsFour(true);
    dispatch(setSticker(FourUrl));
  };

  return (
    <DecorateBox>
      <PreBtn />
      <DecorateTextBox>
        <DecorateText>
          살짝 멋을 <br />더 해보시겠어요?
        </DecorateText>
      </DecorateTextBox>
      <DecorateMidBox>
        <DecorateImgBox>
          <DecorateImg img={img} />
          <DecorateImgdeco
            isOne={isOne}
            isTwo={isTwo}
            isThree={isThree}
            isFour={isFour}
          />
        </DecorateImgBox>
        <DecorateDoceBox>
          <DecorateNodecoBox isOne={isOne}>
            <DecorateNodeco onClick={handleOne} />
          </DecorateNodecoBox>
          <DecorateCuteBox isTwo={isTwo}>
            <DecorateCute onClick={handleTwo} twoUrl={twoUrl} />
          </DecorateCuteBox>
          <DecorateRainBox isThree={isThree}>
            <DecorateRain onClick={handleThree} threeUrl={threeUrl} />
          </DecorateRainBox>
          <DecorateGoodBox isFour={isFour}>
            <DecorateGood onClick={handleFour} FourUrl={FourUrl} />
          </DecorateGoodBox>
        </DecorateDoceBox>
      </DecorateMidBox>
      <Link to="/delivery">
        <NextMailBtn />
      </Link>
    </DecorateBox>
  );
}

export default Decorate;
