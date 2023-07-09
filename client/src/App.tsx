import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import "./styles/GlobalStyle.css";
import InfoStart from "./pages/InfoStart";
import InfoChooseGomdol from "./components/infostart/InfoChooseGomdol";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Info-choose-gomdol" element={<InfoChooseGomdol />} />
        <Route path="/info-start" element={<InfoStart />} />
        <Route path="/bar" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
