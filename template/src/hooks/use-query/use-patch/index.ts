import { useAxios } from "@/hooks";
import { useMutation } from "react-query";
import type { AxiosError, AxiosResponse } from "axios";

export function usePatchPublic<TResponse, TData>(
    urlGenerator: (id: number) => string,
    key?: string
) {
    const { axiosPublic } = useAxios();

    return useMutation<
        AxiosResponse<TResponse>,
        AxiosError<Error>,
        { id: number; data: TData }
    >({
        mutationKey: [key],
        mutationFn: async ({ id, data }) =>
            await axiosPublic.patch(urlGenerator(id), data),
    });
}

export function usePatchPrivate<TResponse, TData>(
    urlGenerator: (id: number) => string,
    key?: string
) {
    const { axiosPrivate } = useAxios();

    return useMutation<
        AxiosResponse<TResponse>,
        AxiosError<Error>,
        { id: number; data: TData }
    >({
        mutationKey: [key],
        mutationFn: async ({ id, data }) =>
            await axiosPrivate.patch(urlGenerator(id), data),
    });
}
