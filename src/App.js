import { useState } from "react";

import GlobalStyle from "./styles/global";

import Routes from "./routes";

import Menu from "./components/Menu";

import "./App.css";

function App() {
  const [favoriteChars, setFavoriteChars] = useState([]);
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const handleFavoritePokemons = (pokemons) => {
    setFavoritePokemons(pokemons);
  };

  window.localStorage.setItem(
    "favoritePokemons",
    JSON.stringify(favoritePokemons)
  );

  const handleFavoriteChars = (chars) => {
    setFavoriteChars(chars);
  };

  window.localStorage.setItem("favoriteChars", JSON.stringify(favoriteChars));

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Menu />
      <div id="main-container">
        <Routes
          setFavoritePokemons={handleFavoritePokemons}
          setFavoriteChars={handleFavoriteChars}
          favoritePokemons={favoritePokemons}
          favoriteChars={favoriteChars}
        />
      </div>
    </>
  );
}

export default App;
