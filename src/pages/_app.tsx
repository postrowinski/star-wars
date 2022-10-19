import type { AppProps } from "next/app";
import Breadcrumbs from "../components/Breadcrumbs";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { routes } from "../routes/routes";
import Head from "../components/Head";
import { useRouter } from "next/router";
import { Button } from "antd";
import "antd/dist/antd.css";
import "../styles/globals.scss";
import styles from "../styles/Layout.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Provider store={store}>
      <Head />
      <div className={styles.container}>
        <Breadcrumbs />
        <Component {...pageProps} />
        {path !== routes.home && <Button onClick={router.back}>Pawrót</Button>}
      </div>
    </Provider>
  );
}

export default MyApp;
