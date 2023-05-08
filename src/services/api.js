const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32083000-0930ed6e251f9a7620e985678';
const PER_PAGE = 20;

export const getImg = searchImg => {
  return fetch(`${BASE_URL}?key=${KEY}&q=${searchImg}&per_page=${PER_PAGE}`);
};

export const addImg = (searchImg, newPerPage) => {
  return fetch(`${BASE_URL}?key=${KEY}&q=${searchImg}&per_page=${newPerPage}`);
};
