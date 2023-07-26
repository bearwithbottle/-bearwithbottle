import { MainBox, MainText, MainBtnBox } from "../styles/main";
import GoogleBtn from "../components/main/GoogleBtn";
import FacaBookBtn from "../components/main/FacaBookBtn";
import GithubBtn from "../components/main/GithubBtn";

import { ref, onValue } from "firebase/database";
import { useEffect } from "react";

import { database } from "../config";

function Main() {
  useEffect(() => {
    const usersRef = ref(database, "users");
    console.log(usersRef);

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList = Object.values(data);
        console.log(userList);
      }
    });
  }, []);

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
