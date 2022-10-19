import { useFormik } from "formik";
import React from "react";
import StarRating from "react-star-rating-component";
import { Review as IReview } from "../../types";
import * as Yup from "yup";
import Error from "../Error";

interface Props {
  onSubmitReview: (values: IReview) => void;
  reviews: IReview[];
}

const Review: React.FC<Props> = ({ onSubmitReview, reviews }) => {
  const formik = useFormik<IReview>({
    initialValues: {
      content: "",
      userName: "",
      rating: 0,
    },
    validateOnChange: false,
    // Jak znajde czas do dodam internacjonalizację
    validationSchema: Yup.object().shape({
      content: Yup.string()
        .nullable()
        .required("Pole je wymagane")
        .min(40, "Wpisz minimum 40 znaków"),
      userName: Yup.string().nullable().required("Pole je wymagane"),
    }),
    onSubmit,
  });

  function onSubmit(values: IReview): void {
    onSubmitReview(values);
    formik.resetForm();
  }

  return (
    <>
      <h3>Recenzje</h3>
      <ul>
        {reviews
          .map((review, index) => {
            return (
              <li key={index}>
                <div>{review.content}</div>
                <div>{review.userName}</div>
                <div>
                  <StarRating
                    name={`ratedReview-${index}`}
                    value={review.rating}
                    editing={false}
                  />
                </div>
              </li>
            );
          })
          .reverse()}
      </ul>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Recenzja
          <textarea
            name={"content" as keyof IReview}
            value={formik.values.content}
            onChange={formik.handleChange}
          />
        </label>
        <Error error={formik.errors.content} />
        <label>
          Nazwa użytkownika
          <input
            type="text"
            name={"userName" as keyof IReview}
            value={formik.values.userName}
            onChange={formik.handleChange}
          />
        </label>
        <Error error={formik.errors.userName} />
        <StarRating
          name={"rating" as keyof IReview}
          starCount={5}
          value={formik.values.rating}
          onStarClick={(value: number) => formik.setFieldValue("rating", value)}
        />
        <button type="submit">Wyślij rezenzję</button>
      </form>
    </>
  );
};

export default Review;
