import React from "react";
import styles from "./Pagination.module.css";

type IPagination = {
  setPage: (Page: number) => void;
  selectedPage?: number;
  loading?: boolean;
  pageCount?: number;
};

const Pagination = ({
  setPage,
  selectedPage,
  loading,
  pageCount,
}: IPagination) => {
  return (
    <div className={styles.pagination}>
      {[...Array(pageCount)].map((_, index) => {
        return !loading ? (
          <button
            className={`${styles.button} ${
              selectedPage === index + 1 ? styles.selected : ""
            }`}
            key={index + 1}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ) : (
          <span>Loading...</span>
        );
      })}
    </div>
  );
};

export default Pagination;
