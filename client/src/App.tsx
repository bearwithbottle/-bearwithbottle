import Main from "./pages/Main";
import "./styles/GlobalStyle.css";
import InfoStart from "./pages/InfoStart";
import InfoChooseGomdol from "./components/infostart/InfoChooseGomdol";
function App() {
  return (
    <>
      <Main />
      <InfoStart />
      <InfoChooseGomdol />
    </>
  );
}

export default App;
