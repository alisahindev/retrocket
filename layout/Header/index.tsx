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
      <Link href={"/"}>
        <h1 className={styles.logo}>{logoName}</h1>
      </Link>
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
