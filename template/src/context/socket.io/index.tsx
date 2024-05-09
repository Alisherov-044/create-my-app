import type { TProvider } from "@/types";
import { initialState, socket } from "./initial";
import { createContext, memo, useCallback, useContext } from "react";

const socketContext = createContext(initialState);

export const useSocket = () => useCallback(() => useContext(socketContext), []);

export const SocketProvider = memo(function SocketProvider({
    children,
}: TProvider) {
    return (
        <socketContext.Provider value={{ socket: socket.value }}>
            {children}
        </socketContext.Provider>
    );
});
