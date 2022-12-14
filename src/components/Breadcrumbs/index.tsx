import React from "react";
import Link from "next/link";
import { routes } from "../../routes/routes";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const paths = router.asPath.split("/").filter((x) => x);

  return (
    <ul className={styles.breadcrumbs}>
      <li>
        <Link href={routes.home}>Strona główna</Link>
      </li>
      {paths.map((name, index) => {
        const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;
        return (
          <li key={index}>
            {isLast ? (
              name
            ) : (
              <Link key={name} href={routeTo}>
                {name}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
