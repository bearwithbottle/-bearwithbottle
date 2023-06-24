import {
  InfoPreText,
  InfoPreBox,
  InfoPreWrap,
} from "../../styles/infobtn/prebtn";
import { IoIosArrowBack } from "react-icons/io";
function PreBtn() {
  return (
    <InfoPreBox>
      <InfoPreWrap>
        <IoIosArrowBack className="arrow" />
        <InfoPreText>이전으로</InfoPreText>
      </InfoPreWrap>
    </InfoPreBox>
  );
}

export default PreBtn;
