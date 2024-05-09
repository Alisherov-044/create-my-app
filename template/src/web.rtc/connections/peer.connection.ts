import type { Socket } from "socket.io-client";
import { stunServers, socketConnection } from "@/web.rtc";
import type { CreatePeerConnectionResponse } from "@/types/web-rtc";

export function createPeerConnection(
    username: string
): CreatePeerConnectionResponse | undefined {
    const socket: Socket = socketConnection();

    try {
        const peerConnection: RTCPeerConnection = new RTCPeerConnection(
            stunServers
        );
        const remoteStream: MediaStream = new MediaStream();

        peerConnection.addEventListener("signalingstatechange", (e) => {
            console.log("== signalingstatechange ==");
            console.log(e);
            console.log("== signalingstatechange ==");
        });

        peerConnection.addEventListener("icecandidate", (e) => {
            console.log("== icecandidate ==");
            console.log(e);
            console.log("== icecandidate ==");

            socket.emit("candidate", {
                from: username,
                to: "all",
                type: "candidate",
                candidate: e.candidate,
            });
        });

        peerConnection.addEventListener("track", (e) => {
            console.log("== track ==");
            console.log(e);
            console.log("== track ==");

            if (e.streams[0]) {
                e.streams[0].getTracks().forEach((track) => {
                    remoteStream.addTrack(track);
                });
            }
        });

        return {
            peerConnection,
            remoteStream,
        };
    } catch (error) {
        console.error(error);
    }
}
