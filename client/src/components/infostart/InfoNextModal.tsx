import {
  NextModalBox,
  NextModalContainer,
  NextModalContent,
  NextModalContentBox,
  NextModalText,
  NextModalTextBox,
  NextModalTextTwo,
  YesSubBtnWrap,
  YesSubBtnDot,
  YesBtnBox,
  YesSubBtnBox,
} from "../../styles/info/infonextmodal";
import { useNavigate } from "react-router-dom";

interface InfoNextModalProps {
  onClose: () => void;
  onCopyLink: () => void;
}

function InfoNextModal({ onClose, onCopyLink }: InfoNextModalProps) {
  const navigate = useNavigate();
  const handleYesButtonClick = () => {
    onCopyLink();
    onClose();
    navigate("/");
  };

  return (
    <NextModalBox>
      <NextModalContainer />
      <NextModalContent>
        <NextModalContentBox>
          <NextModalTextBox>
            <NextModalText>다음 기회에 뵈어요...</NextModalText>
            <NextModalTextTwo>
              곰돌bar는 만 19세 미만의 미성년자의
            </NextModalTextTwo>
            <NextModalTextTwo>음주를 권장하지 않습니다.</NextModalTextTwo>
          </NextModalTextBox>
          <YesSubBtnBox>
            <YesBtnBox>
              <YesSubBtnWrap onClick={handleYesButtonClick}>
                <YesSubBtnDot>링크 복사하기</YesSubBtnDot>
              </YesSubBtnWrap>
            </YesBtnBox>
          </YesSubBtnBox>
        </NextModalContentBox>
      </NextModalContent>
    </NextModalBox>
  );
}

export default InfoNextModal;
