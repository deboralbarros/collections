import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Button from "../../components/Button";
import CardsList from "../../components/CardsList";
import Title from "../../components/Title";
import ButtonsContainer from "../../components/ButtonsContainer";

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

  const navigateToFavoriteChars = () => {
    history.push("/rickandmorty/favorite");
  };

  return (
    <>
      <Title>Rick And Morty</Title>
      <ButtonsContainer prevPage={prevPage} nextPage={nextPage} />

      <CardsList list={chars} />

      <Button onClick={navigateToFavoriteChars}>Listar os Favoritos</Button>
    </>
  );
};

export default RickAndMorty;
