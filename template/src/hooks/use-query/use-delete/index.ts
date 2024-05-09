import { useMemo } from "react";
import { useAxios } from "@/hooks";
import { useMutation } from "react-query";
import type { AxiosError, AxiosResponse } from "axios";

export function useDeletePublic<TResponse>(
    urlGenerator: (id: number) => string,
    key?: string
) {
    const { axiosPublic } = useMemo(() => {
        return useAxios();
    }, []);

    return useMutation<AxiosResponse<TResponse>, AxiosError<Error>, number>({
        mutationKey: [key],
        mutationFn: async (id) => await axiosPublic.delete(urlGenerator(id)),
    });
}

export function useDeletePrivate<TResponse>(
    urlGenerator: (id: number) => string,
    key?: string
) {
    const { axiosPrivate } = useMemo(() => {
        return useAxios();
    }, []);

    return useMutation<AxiosResponse<TResponse>, AxiosError<Error>, number>({
        mutationKey: [key],
        mutationFn: async (id) => await axiosPrivate.delete(urlGenerator(id)),
    });
}
