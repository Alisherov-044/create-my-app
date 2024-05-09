import { type ForwardedRef, forwardRef, memo } from "react";

export const Draggable = memo(
    forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
        return <div ref={ref}>draggable</div>;
    })
);
