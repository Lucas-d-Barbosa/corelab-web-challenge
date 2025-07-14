import { Card, Search } from "../../components";
import NoteForm from "../../components/NoteForm";
import { initialNotes } from "../../data/mockNotes";
import { INote } from "../../types/notes.type";
import styles from "./NotesPage.module.scss";
import { useState } from "react";

function NotesPage() {
  const [notes, setNotes] = useState<INote[]>(initialNotes);
  const favoriteNotes = notes.filter((note) => note.isFavorite);
  const otherNotes = notes.filter((note) => !note.isFavorite);
  const handleNoteUpdate = (noteId: number, updatedData: Partial<INote>) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) => {
        if (note.id === noteId) {
          return { ...note, ...updatedData };
        }
        return note;
      })
    );
  };
  const handleNoteAdd = (noteData: {
    title: string;
    content: string;
    isFavorite: boolean;
  }) => {
    const newNote: INote = {
      id: Date.now(),
      title: noteData.title,
      content: noteData.content,
      isFavorite: noteData.isFavorite,
      color: "#FFFFFF",
    };

    setNotes((currentNotes) => [newNote, ...currentNotes]);
  };
  const handleNoteDelete = (noteIdToDelete: number) => {
    setNotes((currentNotes) =>
      currentNotes.filter((note) => note.id !== noteIdToDelete)
    );
    console.log(`Nota com ID ${noteIdToDelete} deletada.`);
  };
  return (
    <div className={styles.container}>
      <header className={styles.container__header}>
        <div className={styles.logoArea}>
          <img src="./logo.png" alt="Logo" />
          <h2>CoreNotes</h2>
        </div>
        <div className={styles.search}>
          <Search
            placeholder={"Pesquisar notas"}
            value={""}
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </header>
      <div className={styles.container__content}>
        <NoteForm onNoteAdd={handleNoteAdd} />
        <div className={styles.notesAreas}>
          <h3>Favoritas</h3>
          <div className={styles.notesList}>
            {favoriteNotes.map((note: INote) => (
              <Card
                key={note.id}
                title={note.title}
                isFavorite={note.isFavorite}
                backgroundCard={note.color}
                content={note.content}
                onUpdate={(updatedData) =>
                  handleNoteUpdate(note.id, updatedData)
                }
                onDelete={() => handleNoteDelete(note.id)}
              />
            ))}
          </div>
        </div>
        <div className={styles.notesAreas}>
          <h3>Outras</h3>
          <div className={styles.notesList}>
            {otherNotes.map((note) => (
              <Card
                key={note.id}
                title={note.title}
                isFavorite={note.isFavorite}
                backgroundCard={note.color}
                content={note.content}
                onUpdate={(updatedData) =>
                  handleNoteUpdate(note.id, updatedData)
                }
                onDelete={() => handleNoteDelete(note.id)}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesPage;
