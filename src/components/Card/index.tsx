import React, { ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import { FaFillDrip, FaRegStar } from "react-icons/fa";
import { FiEdit2, FiX } from "react-icons/fi";
import ColorPalette from "../ColorPalette";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = (props: ICard) => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [cardColor, setCardColor] = useState("#FFFFFF");
  const togglePalette = () => {
    setIsPaletteOpen(!isPaletteOpen);
  };
  const handleColorSelect = (color: string) => {
    setCardColor(color);
    setIsPaletteOpen(false);
  };
  return (
    <div className={styles.Card} style={{ backgroundColor: cardColor }}>
      <div className={styles.Card__titleArea}>
        <h2>{props.title}</h2>
        <button>
          <FaRegStar size={22} />
        </button>
      </div>

      <div className={styles.Card__content}>{props.children}</div>
      <div className={styles.Card__footer}>
        <div className={styles.Card__footerRight}>
          <button>
            <FiEdit2 size={22} />
          </button>
          <button onClick={togglePalette}>
            <FaFillDrip size={22} />
          </button>
        </div>
        <div>
          <FiX size={22} />
        </div>
      </div>
      {isPaletteOpen && (
        <div className={styles.paletteContainer}>
          <ColorPalette onColorSelect={handleColorSelect} />
        </div>
      )}
    </div>
  );
};

export default Card;
