import { Card } from "../../components";
import NoteForm from "../../components/NoteForm";
import styles from "./NotesPage.module.scss";
function NotesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.container__header}>
        <div className={styles.logoArea}>
          <img src="./logo.png" alt="Logo" />
          <h2>CoreNotes</h2>
        </div>
      </header>
      <div className={styles.container__content}>
        <NoteForm />
        <div className={styles.notesAreas}>
          <h3>Favoritas</h3>
          <div className={styles.notesList}>
            <Card
              title={"Title"}
              children={
                <p>
                  Clique ou arraste o arquivo para esta área para fazer upload
                </p>
              }
            />
            <Card
              title={"Title"}
              children={
                <p>
                  Clique ou arraste o arquivo para esta área para fazer upload
                </p>
              }
            />
          </div>
        </div>
        <div className={styles.notesAreas}>
          <h3>Outras</h3>
          <div className={styles.notesList}>
            <Card
              title={"Title"}
              children={
                <p>
                  Clique ou arraste o arquivo para esta área para fazer upload
                </p>
              }
            />
            <Card
              title={"Title"}
              children={
                <p>
                  Clique ou arraste o arquivo para esta área para fazer upload
                </p>
              }
            />
            <Card
              title={"Title"}
              children={
                <p>
                  Clique ou arraste o arquivo para esta área para fazer upload
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesPage;
