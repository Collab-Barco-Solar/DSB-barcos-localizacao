import { createContext, useEffect, useState } from "react";
import socket from "../services/socketio";

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {

  const [positions, setPositions] = useState([]);  

  // Esse useEffect carrega as funcoes de socket e atualiza os dados quando chega uma nova mensagem
  useEffect(() => {
    socket.on('positions', (positions) => {
      setPositions(positions);
    });
  }, [])

 
  return (
    <GlobalContext.Provider
      value={{
        positions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}