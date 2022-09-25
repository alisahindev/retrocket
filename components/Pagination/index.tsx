import React from "react";
import styles from "./Pagination.module.css";

type IPagination = {
  setPage: (Page: number) => void;
  selectedPage?: number;
  loading?: boolean;
};

const Pagination = ({ setPage, selectedPage, loading }: IPagination) => {
  return (
    <div className={styles.pagination}>
      {[1, 2, 3].map((item, index) => {
        return !loading ? (
          <button
            className={`${styles.button} ${
              selectedPage === item ? styles.selected : ""
            }`}
            key={index}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ) : (
          <span>Loading...</span>
        );
      })}
    </div>
  );
};

export default Pagination;
