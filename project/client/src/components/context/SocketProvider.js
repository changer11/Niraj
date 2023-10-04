import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";
const SocketContext = createContext(null);
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
export function SocketProvider(probs) {
  const socket = useMemo(() =>io("localhost:9000"), []);
  return (
    <SocketContext.Provider value={socket}>
      {probs.children}
    </SocketContext.Provider>
  );
}
