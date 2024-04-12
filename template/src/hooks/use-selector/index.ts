import { useSelector as useReduxSelector } from "react-redux";
import type { RootState } from "@/redux/types";

export function useSelector(callbackFn: (state: RootState) => void) {
    return () => useReduxSelector(callbackFn);
}
