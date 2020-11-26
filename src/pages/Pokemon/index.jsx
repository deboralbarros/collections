import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/Button";
import CardsList from "../../components/CardsList";

import { ButtonsContainer, Title } from "./style";

const Pokemon = ({ setFavoritePokemons }) => {
  const [pokemons, setPokemons] = useState([]);
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

  const history = useHistory();

  useEffect(() => {
    axios.get(url).then((res) => {
      res.data.next && setNext(res.data.next);
      res.data.previous && setPrev(res.data.previous);

      const nextOffset = res.data.next
        .split("?")[1]
        .split("&")[0]
        .split("=")[1];

      if (nextOffset >= 140) {
        setUrl("https://pokeapi.co/api/v2/pokemon?offset=140&limit=10");
      }

      setPokemons(
        res.data.results.map((pokemon) => {
          const brokenUrl = pokemon.url.split("/");
          const id = brokenUrl[brokenUrl.length - 2];

          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return { ...pokemon, id, image };
        })
      );
    });
  }, [url]);

  const nextPage = () => {
    setUrl(next);
  };

  const prevPage = () => {
    setUrl(prev);
  };

  const addFavorite = (pokemon) => {
    const getFavoriteList = JSON.parse(
      window.localStorage.getItem("favoritePokemons")
    );

    setFavoritePokemons([...getFavoriteList, pokemon]);
  };

  const removeFavorite = (pokemon) => {
    const getFavoriteList = window.localStorage.getItem("favoritePokemons");

    const newFavorites = JSON.parse(getFavoriteList).filter(
      (item) => item !== pokemon
    );

    setFavoritePokemons(newFavorites);
  };

  const navigateToFavoritePokemons = () => {
    history.push("/pokemon/favorite");
  };

  return (
    <>
      <Title>Pokemon</Title>
      <ButtonsContainer>
        <Button onClick={prevPage}>Página anterior</Button>
        <Button onClick={nextPage}>Próxima página</Button>
      </ButtonsContainer>

      <CardsList
        list={pokemons}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />

      <Button onClick={navigateToFavoritePokemons}>Listar os Favoritos</Button>
    </>
  );
};

export default Pokemon;
