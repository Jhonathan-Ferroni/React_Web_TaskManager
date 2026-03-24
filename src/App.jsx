import { useState } from "react";

function App() {
  // State(Estado) - reações para usuário
  const [message, setMessage] = useState("Olá mundo");
  //Cada return só pode ter uma div
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, fui clicado");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
