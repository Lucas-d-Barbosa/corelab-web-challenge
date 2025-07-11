import React from "react";
import Card from "./components/Card/index";
import NoteForm from "./components/NoteForm/index";
function App() {
  return (
    <div>
      <NoteForm />
      <Card
        title={"Title"}
        children={
          <p>Clique ou arraste o arquivo para esta área para fazer upload</p>
        }
      />
    </div>
  );
}
export default App;
