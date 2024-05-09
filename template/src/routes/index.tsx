import { Role } from "@/enums";
import type { TRoutes } from "@/types/routes";

const userRoles = {
    admin: [Role.admin],
    teacher: [Role.teacher],
    student: [Role.student],
};

export const routes: TRoutes = {
    public: [],
    private: [],
};
