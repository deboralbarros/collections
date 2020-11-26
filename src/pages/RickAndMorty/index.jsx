import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/Button";
import CardsList from "../../components/CardsList";

import { ButtonsContainer, Title } from "./style";

const RickAndMorty = ({ setFavoriteChars }) => {
  const [chars, setChars] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );

  const history = useHistory();

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
    const getFavoriteList = JSON.parse(
      window.localStorage.getItem("favoriteChars")
    );

    setFavoriteChars([...getFavoriteList, char]);
  };

  const removeFavorite = (char) => {
    const getFavoriteList = window.localStorage.getItem("favoriteChars");

    const newFavorites = JSON.parse(getFavoriteList).filter(
      (item) => item !== char
    );

    setFavoriteChars(newFavorites);
  };

  const navigateToFavoriteChars = () => {
    history.push("/rickandmorty/favorite");
  };

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

      <Button onClick={navigateToFavoriteChars}>Listar os Favoritos</Button>
    </>
  );
};

export default RickAndMorty;
