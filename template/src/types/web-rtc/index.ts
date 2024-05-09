export type TStunServers = {
    iceServers: {
        urls: string[];
    }[];
};

export type TCallStatus = {
    haveMedia: boolean;
    videoEnabled: boolean | null;
    audioEnabled: boolean;
};

export type CreatePeerConnectionResponse = {
    peerConnection: RTCPeerConnection;
    remoteStream: MediaStream;
};
