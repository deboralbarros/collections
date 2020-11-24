import GlobalStyle from "./styles/global";

import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="main-container">
        <Routes />
      </div>
    </>
  );
}

export default App;
