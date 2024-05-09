import type { UseOpenResponse } from "@/types/hooks";
import { useCallback, useMemo, useState } from "react";

export function useOpen(defaultValue: boolean = false): UseOpenResponse {
    const [isOpen, setIsOpen] = useMemo(() => {
        return useState<boolean>(defaultValue);
    }, [defaultValue]);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    return { isOpen, open, close, toggle };
}
