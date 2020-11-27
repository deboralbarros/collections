export const addToFavorites = (newItem, localStorageItem) => {
  const getFavoriteList = JSON.parse(
    window.localStorage.getItem(localStorageItem)
  );

  return [...getFavoriteList, newItem];
};

export const removeFavorite = (removedItem, localStorageItem) => {
  const getFavoriteList = window.localStorage.getItem(localStorageItem);

  const newFavorites = JSON.parse(getFavoriteList).filter(
    (item) => item !== removedItem
  );

  return newFavorites;
};
