import { Card, Search } from "../../components";
import NoteForm from "../../components/NoteForm";
import { INote } from "../../types/notes.type";
import styles from "./NotesPage.module.scss";
import { useState, useEffect } from "react";
import api from "../../services/api";

function NotesPage() {
  const [notes, setNotes] = useState<INote[]>([]);
  const favoriteNotes = notes.filter((note) => note.isFavorite);
  const otherNotes = notes.filter((note) => !note.isFavorite);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get("/notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Erro ao buscar notas:", error);
      }
    };

    fetchNotes();
  }, []);
  const handleNoteUpdate = async (
    noteId: number,
    updatedData: Partial<INote>
  ) => {
    try {
      await api.patch(`/notes/${noteId}`, updatedData);

      setNotes((currentNotes) =>
        currentNotes.map((note) => {
          if (note.id === noteId) {
            return { ...note, ...updatedData };
          }
          return note;
        })
      );
    } catch (error) {
      console.error("Erro ao atualizar a nota:", error);
      alert("Não foi possível atualizar a nota.");
    }
  };

  const handleNoteAdd = async (noteData: {
    title: string;
    content: string;
    isFavorite: boolean;
  }) => {
    try {
      const response = await api.post("/notes", noteData);

      const newNoteFromApi = response.data;

      setNotes((currentNotes) => [newNoteFromApi, ...currentNotes]);
    } catch (error) {
      alert("Não foi possível criar a nota. Tente novamente.");
    }
  };
  const handleNoteDelete = async (noteIdToDelete: number) => {
    try {
      await api.delete(`/notes/${noteIdToDelete}`);

      setNotes((currentNotes) =>
        currentNotes.filter((note) => note.id !== noteIdToDelete)
      );
    } catch (error) {
      alert("Não foi possível deletar a nota.");
    }
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
