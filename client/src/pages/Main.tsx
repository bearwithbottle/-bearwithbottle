import { MainBox, MainText, MainBtnBox } from "../styles/main";
import GoogleBtn from "../components/main/GoogleBtn";
import FacaBookBtn from "../components/main/FacaBookBtn";
import GithubBtn from "../components/main/GithubBtn";

import { doc, deleteDoc } from "firebase/firestore";
import { ref, onValue } from "firebase/database";
import { useEffect } from "react";

import { database, db } from "../config";

function Main() {
  // const deletemain = async () => {
  //   const mainamin = doc(db, "bar", "test");
  //   await deleteDoc(mainamin);
  // };

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
