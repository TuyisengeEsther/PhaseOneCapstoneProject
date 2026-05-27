
const STORAGE_KEY = 'favoriteBooks';

export function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function addFavorite(book) {

  const favorites = getFavorites();

  const exists = favorites.find(item => item.key === book.key);

  if (!exists) {

    favorites.push(book);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favorites)
    );
  }
}

export function removeFavorite(bookKey) {

  let favorites = getFavorites();

  favorites = favorites.filter(book => book.key !== bookKey);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(favorites)
  );
}

