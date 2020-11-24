import { useEffect, useState } from "react";
import axios from "axios";

import CardsList from "../../components/CardsList";
import Button from "../../components/Button";

const RickAndMorty = () => {
  const [chars, setChars] = useState([]);
  const [previous, setPrevious] = useState("");
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [next, setNext] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setChars(res.data.results);
      res.data.info.next && setNext(res.data.info.next);
      res.data.info.prev && setPrevious(res.data.info.prev);
    });
  }, [url]);

  const handleFavorite = (charId) => {
    setFavorites([...favorites, charId]);
  };

  const removeFavorite = (charId) => {
    const getFavorites = JSON.parse(
      window.localStorage.getItem("favoriteChars")
    );

    const newFavorites = getFavorites.filter((item) => item !== charId);

    setFavorites(newFavorites);
  };

  window.localStorage.setItem("favoriteChars", JSON.stringify(favorites));

  const handlePrevious = () => {
    setUrl(previous);
  };

  const handleNext = () => {
    setUrl(next);
  };

  return (
    <div>
      <CardsList
        list={chars}
        handleFavorite={handleFavorite}
        removeFavorite={removeFavorite}
      />
      <Button onClick={handlePrevious}>Página anterior</Button>
      <Button onClick={handleNext}>Próxima página</Button>
    </div>
  );
};

export default RickAndMorty;
