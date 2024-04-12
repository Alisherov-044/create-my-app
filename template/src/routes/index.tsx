import { Role } from "@/types";
import type { ReactNode } from "react";

export type TRoute = {
    id: number;
    path: string;
    element: ReactNode;
    fallback?: ReactNode;
};

export type TPublicRoute = TRoute;
export type TPrivateRoute = TRoute & {
    roles: number[];
};

export type TRoutes = {
    public: TPublicRoute[];
    private: TPrivateRoute[];
};

const userRoles = {
    admin: [Role.admin],
    teacher: [Role.teacher],
    student: [Role.student],
};

export const routes: TRoutes = {
    public: [],
    private: [],
};
