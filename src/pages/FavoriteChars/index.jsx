import { useEffect, useState } from "react";
import axios from "axios";

import CardsList from "../../components/CardsList";
import Title from "../../components/Title";

const FavoriteChars = ({ favoriteChars }) => {
  const [favorites, setFavorites] = useState([]);

  const url = "https://rickandmortyapi.com/api/character/?page=1";

  const [characterList, setCharacterList] = useState([]);
  const [nextUrl, setNextUrl] = useState(url);

  const getCharacters = (url) => {
    axios(url).then((res) => {
      setCharacterList([...characterList, ...res.data.results]);
      if (res.data.info.next !== null) setNextUrl(res.data.info.next);
    });
  };

  useEffect(() => {
    getCharacters(nextUrl);

    setFavorites(
      characterList.filter((item) => {
        const id = item.id;

        return favoriteChars.includes(id);
      })
    );
  }, [favoriteChars, nextUrl]);

  return (
    <>
      <Title>Personagens Favoritos</Title>

      <CardsList list={favorites} isFavorite />
    </>
  );
};

export default FavoriteChars;
