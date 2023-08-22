import { MainBox, MainText, MainBtnBox } from "../styles/main";
import GoogleBtn from "../components/main/GoogleBtn";
import FacaBookBtn from "../components/main/FacaBookBtn";
import GithubBtn from "../components/main/GithubBtn";

import { useEffect } from "react";

import { db } from "../config";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

function Main() {
  // useEffect(() => {
  //   const docRef = doc(db, "bottles", "86608a40-1d5a-11ee-98bd-2597557a79fe");

  //   getDoc(docRef)
  //     .then(async (docSnapshot) => {
  //       if (docSnapshot.exists()) {
  //         const bottleData = docSnapshot.data();
  //         const uid = localStorage.getItem("uid");
  //         if (uid) {
  //           const userDocRef = doc(db, "users", uid);
  //           await updateDoc(userDocRef, {
  //             bottles: {
  //               code: "kahlua",
  //               text: "반가워요",
  //               color: "#fff",
  //             },
  //           });
  //           console.log("Bottle Data:", bottleData);
  //           console.log("Bottle Data2:", bottleData.code);
  //         }
  //       } else {
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error getting document:", error);
  //     });
  // }, []);

  return (
    <MainBox>
      <MainText />
      <MainBtnBox>
        <GoogleBtn />
        <FacaBookBtn />
        <GithubBtn />
      </MainBtnBox>
    </MainBox>
  );
}

export default Main;
