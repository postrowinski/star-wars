import "../styles/globals.css";
import type { AppProps } from "next/app";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import styles from "../styles/Layout.module.css";
import { routes } from "../routes/routes";
import Head from "../components/Head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Provider store={store}>
      <Head />
      <div className={styles.container}>
        <Breadcrumbs />
        <Component {...pageProps} />
        {path !== routes.home && <button onClick={router.back}>Pawrót</button>}
      </div>
    </Provider>
  );
}

export default MyApp;
