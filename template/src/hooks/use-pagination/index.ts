import { useCallback } from "react";
import { useLocalstorage } from "@/hooks";
import type { UsePaginationResponse } from "@/types/hooks";

export function usePagination(
    key: string,
    totalPages: number
): UsePaginationResponse {
    const [currentPage, setCurrentPage] = useLocalstorage<number>(key, 1);

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
