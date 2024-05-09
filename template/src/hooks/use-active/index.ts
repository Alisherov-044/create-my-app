import { useMemo, useState } from "react";
import type { UseActiveResponse } from "@/types/hooks";

export function useActive<T>(defaultValue: T): UseActiveResponse<T> {
    const [active, setActive] = useMemo(() => {
        return useState<T>(defaultValue);
    }, [defaultValue]);

    return { active, setActive };
}
