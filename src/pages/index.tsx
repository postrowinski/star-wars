import type { NextPage } from "next";
import Link from "next/link";
import { useSetHeadTitle } from "../hooks/useSetHeadTitle";
import { routes } from "../routes/routes";

const Home: NextPage = () => {
  useSetHeadTitle("Star wars");
  return (
    <div>
      <ul>
        <li>
          <Link href={routes.movies}>Filmy</Link>
        </li>
        <li>
          <Link href={routes.characters}>Postacie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
