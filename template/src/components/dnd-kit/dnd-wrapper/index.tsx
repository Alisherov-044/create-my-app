import { type ForwardedRef, forwardRef, memo } from "react";

export const DnDWrapper = memo(
    forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
        return <div ref={ref}>DnD wrapper</div>;
    })
);
