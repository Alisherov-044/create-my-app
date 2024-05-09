import { Flex } from "antd";
import type { FormItemProps } from "@/types/components";
import { type ForwardedRef, forwardRef, memo } from "react";

export const FormItem = memo(
    forwardRef(
        (
            { children, className, error, label, htmlFor }: FormItemProps,
            ref: ForwardedRef<HTMLDivElement>
        ) => {
            return (
                <Flex ref={ref} className={className}>
                    {label && <label htmlFor={htmlFor}>{label}</label>}
                    {children}
                    {error && <span>{error}</span>}
                </Flex>
            );
        }
    )
);
