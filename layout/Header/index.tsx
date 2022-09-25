import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Header.module.css";

type Props = {
  logoName: string;
  routes: {
    name: string;
    path: string;
  }[];
};

const Header = ({ logoName, routes }: Props) => {
  const { pathname } = useRouter();

  return (
    <div className={styles.header}>
      <span className={styles.logo}>
        <h1>{logoName}</h1>
      </span>
      <nav>
        <ul>
          {routes?.map((route, index) => (
            <li
              key={index}
              className={pathname === route.path ? styles.active : ""}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
