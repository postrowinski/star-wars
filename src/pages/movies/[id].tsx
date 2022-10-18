import { useFormik } from "formik";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getMovie } from "../../redux/movies/actions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Review } from "../../types";
import StarRating from 'react-star-rating-component';
// import styles from "../../styles/Layout.module.css";

const Movie: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {selectedMovie: movie, isLoading} = useAppSelector((state) => state.moviesData);
  const formik = useFormik<Review>({
    initialValues: {
      content: '',
      userName: '',
      rating: 0,
    }, 
    onSubmit
  });

  useEffect(() => {
    if (router.query.id) {
      dispatch(getMovie(String(router.query.id)));
    }
  }, [router.query.id]);

  function onSubmit(values: Review) {
    console.log(values);
    formik.resetForm();
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {movie &&
        <div>
          <h3>Film: {movie.title}</h3>
          <p>{movie.opening_crawl}</p>
          <ul>
            {movie.characters.map((character) => {
              // TODO: dodaj listę postaci z linkami do strony o niej
              return (
                <li key={character}><a href={character} target="_blank"> {character}</a></li>
              )
            })}
          </ul>

          <h3>Recenzje</h3>
          <ul>
            {movie.reviews.map((review) => {
              return (
                <li>{review.content}</li>
              )
            })}
            {/**
             * TODO: dodaj listę recenzji dla zasobu, recenzje powinny być zapisane w stanie aplikacji
             */}
          </ul>
          <form onSubmit={formik.handleSubmit}>
            <textarea 
              name={'content' as keyof Review}
              value={formik.values.content}
              onChange={formik.handleChange}
            />
            <input 
              type="text" 
              name={'userName' as keyof Review} 
              value={formik.values.userName}
              onChange={formik.handleChange} 
            />
            <StarRating
              name={"rating" as keyof Review}
              starCount={5}
              value={formik.values.rating}
              onStarClick={(value: number) => formik.setFieldValue('rating', value)}
            />
            {/**
             * TODO: zaimplementuj formularz dodawania recenzji
             */}
             <button type="submit">Submit</button>
          </form>
        </div>
      }
    </>
  );
};

export default Movie;
