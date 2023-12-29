async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzFhYzM1MWE5ZGY5NDBkMGJlYWEwMTJiNzNmZDQ4MCIsInN1YiI6IjYzNWYzOTg1NDFlZWUxMDA5MTE3YjBkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sTkiGonoxaEJ_F-kqvVf-BBDefK3353Lr6IGGZuD9U8",
    },
  };

  const response = fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export default async function getMovies() {
  const data = await getData();
  return data;
}
