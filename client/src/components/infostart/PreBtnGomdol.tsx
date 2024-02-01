import {
  InfoPreText,
  InfoPreBox,
  InfoPreWrap,
} from "../../styles/infobtn/prebtn";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config";
import { doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
function PreBtnGomdol() {
  const navigate = useNavigate();

  const handleGomSubmit = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user.uid;
          const userDocRef = doc(db, "users", uid);
          await updateDoc(userDocRef, {
            name: "",
          });
        } catch (error) {
          console.error(error);
        } finally {
          navigate("/infostart");
        }
      }
    });
  };

  return (
    <InfoPreBox>
      <InfoPreWrap onClick={handleGomSubmit}>
        <IoIosArrowBack className="arrow" />
        <InfoPreText>이전으로</InfoPreText>
      </InfoPreWrap>
    </InfoPreBox>
  );
}

export default PreBtnGomdol;
