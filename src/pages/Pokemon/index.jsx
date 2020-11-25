import { useState, useEffect } from "react";
import axios from "axios";

import Button from "../../components/Button";
import CardsList from "../../components/CardsList";

import { ButtonsContainer, Title } from "./style";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

  useEffect(() => {
    axios.get(url).then((res) => {
      res.data.next && setNext(res.data.next);
      res.data.previous && setPrev(res.data.previous);

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

  const addFavorite = (char) => {
    setFavoritePokemons([...favoritePokemons, char]);
  };

  const removeFavorite = (char) => {
    const getFavoriteList = window.localStorage.getItem("favoritePokemons");

    const newFavorites = JSON.parse(getFavoriteList).filter(
      (item) => item !== char
    );

    setFavoritePokemons(newFavorites);
  };

  window.localStorage.setItem(
    "favoritePokemons",
    JSON.stringify(favoritePokemons)
  );

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

      <ButtonsContainer>
        <Button onClick={prevPage}>Página anterior</Button>
        <Button onClick={nextPage}>Próxima página</Button>
      </ButtonsContainer>
    </>
  );
};

export default Pokemon;
