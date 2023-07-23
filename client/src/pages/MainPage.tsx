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
} from "../styles/mainbar";
import { useState, useEffect } from "react";
import ShareBtn from "../components/btn/ShareBtn";
import Refrigerator from "../components/btn/Refrigerator";
import ChangeName from "../components/btn/ChangeName";
import { useSelector } from "react-redux";

function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const name = useSelector((state: { name: string }) => state.name);
  const image = useSelector((state: { image: string }) => state.image);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <WaitBox>
      {isLoading ? (
        <BarMainBox>
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
            <BtnBox>
              <ShareBtn />
              <Refrigerator />
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
