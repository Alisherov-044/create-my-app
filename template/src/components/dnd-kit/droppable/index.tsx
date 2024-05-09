import { type ForwardedRef, forwardRef, memo } from "react";

export const Droppable = memo(
    forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
        return <div ref={ref}>droppable</div>;
    })
);
