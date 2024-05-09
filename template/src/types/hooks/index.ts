import type { i18n } from "i18next";
import type { TTtranslation } from "@/types/i18n";
import type { Action } from "@reduxjs/toolkit";
import type { AxiosInstance } from "axios";
import type { Dispatch, SetStateAction } from "react";

export type UseActiveResponse<T> = {
    active: T;
    setActive: Dispatch<SetStateAction<T>>;
};

export type UseAxiosResponse = {
    axiosPublic: AxiosInstance;
    axiosPrivate: AxiosInstance;
};

export type UseCountDownResponse = {
    time: number;
    start: () => void;
    stop: () => void;
    reset: () => void;
};

export type UseDispatchResponse = Dispatch<Action>;

export type UseInterceptorsResponse = void;

export type UseLocalstorageResponse<T> = [T, Dispatch<SetStateAction<T>>];

export type UseOpenResponse = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

export type UsePaginationResponse = {
    currentPage: number;
    next: () => void;
    prev: () => void;
    goTo: (page: number) => void;
};

export type UseTranslateResponse = {
    t: (key: TTtranslation, option?: string | number) => string;
    i18n: i18n;
    browserLng: string;
    currentLng: string;
};
