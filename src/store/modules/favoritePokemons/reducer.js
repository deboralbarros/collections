const defaultState = JSON.parse(localStorage.getItem("favoritePokemons")) || [];

const favoritePokemonsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@pokemons/ADD":
      const { pokemon } = action;

      return [...state, pokemon];

    case "@pokemons/REMOVE":
      const { list } = action;

      return list;

    default:
      return state;
  }
};

export default favoritePokemonsReducer;
