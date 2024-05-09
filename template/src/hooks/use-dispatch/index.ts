import type { UseDispatchResponse } from "@/types/hooks";
import { useDispatch as useReduxDispatch } from "react-redux";

export function useDispatch(): UseDispatchResponse {
    return useReduxDispatch();
}
