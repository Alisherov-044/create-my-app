import type { ReactNode } from "react";

export type FormItemProps = {
    className?: string;
    children?: ReactNode;
    label?: string;
    error?: string;
    htmlFor?: string;
};

export type GridProps = {
    children: ReactNode;
    className?: string;
};

export type RequireAuthProps = {
    roles: number[];
};

export type LoadingProps = {
    fallback?: ReactNode;
};
