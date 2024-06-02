import { useState } from "react";
import "./App.css";

function App() {

  const [botao, setBotao] = useState(false);

  return (
   <>
   {botao ?  <div className="love-letter-container">
      <div className="love-letter">
        <div className="love-header">
          <h1>Oi wanessa</h1>
        </div>
        <div className="love-body">
          <p>
            gosto muito de estar com você
          </p>
          <p>
          </p>
        </div>
        <div className="love-footer">
          <p>Volta logo pra fortal</p>
          <p>guilherme</p>
        </div>
      </div>
    </div> : (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw"
      }}>
        <button onClick={() => setBotao(true)}>
          Abrir Carta
        </button>
      </div>
    )}
   </>
  );
}

export default App;
