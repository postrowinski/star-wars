import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getMovie } from "../../redux/movies/actions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addReview } from "../../redux/movies/reducer";
import { useSetHeadTitle } from "../../hooks/useSetHeadTitle";
import Loading from "../../components/Loading";
import Review from "../../components/Review/Review";

const Movie: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { selectedMovie: movie, isLoading } = useAppSelector(
    (state) => state.moviesData
  );
  useSetHeadTitle(`Star wars - ${movie ? movie.title : ""}`);

  useEffect(() => {
    if (router.query.id) {
      dispatch(getMovie(String(router.query.id)));
    }
  }, [router.query.id]);

  if (isLoading) {
    <Loading />;
  }

  return (
    <>
      {movie && (
        <div>
          <h2>Film: {movie.title}</h2>
          <p>{movie.opening_crawl}</p>
          <ul>
            {movie.characters.map((character) => {
              return (
                <li key={character}>
                  <a href={character} target="_blank">
                    {character}
                  </a>
                </li>
              );
            })}
          </ul>
          <Review
            reviews={movie.reviews}
            onSubmitReview={(values) => dispatch(addReview(values))}
          />
        </div>
      )}
    </>
  );
};

export default Movie;
