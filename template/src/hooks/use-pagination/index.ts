import { useLocalstorage } from "@/hooks";
import { useCallback, useMemo } from "react";
import type { UsePaginationResponse } from "@/types/hooks";

export function usePagination(
    key: string,
    totalPages: number
): UsePaginationResponse {
    const [currentPage, setCurrentPage] = useMemo(() => {
        return useLocalstorage<number>(key, 1);
    }, [key]);

    const next = useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    }, [currentPage, totalPages]);

    const prev = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    }, [currentPage]);

    const goTo = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    return { currentPage, next, prev, goTo };
}
