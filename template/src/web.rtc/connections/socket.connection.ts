import { socketUrl } from "@/constants/urls";
import { type Socket, io } from "socket.io-client";

let socket: Socket;
export function socketConnection(): Socket {
    if (typeof socket !== "undefined") {
        return socket;
    } else {
        return (socket = io(socketUrl));
    }
}
