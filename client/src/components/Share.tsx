import {
  BottlesModalBox,
  Xbox,
  ShareBox,
  ShareBoxIn,
  ShareText,
  ImgBox,
  ImgGom,
  OOO,
  InText,
  ShareBtnWrap,
  ShareBtnBox,
  ShareBtnDot,
  Modalbox,
  ModalIn,
  TextPongBox33,
  TextImg,
  TextPongContents,
} from "../styles/share";

import { useState } from "react";

function Share({ name, image, hadleShare }: any) {
  const [isShare, setIsShare] = useState(false);

  function copyDynamicValueToClipboard() {
    const currentURL = window.location.href;

    const parts = currentURL.split("/");
    const dynamicValue = parts[parts.length - 1];

    const copyText = `barewithbottle.firebaseapp.com/send/users/${dynamicValue}`;

    const textarea = document.createElement("textarea");
    textarea.value = copyText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert(`복사 완료!`);
  }
  const handleShareClick = () => {
    setIsShare(true);
    copyDynamicValueToClipboard();
    setTimeout(() => {
      setIsShare(false);
    }, 2000);
  };

  return (
    <BottlesModalBox>
      <ShareBox>
        <ShareBoxIn>
          <ShareText>공유하기</ShareText>
          <ImgBox>
            <ImgGom image={image} />
            <TextPongBox33>
              <TextImg />
              <TextPongContents>
                {name}님 안녕하십니까?
                <br />
                자신의 Bar를 홍보 해보시죠.
              </TextPongContents>
            </TextPongBox33>
          </ImgBox>
          <OOO />
          <InText>
            이미지와 링크를 공유해서
            <br /> Bar를 채워보시겠어요?
          </InText>
          <ShareBtnBox>
            <ShareBtnWrap>
              <ShareBtnDot onClick={handleShareClick}>링크복사하기</ShareBtnDot>
            </ShareBtnWrap>
          </ShareBtnBox>
        </ShareBoxIn>
      </ShareBox>
      {isShare && (
        <Modalbox>
          <ModalIn>링크 복사가 완료 되었습니다.</ModalIn>
        </Modalbox>
      )}
      <Xbox onClick={hadleShare} />
    </BottlesModalBox>
  );
}

export default Share;
