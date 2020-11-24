import { Route, Switch } from "react-router-dom";

import RickAndMorty from "./pages/RickAndMorty";
import Pokemon from "./pages/Pokemon";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={RickAndMorty} />
      <Route path="/pokemon" component={Pokemon} />
    </Switch>
  );
};

export default Routes;
