import { produce } from "immer";
import type { Signal } from "@preact/signals-react";
import type { TCallStatus } from "@/types/web-rtc";
import { mediaConstraints } from "./media-constraints";

export function prepareForCall(
    localStream: Signal<MediaStream>,
    callStatus: Signal<TCallStatus>
): void {
    try {
        navigator.mediaDevices.getUserMedia(mediaConstraints).then((stream) => {
            localStream.value = stream;
            callStatus.value = produce(callStatus.value, (draft) => {
                draft.haveMedia = true;
            });
        });
    } catch (error) {
        console.error(error);
    }
}
