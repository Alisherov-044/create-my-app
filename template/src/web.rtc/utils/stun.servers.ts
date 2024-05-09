import type { TStunServers } from "@/types/web-rtc";

export const stunServers: TStunServers = {
    iceServers: [
        {
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:stun1.l.google.com:19302",
            ],
        },
    ],
};
