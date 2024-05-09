import type { LoadingProps } from "@/types/components";
import { type ForwardedRef, forwardRef, memo } from "react";

export const Loading = memo(
    forwardRef(
        ({ fallback }: LoadingProps, ref: ForwardedRef<HTMLDivElement>) => {
            return <div ref={ref}>Loading... {fallback}</div>;
        }
    )
);
