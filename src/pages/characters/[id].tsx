import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getCharacter } from "../../redux/characters/actions";
import { useSetHeadTitle } from "../../hooks/useSetHeadTitle";
import Loading from "../../components/Loading";
import StarRating from "react-star-rating-component";
import Review from "../../components/Review/Review";
import { addReview } from "../../redux/characters/reducer";
// import styles from "../../styles/Layout.module.css";

const Character: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { selectedCharacter: character, isLoading } = useAppSelector(
    (state) => state.charactersData
  );
  useSetHeadTitle(`Star wars - ${character ? character.name : ""}`);

  useEffect(() => {
    if (router.query.id) {
      dispatch(getCharacter(String(router.query.id)));
    }
  }, [router.query.id]);

  if (isLoading) {
    <Loading />;
  }

  return (
    <>
      {character && (
        <div>
          <h3>Aktor: {character.name}</h3>
          <p>Urodzony: {character.birth_year}</p>
          <p>Wzrost: {character.height}</p>
          <p>Waga: {character.mass}</p>
          <h3>Filmy</h3>
          <ul>
            {character.films.map((film) => {
              return (
                <li key={film}>
                  <a href={film} target="_blank">
                    {film}
                  </a>
                </li>
              );
            })}
          </ul>
          <Review
            reviews={character.reviews}
            onSubmitReview={(values) => dispatch(addReview(values))}
          />
        </div>
      )}
    </>
  );
};

export default Character;
