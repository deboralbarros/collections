const defaultState = JSON.parse(localStorage.getItem("favoriteChars")) || [];

const favoriteCharsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@chars/ADD":
      const { char } = action;

      return [...state, char];

    case "@chars/REMOVE":
      const { list } = action;

      return list;

    default:
      return state;
  }
};

export default favoriteCharsReducer;
