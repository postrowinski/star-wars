import type { NextPage } from "next";
import Link from "next/link";
import { getUrlID } from "../../actions";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { getCharacters } from "../../redux/characters/actions";
import { routes } from "../../routes/routes";
import { useSetHeadTitle } from "../../hooks/useSetHeadTitle";
import Loading from "../../components/Loading";

const Characters: NextPage = () => {
  useSetHeadTitle("Star wars - characters");
  const dispatch = useAppDispatch();
  const { characters, isLoading } = useAppSelector(
    (state) => state.charactersData
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <h2>Postacie</h2>
      <ul>
        {characters &&
          characters.map((character) => {
            return (
              <li key={character.url}>
                <Link href={`${routes.characters}/${getUrlID(character.url)}`}>
                  {character.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Characters;
