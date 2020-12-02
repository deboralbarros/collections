import { addToFavoritePokemons, removeFromFavoritePokemons } from "./actions";

export const addToFavoritePokemonsThunk = (pokemon) => (
  dispatch,
  _getState
) => {
  const list = JSON.parse(localStorage.getItem("favoritePokemons")) || [];

  list.push(pokemon);

  localStorage.setItem("favoritePokemons", JSON.stringify(list));

  dispatch(addToFavoritePokemons(pokemon));
};

export const removeFromFavoritePokemonsThunk = (id) => (dispatch, getState) => {
  const { favoritePokemons } = getState();

  const newList = favoritePokemons.filter((pokemon) => pokemon !== id);

  localStorage.setItem("favoritePokemons", JSON.stringify(newList));

  dispatch(removeFromFavoritePokemons(newList));
};
