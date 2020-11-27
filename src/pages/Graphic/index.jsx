import { useState, useEffect } from "react";

import { Pie } from "react-chartjs-2";
import Title from "../../components/Title";

const Graphic = () => {
  const [countPokemon, setCountPokemon] = useState(0);
  const [countRickAndMorty, setCountRickAndMorty] = useState(0);

  useEffect(() => {
    const localStorageChars = JSON.parse(
      window.localStorage.getItem("favoriteChars") || "[]"
    );
    setCountRickAndMorty(localStorageChars.length);

    const localStoragePokemons = JSON.parse(
      window.localStorage.getItem("favoritePokemons") || "[]"
    );
    setCountPokemon(localStoragePokemons.length);
  }, [countPokemon, countRickAndMorty]);

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
      <Title>Gráfico de Personagens Favoritados</Title>
      {countPokemon > 0 || countRickAndMorty > 0 ? (
        <Pie data={data} />
      ) : (
        <Title>Não há personagens favoritados</Title>
      )}
    </div>
  );
};

export default Graphic;
