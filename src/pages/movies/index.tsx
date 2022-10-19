import type { NextPage } from "next";
import Link from "next/link";
import { getUrlID } from "../../actions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getMovies } from "../../redux/movies/actions";
import { routes } from "../../routes/routes";
import { useSetHeadTitle } from "../../hooks/useSetHeadTitle";
import Loading from "../../components/Loading";

const Movies: NextPage = () => {
  useSetHeadTitle("Star wars - movies");
  const dispatch = useAppDispatch();
  const { movies, isLoading } = useAppSelector((state) => state.moviesData);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <h3>Filmy</h3>
      <ul>
        {movies &&
          movies.map((movie) => {
            return (
              <li key={movie.episode_id}>
                <Link href={`${routes.movies}/${getUrlID(movie.url)}`}>
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
