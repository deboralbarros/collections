import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/Button";
import CardsList from "../../components/CardsList";
import Title from "../../components/Title";
import ButtonsContainer from "../../components/ButtonsContainer";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

  const history = useHistory();

  useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data.next) setNext(res.data.next);
      if (res.data.previous) setPrev(res.data.previous);

      const nextOffset = res.data.next
        .split("?")[1]
        .split("&")[0]
        .split("=")[1];

      if (nextOffset >= 140) {
        setUrl("https://pokeapi.co/api/v2/pokemon?offset=140&limit=10");
      }

      const pokemonsList = res.data.results.map((pokemon) => {
        const brokenUrl = pokemon.url.split("/");
        const id = brokenUrl[brokenUrl.length - 2];

        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return { ...pokemon, id, image };
      });

      setPokemons(pokemonsList);
    });
  }, [url]);

  const nextPage = () => {
    setUrl(next);
  };

  const prevPage = () => {
    setUrl(prev);
  };

  const navigateToFavoritePokemons = () => {
    history.push("/pokemon/favorite");
  };

  return (
    <>
      <Title>Pokemon</Title>
      <ButtonsContainer prevPage={prevPage} nextPage={nextPage} />

      <CardsList list={pokemons} />

      <Button onClick={navigateToFavoritePokemons}>Listar os Favoritos</Button>
    </>
  );
};

export default Pokemon;
