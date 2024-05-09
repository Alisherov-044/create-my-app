import { Flex } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { type ForwardedRef, forwardRef, memo } from "react";

export const Layout = memo(
    forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
        const { pathname } = useLocation();
        const layoutLessPages = ["/login", "/un-authorized", "/not-found"];

        if (layoutLessPages.includes(pathname)) {
            return <Outlet />;
        }

        return (
            <Flex ref={ref} className="w-full h-full">
                <Outlet />
            </Flex>
        );
    })
);
