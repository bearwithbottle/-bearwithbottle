import {
  ModalContainer,
  ModalContent,
  ModalBox,
  ModalContentBox,
  ModalText,
  ModalInfo,
  ModalTextTwo,
  ModalTextThree,
  ModalBtnBox,
  YesBtnBox,
  YesSubBtnWrap,
  YesSubBtnDot,
  NoBtnBox,
  NoSubBtnWrap,
  NoSubBtnDot,
} from "../../styles/info/infomodal";

interface InfoModalProps {
  onClose: () => void;
  onNoButtonClick: () => void;
}

function InfoModal({ onClose, onNoButtonClick }: InfoModalProps) {
  const handleYesButtonClick = () => {
    onClose();
    onNoButtonClick();
  };

  return (
    <ModalBox>
      <ModalContainer />
      <ModalContent>
        <ModalContentBox>
          <ModalText>가입 전 잠깐!!</ModalText>
          <ModalInfo />
          <ModalTextTwo>당신은 성인입니까?</ModalTextTwo>
          <ModalTextThree>곰돌 bar는 음주 가능 연령 이후</ModalTextThree>
          <ModalTextThree>사용을 권장합니다</ModalTextThree>
          <ModalBtnBox>
            <YesBtnBox>
              <YesSubBtnWrap onClick={onClose}>
                <YesSubBtnDot>Yes</YesSubBtnDot>
              </YesSubBtnWrap>
            </YesBtnBox>
            <NoBtnBox>
              <NoSubBtnWrap onClick={handleYesButtonClick}>
                <NoSubBtnDot>No</NoSubBtnDot>
              </NoSubBtnWrap>
            </NoBtnBox>
          </ModalBtnBox>
        </ModalContentBox>
      </ModalContent>
    </ModalBox>
  );
}

export default InfoModal;
