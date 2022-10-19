import { useFormik } from "formik";
import React from "react";
import { Input, Row, Col, Button, Rate } from "antd";
import { Review as IReview } from "../../types";
import * as Yup from "yup";
import Error from "../Error";
import styles from "./Review.module.scss";

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
      <h2>Recenzje</h2>
      <ul className={styles.ul}>
        {reviews
          .map((review, index) => {
            return (
              <li className={styles.li} key={index}>
                <div className={styles.content}>"{review.content}"</div>
                <Row justify="space-between" align="middle">
                  <Col>{review.userName}</Col>
                  <Col>
                    <Rate value={review.rating} disabled />
                  </Col>
                </Row>
              </li>
            );
          })
          .reverse()}
      </ul>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Recenzja:
          <Input.TextArea
            name={"content" as keyof IReview}
            value={formik.values.content}
            onChange={formik.handleChange}
            placeholder={"Recenzja"}
            rows={6}
          />
        </label>
        <Error error={formik.errors.content} />
        <Row style={{ marginBottom: 30 }} gutter={32} align="middle">
          <Col span={8}>
            <label>
              Nazwa użytkownika:
              <Input
                type="text"
                name={"userName" as keyof IReview}
                value={formik.values.userName}
                onChange={formik.handleChange}
                placeholder={"Nazwa użytkownika"}
              />
            </label>
            <Error error={formik.errors.userName} />
          </Col>
          <Col span={8}>
            <label>Rating:</label>
            <div>
              <Rate
                value={formik.values.rating}
                onChange={(value) => formik.setFieldValue("rating", value)}
              />
            </div>
          </Col>
          <Col span={8}>
            <Button className="button" htmlType="submit" type="primary">
              Wyślij rezenzję
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default Review;
