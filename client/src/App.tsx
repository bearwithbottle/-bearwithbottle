import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import "./styles/GlobalStyle.css";
import InfoStart from "./pages/InfoStart";
import InfoChooseGomdol from "./components/infostart/InfoChooseGomdol";
import MainPage from "./pages/MainPage";
import Sand from "./pages/Sand";
import QuestionList from "./pages/QuestionList";
import QuestionListTwo from "./pages/QuestionListTwo";
import Sandbear from "./pages/Sandbear";
function App() {
  return (
    <>
      <Routes>
        <Route path="/sandbear" element={<Sandbear />} />
        <Route path="/listtwo" element={<QuestionListTwo />} />
        <Route path="/list" element={<QuestionList />} />
        <Route path="/sand" element={<Sand />} />
        <Route path="/" element={<Main />} />
        <Route path="/Info-choose-gomdol" element={<InfoChooseGomdol />} />
        <Route path="/info-start" element={<InfoStart />} />
        <Route path="/bar" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
