import GlobalStyle from "./styles/global";

import Routes from "./routes";

import Menu from "./components/Menu";

import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Menu />
      <div id="main-container">
        <Routes />
      </div>
    </>
  );
}

export default App;
