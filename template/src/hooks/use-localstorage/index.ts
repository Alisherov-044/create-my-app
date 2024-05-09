import { useEffect, useMemo, useState } from "react";
import type { UseLocalstorageResponse } from "@/types/hooks";

export function useLocalstorage<T>(
    key: string,
    defaultValue: T
): UseLocalstorageResponse<T> {
    const current = useMemo(() => {
        return JSON.parse(
            localStorage.getItem(key) ?? JSON.stringify(defaultValue)
        );
    }, [key, defaultValue]);

    const [state, setState] = useState<T>(current);

    useEffect(() => {
        setState(current);
    }, [state]);

    return [state, setState];
}
