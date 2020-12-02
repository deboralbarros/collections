export const addToFavoritePokemons = (pokemon) => ({
  type: "@pokemons/ADD",
  pokemon,
});

export const removeFromFavoritePokemons = (list) => ({
  type: "@pokemons/REMOVE",
  list,
});
