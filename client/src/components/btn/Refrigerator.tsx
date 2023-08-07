import {
  RefrigeratorBox,
  RefrigeratorWrap,
  RefrigeratorDot,
} from "../../styles/mainbtn/refrigerator";
interface handlemodal {
  handlemodal: () => void;
}
function Refrigerator({ handlemodal }: handlemodal) {
  return (
    <RefrigeratorBox onClick={handlemodal}>
      <RefrigeratorWrap>
        <RefrigeratorDot>냉장고 보기</RefrigeratorDot>
      </RefrigeratorWrap>
    </RefrigeratorBox>
  );
}

export default Refrigerator;
