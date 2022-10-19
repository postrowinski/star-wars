import type { NextPage } from "next";
import Link from "next/link";
import { useSetHeadTitle } from "../hooks/useSetHeadTitle";
import styles from "../styles/Layout.module.css";

const Home: NextPage = () => {
  useSetHeadTitle("Star wars");
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/movies">Filmy</Link>
        </li>
        <li>
          <Link href="/characters">Postacie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
