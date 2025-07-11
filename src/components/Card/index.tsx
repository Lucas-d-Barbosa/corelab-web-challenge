import React, { ReactNode } from "react";
import styles from "./Card.module.scss";
import { FaFillDrip, FaRegStar } from "react-icons/fa";
import { FiEdit2, FiX } from "react-icons/fi";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = (props: ICard) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__titleArea}>
        <h2>{props.title}</h2>
        <button>
          <FaRegStar size={22} />
        </button>
      </div>

      <div className={styles.Card__content}>{props.children}</div>
      <div className={styles.Card__footer}>
        <div className={styles.Card__footerRight}>
          <FiEdit2 size={22} />
          <FaFillDrip size={22} />
        </div>
        <div>
          <FiX size={22} />
        </div>
      </div>
    </div>
  );
};

export default Card;
