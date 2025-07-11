import React from "react";
import Card from "./components/Card/index.tsx";
function App() {
  return (
    <div>
      <h1>
        <Card
          title={"Title"}
          children={
            <p>Clique ou arraste o arquivo para esta área para fazer upload</p>
          }
        />
      </h1>
    </div>
  );
}
export default App;
