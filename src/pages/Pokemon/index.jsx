import { useEffect, useState } from "react";
import axios from "axios";

import CardsList from "../../components/CardsList";

const Pokemon = () => {
  const limit = 20;
  const offset = 0;

  const [pokemons, setPokemons] = useState([]);
  const [previous, setPrevious] = useState("");
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const [next, setNext] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setPokemons(res.data.results));
  }, [url]);

  const handleFavorite = (charId) => {
    setFavorites([...favorites, charId]);
  };

  const removeFavorite = (charId) => {
    const getFavorites = JSON.parse(
      window.localStorage.getItem("favoritesPokemon")
    );

    const newFavorites = getFavorites.filter((item) => item !== charId);

    setFavorites(newFavorites);
  };

  window.localStorage.setItem("favoritesPokemon", JSON.stringify(favorites));

  const handlePrevious = () => {
    setUrl(previous);
  };

  const handleNext = () => {
    setUrl(next);
  };

  return (
    <div>
      <CardsList
        list={pokemons}
        handleFavorite={handleFavorite}
        removeFavorite={removeFavorite}
      />
      <button onClick={handlePrevious}>Página anterior</button>
      <button onClick={handleNext}>Próxima página</button>
    </div>
  );
};

export default Pokemon;
