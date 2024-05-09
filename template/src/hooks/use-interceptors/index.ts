import { refreshUrl } from "@/utils/urls";
import type { AxiosInstance } from "axios";
import { setAuth } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "@/hooks";
import { useCallback, useEffect, useMemo } from "react";
import type { UseInterceptorsResponse } from "@/types/hooks";

export function useInterceptors(
    axiosPublicInstance: AxiosInstance,
    axiosPrivateInstance: AxiosInstance
): UseInterceptorsResponse {
    const dispatch = useCallback(useDispatch(), []);
    const { accessToken, refreshToken, ...rest } = useMemo(() => {
        return useSelector((state) => state.auth);
    }, []);

    useEffect(() => {
        const responseInterceptorInstance =
            axiosPrivateInstance.interceptors.response.use(
                (response) => response,
                async (error) => {
                    const originalRequest = error.config;
                    if (
                        error.response.status === 401 &&
                        originalRequest &&
                        !originalRequest._retry
                    ) {
                        originalRequest._retry = true;
                        return await axiosPublicInstance
                            .post(refreshUrl, {
                                refreshToken,
                            })
                            .then((response) => {
                                dispatch(
                                    setAuth({
                                        accessToken: response.data.accessToken,
                                        refreshToken,
                                        ...rest,
                                    })
                                );
                                originalRequest.headers[
                                    "Authorization"
                                ] = `Bearer ${response.data.accessToken}`;
                                return axiosPublicInstance(originalRequest);
                            })
                            .catch((err) => {
                                console.error(err);
                            });
                    }
                    return await Promise.reject(error);
                }
            );

        const requestInterceptorInstance =
            axiosPrivateInstance.interceptors.request.use(
                (config) => {
                    config.headers["Authorization"] = `Bearer ${accessToken}`;
                    return config;
                },
                async (error) => await Promise.reject(error)
            );

        return () => {
            axiosPrivateInstance.interceptors.request.eject(
                requestInterceptorInstance
            );
            axiosPrivateInstance.interceptors.response.eject(
                responseInterceptorInstance
            );
        };
    }, [axiosPrivateInstance, axiosPublicInstance, accessToken, refreshToken]);
}
