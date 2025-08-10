import { React, useState, useEffect } from "react";
import styles from "./index.module.css";

import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import MovieCard from "../../components/MovieCard";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async(url) => {
    const data = await (await fetch(url)).json();
    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-us", {
      style: "currency",
      currency: "USD"
    });
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [])

  return (
    <div className={styles.moviePage}>
      {movie && <>
        <MovieCard movie={movie} showLink={false}/>
        <p className={styles.tagline}>{movie.tagline}</p>
        <div className={styles.info}>
          <h3><BsWallet2/> Orçamento:</h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className={styles.info}>
          <h3><BsGraphUp/> Faturamento:</h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className={styles.info}>
          <h3><BsHourglassSplit/> Duração:</h3>
          <p>{movie.runtime} minutos</p>
        </div>
        <div className={`${styles.info} ${styles.description}`}>
          <h3><BsFillFileEarmarkTextFill/> Descrição:</h3>
          <p>{movie.overview}</p>
        </div>
      </>}
    </div>
  )
}

export default Movie;