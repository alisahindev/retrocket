import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

type ICard = {
  title: string;
  img: string;
  author?: string;
  onClick?: () => void;
  content?: string;
  publish?: string;
};

const Card = ({ title, img, author, onClick, content, publish }: ICard) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {img && (
        <Image
          src={img}
          alt={title}
          width={600}
          height={400}
          objectFit='cover'
          priority
          onClick={onClick}
        />
      )}
      {content && <p className={styles.content}>{content}</p>}
      <div className={styles.footer}>
        <strong className={styles.author}>{author}</strong>
        <span className={styles.publish}>{publish}</span>
      </div>
    </div>
  );
};

export default Card;
