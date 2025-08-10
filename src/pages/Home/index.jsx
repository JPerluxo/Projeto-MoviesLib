import { React, useState, useEffect } from "react";
import styles from "./index.module.css";

import MovieCard from "../../components/MovieCard";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async(url) => {
    const data = await (await fetch(url)).json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Melhores filmes:</h2>
      <div className={styles.moviesContainer}>
        {topMovies.lenght === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    </div>
  )
}

export default Home;