import { useMemo } from "react";
import { useAxios } from "@/hooks";
import { useQuery } from "react-query";
import type { AxiosError, AxiosResponse } from "axios";

export function useGetPublic<TResponse>(url: string, key?: string) {
    const { axiosPublic } = useMemo(() => {
        return useAxios();
    }, []);

    const {
        data: res,
        error,
        ...rest
    } = useQuery<AxiosResponse<TResponse>, AxiosError<Error>>({
        queryKey: [key],
        queryFn: async () => await axiosPublic.get(url),
    });

    return {
        data: res?.data,
        ...rest,
        status: res?.status,
        error: error?.response?.data,
    };
}

export function useGetPrivate<TResponse>(url: string, key?: string) {
    const { axiosPrivate } = useMemo(() => {
        return useAxios();
    }, []);

    const {
        data: res,
        error,
        ...rest
    } = useQuery<AxiosResponse<TResponse>, AxiosError<Error>>({
        queryKey: [key],
        queryFn: async () => await axiosPrivate.get(url),
    });

    return {
        data: res?.data,
        ...rest,
        status: res?.status,
        error: error?.response?.data,
    };
}
