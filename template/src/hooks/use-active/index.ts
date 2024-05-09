import { useState } from "react";
import type { UseActiveResponse } from "@/types/hooks";

export function useActive<T>(defaultValue: T): UseActiveResponse<T> {
    const [active, setActive] = useState<T>(defaultValue);

    return { active, setActive };
}
