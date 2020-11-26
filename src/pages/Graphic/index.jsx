import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import axios from "axios";

const Graphic = () => {
  const [countPokemon, setCountPokemon] = useState(0);
  const [countRickAndMorty, setCountRickAndMorty] = useState(0);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => setCountRickAndMorty(res.data.info.count));

    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setCountPokemon(res.data.count));
  });

  const data = {
    labels: ["Rick And Morty", "Pokemon"],
    datasets: [
      {
        data: [countRickAndMorty, countPokemon],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#f189a0", "#6ab8ec"],
      },
    ],
  };

  return (
    <div>
      <Title>Gráfico de Personagens</Title>
      <Pie data={data} />
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
  color: #fff;
`;

export default Graphic;
