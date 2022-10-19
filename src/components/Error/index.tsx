import React from "react";
import _ from "lodash";
import styles from "../../styles/Layout.module.css";

interface Props {
  error?: string;
}

const Error: React.FC<Props> = ({ error }) => {
  return <>{!_.isNil(error) && <div className={styles.error}>{error}</div>}</>;
};

export default Error;
