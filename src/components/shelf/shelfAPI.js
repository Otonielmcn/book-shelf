export function fetchBooks() {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => resolve(fetch(process.env.REACT_APP_BOOKS_URL)
    .then((response) => response.json())
    .then((list) => list)));
}
