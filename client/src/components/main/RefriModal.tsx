import {
  RefriModalBox,
  RefriModalContents,
  BottleBox,
  BottleBoxImg,
  BottleBoxNameBox,
  BottleBoxName,
  Xbox,
} from "../../styles/mainbtn/refrimodal";
interface handlemodal {
  handlemodal: () => void;
}
function RfriModal({ handlemodal }: handlemodal) {
  return (
    <RefriModalBox>
      <RefriModalContents>
        <BottleBox>
          <BottleBoxImg />
          <BottleBoxNameBox>
            <BottleBoxName>5글자넘어가면안돼요</BottleBoxName>
          </BottleBoxNameBox>
        </BottleBox>
      </RefriModalContents>
      <Xbox onClick={handlemodal} />
    </RefriModalBox>
  );
}

export default RfriModal;
