import { socketUrl } from "@/constants/urls";
import { signal } from "@preact/signals-react";
import type { TSocket } from "@/types/context";
import { type Socket, io } from "socket.io-client";

export const socket = signal<Socket>(io(socketUrl));

export const initialState: TSocket = {
    socket: socket.value,
};
