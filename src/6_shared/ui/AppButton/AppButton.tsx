import React, {memo} from "react";
import { classNames, type Mods } from "@/6_shared/";
import cls from "./AppButton.module.scss";
import {Button} from "antd";
import type {ButtonProps} from "antd/lib/button";

export enum ThemeButton {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppButtonProps extends ButtonProps {
    className?: string;
    theme?: ThemeButton;
}

export const AppButton = memo((props: AppButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.PRIMARY,
        onClick = () => console.log(),
        isLoading,
        disabled,
        icon,
        typeButton,
        danger,
        color,
        variant,
        size,
        htmlType,
    } = props;

    const mods: Mods = {
        // [cls.error]: error,
        [cls[theme]]: true,
    };

    return (
        <Button
            className={classNames(cls.Button, mods, [className])}
            onClick={onClick}
            type={typeButton}
            danger={danger}
            color={color}
            variant={variant}
            size={size}
            htmlType={htmlType}
            loading={isLoading}
            disabled={disabled}
            icon={icon}
        >
            {children}
        </Button>
    );
});

