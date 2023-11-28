const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

<<<<<<< HEAD
const url = (urlName) => {
  return baseUrl + `${urlName}`;
};

=======
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNhNTI4ZmZhNmExZDQ4YTA3MjJmMGMwZjZiOWE4NiIsInN1YiI6IjY1NGIzYTBhMjg2NmZhMDExYmQxNGEyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jyt3yRmI2eqUV1C1dnw4dTYO-DNsK6eEeI0qb_Sogtk",
  },
};
<<<<<<< HEAD

export const IMG_URL = "https://image.tmdb.org/t/p";

export const nowPlaying = () =>
  fetch(url("movie/now_playing?language=ko-KR"), options).then((res) =>
    res.json()
  );

export const upcoming = () =>
  fetch(url("movie/upcoming?language=ko-KR"), options).then((res) =>
    res.json()
  );

export const movieDatail = (id) =>
  fetch(url(`movie/${id}?language=ko-KR`), options).then((res) => res.json());
=======
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
