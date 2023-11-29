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
  fetch(url("movie/now_playing?language=ko-KR"), options).then((res) =>
    res.json()
  );

export const upcoming = () =>
  fetch(url("movie/upcoming?language=ko-KR"), options).then((res) =>
    res.json()
  );

export const topRated = () =>
  fetch(url("movie/top_rated?language=ko-KR"), options).then((res) =>
    res.json()
  );

export const popular = () =>
  fetch(url("movie/popular?language=ko-KR"), options).then((res) => res.json());

export const movieDatail = (id) =>
  fetch(url(`movie/${id}?language=ko-KR`), options).then((res) => res.json());

export const genresList = () =>
  fetch(url("genre/movie/list?language=ko-KR"), options).then((res) =>
    res.json()
  );
