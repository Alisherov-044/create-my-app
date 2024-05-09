import { useSelector } from "@/hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import type { RequireAuthProps } from "@/types/components";

export function RequireAuth({ roles }: RequireAuthProps) {
    const location = useLocation();
    const { roles: authRoles, accessToken } = useSelector(
        (state) => state.auth
    );

    // check the user if they really authenticated
    // this will prevent you to avoid letting users who came with fake accessToken
    // never ever check if (!!accessToken) { then do something }
    // send request to POST /auth/check/ -> headers `Bearer ${accessToken}`
    // then store the response in isAuthenticated variable
    const isAuthenticated = !!accessToken; // this is just boilerplate, do not keep this code as it is!

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!!roles.find((role) => authRoles?.includes(role))) {
        return <Outlet />;
    }

    return <Navigate to="/un-authorized" state={{ from: location }} replace />;
}
