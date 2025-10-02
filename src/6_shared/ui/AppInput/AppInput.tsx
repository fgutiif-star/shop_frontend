import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames, type Mods } from "@/6_shared";
import cls from "./AppInput.module.scss";
import {Input} from "antd";
import type {InputProps} from "antd/lib";

export enum ThemeInput {
    PRIMARY = "primary",
    ERROR = "error",
    WARNING = "warning",
    SUCCESS = "success",
}

interface AppInputProps extends InputProps {
    className?: string;
    theme?: ThemeInput;
    errorText?: string;
}


export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        theme = ThemeInput.PRIMARY,
        disabled,
        loading,
        error,
        type,
        id,
        required,
        value,
        placeholder,
        onChange,
        errorText,
    } = props;

    const { t } = useTranslation();

    const mods: Mods = {
        [cls[ThemeInput.ERROR]]: error,
        [cls[theme]]: true,
    };

    return (
        <div className={cls.InputContainer}>
            {
                type === "password" ? <Input.Password
                    type={type}
                    id={id}
                    name={"name"}
                    required={required}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    loading={loading}
                    disabled={disabled}
                    className={classNames(cls.Input, mods, [className])}
                /> : <Input
                    type={type}
                    id={id}
                    name={"name"}
                    required={required}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    loading={loading}
                    disabled={disabled}
                    className={classNames(cls.Input, mods, [className])}
                />
            }

            {error && !value && <span className={cls.InputErrorText}>{errorText}</span>}
        </div>
    );
});
