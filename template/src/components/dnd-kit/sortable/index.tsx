import { type ForwardedRef, forwardRef, memo } from "react";

export const Sortable = memo(
    forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
        return <div ref={ref}>sortable</div>;
    })
);
