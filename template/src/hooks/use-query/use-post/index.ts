import { useAxios } from "@/hooks";
import { useMutation } from "react-query";
import type { AxiosError, AxiosResponse } from "axios";

export function usePostPublic<TResponse, TData>(url: string, key?: string) {
    const { axiosPublic } = useAxios();

    return useMutation<AxiosResponse<TResponse>, AxiosError<Error>, TData>({
        mutationKey: [key],
        mutationFn: async (data) => await axiosPublic.post(url, data),
    });
}

export function usePostPrivate<TResponse, TData>(url: string, key?: string) {
    const { axiosPrivate } = useAxios();

    return useMutation<AxiosResponse<TResponse>, AxiosError<Error>, TData>({
        mutationKey: [key],
        mutationFn: async (data) => await axiosPrivate.post(url, data),
    });
}
