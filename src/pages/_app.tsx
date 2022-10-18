import "../styles/globals.css";
import type { AppProps } from "next/app";
import Breadcrumbs from "../components/Breadcrumbs";
import Head from "next/head";
import Link from "next/link";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import styles from "../styles/Layout.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>
          Zadanie testowe -
          {/**
           * TODO: Dodaj tytuł aktualnej strony
           */}
        </title>
      </Head>
      <div className={styles.container}>
      <Breadcrumbs />
      <Component {...pageProps} />

      {/**
       * TODO: powrót do poprzedniej strony jeśli nie jesteśmy aktualnie na stronie głównej
       */}
      <Link href="/">Powrót</Link>
      </div>
    </Provider>
  );
}

export default MyApp;
