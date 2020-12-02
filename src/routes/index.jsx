import { Route, Switch } from "react-router-dom";

import RickAndMorty from "../pages/RickAndMorty";
import Pokemon from "../pages/Pokemon";
import FavoritePokemons from "../pages/FavoritePokemons";
import FavoriteChars from "../pages/FavoriteChars";
import Graphic from "../pages/Graphic";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Graphic} />

      <Route exact path="/rickandmorty" component={RickAndMorty} />

      <Route exact path="/pokemon" component={Pokemon} />

      <Route path="/pokemon/favorite" component={FavoritePokemons} />

      <Route path="/rickandmorty/favorite" component={FavoriteChars} />
    </Switch>
  );
};

export default Routes;
