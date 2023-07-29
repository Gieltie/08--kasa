import React from "react";
import "./App.scss";
function App() {
  return (
    <div className="wrapper">
      <h1>Test des boutons react app</h1>
      <header className="wrapper__btns">
        <button className="bleu">Bouton Bleu</button>
        <button className="red">Bouton Rouge</button>
        <button className="green">Bouton Vert</button>
      </header>
    </div>
  );
}
export default App;
