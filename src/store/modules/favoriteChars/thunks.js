import { addToFavoritesChars, removeFromFavoritesChars } from "./actions";

export const addToFavoritesCharsThunk = (char) => (dispatch, _getState) => {
  const list = JSON.parse(localStorage.getItem("favoriteChars")) || [];

  list.push(char);

  localStorage.setItem("favoriteChars", JSON.stringify(list));

  dispatch(addToFavoritesChars(char));
};

export const removeFromFavoritesCharsThunk = (id) => (dispatch, getState) => {
  const { favoriteChars } = getState();

  const newList = favoriteChars.filter((char) => char !== id);

  localStorage.setItem("favoriteChars", JSON.stringify(newList));
  dispatch(removeFromFavoritesChars(newList));
};
