import React from "react";
import styles from "./error.module.scss";

interface Props {
  error?: string;
}

const Error: React.FC<Props> = ({ error }) => {
  return <>{error && <div className={styles.error}>{error}</div>}</>;
};

export default Error;
