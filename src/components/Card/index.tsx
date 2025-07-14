import React, { useState } from "react";
import styles from "./Card.module.scss";
import { FaFillDrip, FaRegStar, FaSave, FaStar } from "react-icons/fa";
import { FiEdit2, FiX } from "react-icons/fi";
import ColorPalette from "../ColorPalette";

interface ICard {
  title: string;
  content: string;
  backgroundCard?: string;
  isFavorite?: boolean;
  onUpdate: (updatedData: {
    title?: string;
    content?: string;
    isFavorite?: boolean;
    color?: string;
  }) => void;
  onDelete: () => void;
}

const Card = ({
  title,
  content,
  backgroundCard,
  isFavorite,
  onUpdate,
  onDelete,
}: ICard) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const toggleFavorite = () => {
    onUpdate({ isFavorite: !isFavorite });
  };

  const togglePalette = () => {
    setIsPaletteOpen(!isPaletteOpen);
  };
  const handleColorSelect = (color: string) => {
    onUpdate({ color: color });
    setIsPaletteOpen(false);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    console.log("Salvando:", { title: editedTitle, content: editedContent });
    onUpdate({ title: editedTitle, content: editedContent as string });

    setIsEditing(false);
  };
  return (
    <div className={styles.Card} style={{ backgroundColor: backgroundCard }}>
      <div className={styles.Card__titleArea}>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          <h2>{editedTitle}</h2>
        )}
        <button onClick={toggleFavorite}>
          {isFavorite ? (
            <FaStar size={22} style={{ color: "#FFA000" }} />
          ) : (
            <FaRegStar size={22} />
          )}
        </button>
      </div>

      <div className={styles.Card__content}>
        {" "}
        {isEditing ? (
          <textarea
            value={editedContent as string}
            onChange={(e) => setEditedContent(e.target.value)}
            className={styles.editTextarea}
          />
        ) : (
          <div>
            <p>{editedContent}</p>
          </div>
        )}
      </div>
      <div className={styles.Card__footer}>
        <div className={styles.Card__footerRight}>
          <button onClick={isEditing ? handleSaveChanges : toggleEditMode}>
            {isEditing ? <FaSave size={22} /> : <FiEdit2 size={22} />}
          </button>
          <button onClick={togglePalette}>
            <FaFillDrip size={22} />
          </button>
        </div>
        <div>
          <FiX size={22} onClick={onDelete} />
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
