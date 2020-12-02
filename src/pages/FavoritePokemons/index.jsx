import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import CardsList from "../../components/CardsList";
import Title from "../../components/Title";

const FavoritePokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";

  const [favorites, setFavorites] = useState([]);

  const { favoritePokemons } = useSelector((state) => state);

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

      <CardsList list={favorites} isFavorite />
    </>
  );
};

export default FavoritePokemons;
