import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import favoriteCharsReducer from "./modules/favoriteChars/reducer";
import favoritePokemonsReducer from "./modules/favoritePokemons/reducer";

const reducers = combineReducers({
  favoriteChars: favoriteCharsReducer,
  favoritePokemons: favoritePokemonsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
