export const addToFavoritesChars = (char) => ({
  type: "@chars/ADD",
  char,
});

export const removeFromFavoritesChars = (list) => ({
  type: "@chars/REMOVE",
  list,
});
