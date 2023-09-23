import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import "./styles/GlobalStyle.css";
import InfoStart from "./pages/InfoStart";
import InfoChooseGomdol from "./components/infostart/InfoChooseGomdol";
import MainPage from "./pages/MainPage";
import Sand from "./pages/Sand";
import QuestionList from "./pages/QuestionList";
import QuestionListTwo from "./pages/QuestionListTwo";
import LineUp from "./pages/LineUp";
import Mail from "./pages/Mail";
import Decorate from "./pages/Decorate";
import Delivery from "./pages/Delivery";
import To from "./pages/To";
import Name from "./pages/Name";
function App() {
  // const uid = localStorage.getItem("uid");

  return (
    <>
      <Routes>
        <Route path="/to" element={<To />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/decorate" element={<Decorate />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/lineup" element={<LineUp />} />
        <Route path="/listtwo" element={<QuestionListTwo />} />
        <Route path="/list" element={<QuestionList />} />
        <Route path={`/send/users/:id`} element={<Sand />} />
        <Route path="/" element={<Main />} />
        <Route path={`/choosegomdol`} element={<InfoChooseGomdol />} />
        <Route path={`/infostart`} element={<InfoStart />} />
        <Route path={`/bar`} element={<MainPage />} />
        <Route path={`/name`} element={<Name />} />
      </Routes>
    </>
  );
}

export default App;
