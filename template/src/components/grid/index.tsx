import { clsx } from "clsx";
import type { GridProps } from "@/types/components";
import { type ForwardedRef, forwardRef, memo } from "react";

export const Grid = memo(
    forwardRef(
        (
            { children, className }: GridProps,
            ref: ForwardedRef<HTMLDivElement>
        ) => {
            return (
                <div ref={ref} className={clsx("grid", className)}>
                    {children}
                </div>
            );
        }
    )
);
