import { Route, Switch } from "react-router-dom";

import RickAndMorty from "./pages/RickAndMorty";
import Pokemon from "./pages/Pokemon";
import FavoritePokemons from "./pages/FavoritePokemons";
import FavoriteChars from "./pages/FavoriteChars";
import Graphic from "./pages/Graphic";

const Routes = ({
  setFavoritePokemons,
  setFavoriteChars,
  favoritePokemons,
  favoriteChars,
}) => {
  return (
    <Switch>
      <Route exact path="/" component={Graphic} />

      <Route exact path="/rickandmorty">
        <RickAndMorty setFavoriteChars={setFavoriteChars} />
      </Route>

      <Route exact path="/pokemon">
        <Pokemon setFavoritePokemons={setFavoritePokemons} />
      </Route>

      <Route path="/pokemon/favorite">
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      </Route>

      <Route path="/rickandmorty/favorite">
        <FavoriteChars favoriteChars={favoriteChars} />
      </Route>
    </Switch>
  );
};

export default Routes;
