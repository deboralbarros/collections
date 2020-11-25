import { useState, useEffect } from "react";
import axios from "axios";

import Button from "../../components/Button";
import CardsList from "../../components/CardsList";

import { ButtonsContainer, Title } from "./style";

const RickAndMorty = () => {
  const [chars, setChars] = useState([]);
  const [favoriteChars, setFavoriteChars] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );

  useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data.info.next) {
        setNext(res.data.info.next);
      }

      if (res.data.info.prev) {
        setPrev(res.data.info.prev);
      }

      setChars(res.data.results);
    });
  }, [url]);

  const nextPage = () => {
    setUrl(next);
  };

  const prevPage = () => {
    setUrl(prev);
  };

  const addFavorite = (char) => {
    setFavoriteChars([...favoriteChars, char]);
  };

  const removeFavorite = (char) => {
    const getFavoriteList = window.localStorage.getItem("favoriteChars");

    const newFavorites = JSON.parse(getFavoriteList).filter(
      (item) => item !== char
    );

    setFavoriteChars(newFavorites);
  };

  window.localStorage.setItem("favoriteChars", JSON.stringify(favoriteChars));

  return (
    <>
      <Title>Rick And Morty</Title>
      <ButtonsContainer>
        <Button onClick={prevPage}>Página anterior</Button>
        <Button onClick={nextPage}>Próxima página</Button>
      </ButtonsContainer>

      <CardsList
        list={chars}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />

      <ButtonsContainer>
        <Button onClick={prevPage}>Página anterior</Button>
        <Button onClick={nextPage}>Próxima página</Button>
      </ButtonsContainer>
    </>
  );
};

export default RickAndMorty;
