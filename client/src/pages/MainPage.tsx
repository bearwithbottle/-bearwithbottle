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
function MainPage() {
  const [isLoading, setIsLoading] = useState(false);

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
                  블라블라님 안녕하십니까?
                  <br />
                  자신의 Bar를 홍보 해보시죠.
                </TextPongContents>
              </TextPongBox>
              <MidGom />
            </MidBox>
            <BtnBox></BtnBox>
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
