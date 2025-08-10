import { React, useState, useEffect } from "react";
import styles from "./index.module.css";

import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getTopSearchedMovies = async(url) => {
    const data = await (await fetch(url)).json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
    getTopSearchedMovies(searchWithQueryUrl);
  }, [query]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resultados para: <span className={styles.queryText}>{query}</span></h2>
      <div className={styles.moviesContainer}>
        {movies.lenght === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    </div>
  )
}

export default Search;