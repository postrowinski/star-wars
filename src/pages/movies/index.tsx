import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/Layout.module.css";
import { getUrlID } from "../../actions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getMovies } from "../../redux/movies/actions";

const Movies: NextPage = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.moviesData);
  
  useEffect(() => {
    dispatch(getMovies());
  }, [])
  
  return (
    <div className={styles.container}>
      <h3>Filmy</h3>
      <ul>
        {movies &&
          movies.map((movie) => {
            return (
              <li key={movie.episode_id}>
                <Link href={`/movies/${getUrlID(movie.url)}`}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
