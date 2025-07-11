import { FaRegStar, FaStar } from "react-icons/fa";
import styles from "./NoteForm.module.scss";
import { useEffect, useState } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isFavorite, setIsFavorite] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [titleWasEdited, setTitleWasEdited] = useState(false);
  const [contentWasEdited, setContentWasEdited] = useState(false);

  const createNote = () => {
    const cleanTitle = title.trim();
    const cleanContent = content.trim();

    if (!cleanTitle || !cleanContent) return;

    const note = {
      title: cleanTitle,
      content: cleanContent,
      favorite: isFavorite,
      createdAt: new Date().toISOString(),
    };

    console.log("Nota criada:", note);

    setTitle("");
    setContent("");
    setIsFavorite(false);
    setTitleWasEdited(false);
    setContentWasEdited(false);
  };

  useEffect(() => {
    const finishedEditing = !isEditingTitle && !isEditingContent;
    const hasBeenEdited = titleWasEdited || contentWasEdited;

    if (finishedEditing && hasBeenEdited) {
      createNote();
    }
  }, [isEditingTitle, isEditingContent, titleWasEdited, contentWasEdited]);

  return (
    <div className={styles.NoteForm}>
      <div className={styles.NoteForm__titleArea}>
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            placeholder="Título"
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleWasEdited(true);
            }}
            onBlur={() => setIsEditingTitle(false)}
            autoFocus
          />
        ) : (
          <h2 onClick={() => setIsEditingTitle(true)}>{title || "Título"}</h2>
        )}
        <button onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? <FaStar size={22} /> : <FaRegStar size={22} />}
        </button>
      </div>
      <div
        className={styles.NoteForm__content}
        onClick={() => setIsEditingContent(true)}
      >
        <textarea
          value={content}
          placeholder="Criar nota..."
          onChange={(e) => {
            setContent(e.target.value);
            setContentWasEdited(true);
          }}
          onBlur={() => setIsEditingContent(false)}
          autoFocus
        />
      </div>
    </div>
  );
}

export default NoteForm;
