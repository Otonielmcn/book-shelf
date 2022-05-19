/* eslint-disable no-undef */
import { fetchBooks } from "../components/shelf/shelfAPI";

test('Must contain url to fetch books', () => {
  expect(process.env.REACT_APP_BOOKS_URL).toBeTruthy();
});

test('Must return array', async () => {
  const result = await fetchBooks().then((response) => { return response; });
  expect(result).toBeTruthy();
});
