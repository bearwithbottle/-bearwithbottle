import {
  InfoPreText,
  InfoPreBox,
  InfoPreWrap,
} from "../../styles/infobtn/prebtn";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function PreBtn() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <InfoPreBox>
      <InfoPreWrap onClick={goBack}>
        <IoIosArrowBack className="arrow" />
        <InfoPreText>이전으로</InfoPreText>
      </InfoPreWrap>
    </InfoPreBox>
  );
}

export default PreBtn;
