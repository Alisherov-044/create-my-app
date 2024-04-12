import { Flex } from "antd";
import { Outlet, useLocation } from "react-router-dom";

export function Layout() {
    const { pathname } = useLocation();
    const layoutLessPages = ["/login", "/un-authorized", "/not-found"];

    if (layoutLessPages.includes(pathname)) {
        return <Outlet />;
    }

    return (
        <Flex className="w-full h-full">
            <Outlet />
        </Flex>
    );
}
