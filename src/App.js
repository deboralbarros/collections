import { useState } from "react";

import GlobalStyle from "./styles/global";

import Routes from "./routes/index";
import Menu from "./components/Menu";

import "./App.css";

function App() {
  const favoriteCharsFromLocalStorage = JSON.parse(
    window.localStorage.getItem("favoriteChars") || "[]"
  );

  const favoritePokemonsFromLocalStorage = JSON.parse(
    window.localStorage.getItem("favoritePokemons") || "[]"
  );

  const [favoriteChars, setFavoriteChars] = useState(
    favoriteCharsFromLocalStorage
  );
  const [favoritePokemons, setFavoritePokemons] = useState(
    favoritePokemonsFromLocalStorage
  );

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
