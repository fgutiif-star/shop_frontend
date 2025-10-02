import React from "react";
import { classNames, Loader } from "@/6_shared";
import cls from "./AppLoader.module.scss";
import { ReactNode } from "react";

interface PageLoaderProps {
    className?: string;
}
export const AppLoader = ({ className }: PageLoaderProps): ReactNode => (
    <div className={classNames(cls.AppLoader, {}, [className])}>
        <Loader />
    </div>
);
