import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="love-letter-container">
      <div className="love-letter">
        <div className="love-header">
          <h1>Oi</h1>
        </div>
        <div className="love-body">
          <p>
            Ei, que história é essa de não querer voltar mais? como a gente vai assistir
            strange things juntim???
            Te esperando aqui, volte logo.
          </p>
          <p>
          </p>
        </div>
        <div className="love-footer">
          <p>Volta logo pra fortal</p>
          <p>guilherme</p>
        </div>
      </div>
    </div>
  );
}

export default App;
