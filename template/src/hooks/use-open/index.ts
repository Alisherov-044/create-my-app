import { useCallback, useState } from "react";
import type { UseOpenResponse } from "@/types/hooks";

export function useOpen(defaultValue: boolean = false): UseOpenResponse {
    const [isOpen, setIsOpen] = useState<boolean>(defaultValue);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    return { isOpen, open, close, toggle };
}
