import { routes } from "@/routes";
import { useSelector } from "@/hooks";
import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { Layout, Loading, RequireAuth } from "@/components";

export function App() {
    const { theme } = useSelector((state) => state.theme);
    const { lang } = useSelector((state) => state.lang);

    useEffect(() => {
        document.querySelector("html")?.setAttribute("theme", theme);
    }, [theme]);

    useEffect(() => {
        document.querySelector("html")?.setAttribute("lang", lang);
    }, [lang]);

    return (
        <>
            <h1 className="text-primary-100">hallo</h1>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.private.map(
                        ({ id, path, element, fallback, roles }) => (
                            <Route
                                key={id}
                                element={<RequireAuth roles={roles} />}
                            >
                                <Route
                                    path={path}
                                    element={
                                        <Suspense
                                            fallback={
                                                <Loading fallback={fallback} />
                                            }
                                        >
                                            {element}
                                        </Suspense>
                                    }
                                />
                            </Route>
                        )
                    )}
                    {routes.public.map(({ id, path, element, fallback }) => (
                        <Route
                            key={id}
                            path={path}
                            element={
                                <Suspense
                                    fallback={<Loading fallback={fallback} />}
                                >
                                    {element}
                                </Suspense>
                            }
                        />
                    ))}
                </Route>
            </Routes>
        </>
    );
}
