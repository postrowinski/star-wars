import React from "react";
import NextHead from "next/head";
import { useAppSelector } from "../../redux/store";

const Head: React.FC<{}> = () => {
  const { headTitle } = useAppSelector((state) => state.commonData);
  return (
    <NextHead>
      <title>{headTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  );
};

export default Head;
