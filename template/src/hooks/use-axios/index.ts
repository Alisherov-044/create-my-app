import { baseURL } from "@/constants/urls";
import axios, { type AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { useInterceptors, useSelector } from "@/hooks";
import type { AuthState } from "@/types/redux";
import type { UseAxiosResponse } from "@/types/hooks";

export function useAxios(): UseAxiosResponse {
    const { accessToken } = useSelector<AuthState>((state) => state.auth);
    const [axiosPublic, setAxiosPublic] = useState<AxiosInstance>(
        axios.create({})
    );
    const [axiosPrivate, setAxiosPrivate] = useState<AxiosInstance>(
        axios.create({})
    );

    useEffect(() => {
        setAxiosPublic(
            axios.create({
                baseURL,
                headers: {
                    "Content-Type": "application/json",
                },
            })
        );

        setAxiosPrivate(
            axios.create({
                baseURL,
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            })
        );
    }, []);

    useEffect(() => {
        useInterceptors(axiosPublic, axiosPrivate);
    }, [axiosPublic, axiosPrivate]);

    return { axiosPublic, axiosPrivate };
}
