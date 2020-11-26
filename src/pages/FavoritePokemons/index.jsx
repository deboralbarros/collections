import { useEffect, useState } from "react";
import axios from "axios";

import FavoriteCardsList from "../../components/FavoriteCards";
import { Title } from "./style";

const FavoritePokemons = ({ favoritePokemons }) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setFavorites(
        res.data.results
          .filter((item) => {
            const brokenUrl = item.url.split("/");

            const id = brokenUrl[brokenUrl.length - 2];

            return favoritePokemons.includes(id);
          })
          .map((pokemon) => {
            const brokenUrl = pokemon.url.split("/");
            const id = brokenUrl[brokenUrl.length - 2];

            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            return { ...pokemon, id, image };
          })
      );
    });
  }, [favoritePokemons]);

  return (
    <>
      <Title>Pokemons Favoritos</Title>

      <FavoriteCardsList list={favorites} />
    </>
  );
};

export default FavoritePokemons;
