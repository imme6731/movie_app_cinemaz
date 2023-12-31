const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const url = (urlName) => {
  return baseUrl + `${urlName}`;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNhNTI4ZmZhNmExZDQ4YTA3MjJmMGMwZjZiOWE4NiIsInN1YiI6IjY1NGIzYTBhMjg2NmZhMDExYmQxNGEyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jyt3yRmI2eqUV1C1dnw4dTYO-DNsK6eEeI0qb_Sogtk",
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p";

export const nowPlaying = () =>
  fetch(url("movie/now_playing?language=ko-KR&region=KR"), options).then(
    (res) => res.json()
  );

export const upcoming = () =>
  fetch(url("movie/upcoming?language=ko-KR&region=KR"), options).then((res) =>
    res.json()
  );

export const topRated = () =>
  fetch(url("movie/top_rated?language=ko-KR&region=KR"), options).then((res) =>
    res.json()
  );

export const popular = () =>
  fetch(url("movie/popular?language=ko-KR&region=KR"), options).then((res) =>
    res.json()
  );

export const movieDatail = (id) =>
  fetch(url(`movie/${id}?language=ko-KR`), options).then((res) => res.json());

export const genresList = () =>
  fetch(url("genre/movie/list?language=ko-KR"), options).then((res) =>
    res.json()
  );

export const countries = () =>
  fetch(url("configuration/countries?language=ko-KR"), options).then((res) =>
    res.json()
  );

export const credits = (id) =>
  fetch(url(`movie/${id}/credits?language=ko-KR`), options).then((res) =>
    res.json()
  );

export const similar = (id) =>
  fetch(url(`movie/${id}/similar?language=ko-KR`), options).then((res) =>
    res.json()
  );
export const recommend = (id) =>
  fetch(url(`movie/${id}/recommendations?language=ko-KR`), options).then(
    (res) => res.json()
  );

export const discoverPop = (id) =>
  fetch(
    url(
      `discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&with_genres=${id}`
    ),
    options
  ).then((res) => res.json());

export const discoverVote = (id) =>
  fetch(
    url(
      `discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=vote_count.desc&with_genres=${id}`
    ),
    options
  ).then((res) => res.json());

export const movieSearch = (input) =>
  fetch(url(`search/movie?query=${input}&language=ko-KR`), options).then(
    (res) => res.json()
  );

export const trending = () =>
  fetch(url(`trending/movie/week?language=ko-KR`), options).then((res) =>
    res.json()
  );
