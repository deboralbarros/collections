import { useSelector } from "react-redux";

import { Pie } from "react-chartjs-2";
import Title from "../../components/Title";

const Graphic = () => {
  const { favoriteChars, favoritePokemons } = useSelector((state) => state);

  const data = {
    labels: ["Rick And Morty", "Pokemon"],
    datasets: [
      {
        data: [favoriteChars.length, favoritePokemons.length],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#f189a0", "#6ab8ec"],
      },
    ],
  };

  return (
    <div>
      <Title>Gráfico de Personagens Favoritados</Title>
      {favoriteChars.length > 0 || favoritePokemons.length > 0 ? (
        <Pie data={data} />
      ) : (
        <Title>Não há personagens favoritados</Title>
      )}
    </div>
  );
};

export default Graphic;
