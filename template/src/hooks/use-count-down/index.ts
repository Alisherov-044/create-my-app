import { useState, useEffect, useMemo, useCallback } from "react";
import type { UseCountDownResponse } from "@/types/hooks";

export function useCountDown(initialTime: number): UseCountDownResponse {
    const [time, setTime] = useMemo(() => {
        return useState<number>(initialTime);
    }, [initialTime]);
    const [isActive, setIsActive] = useMemo(() => {
        return useState<boolean>(false);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const start = useCallback((): void => {
        setIsActive(true);
    }, []);

    const stop = useCallback((): void => {
        setIsActive(false);
    }, []);

    const reset = useCallback((): void => {
        setIsActive(false);
        setTime(initialTime);
    }, [initialTime]);

    return { time, start, stop, reset };
}
