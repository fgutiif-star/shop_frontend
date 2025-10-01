import { classNames, Loader } from "@/6_shared";
import cls from "./AppLoader.module.scss";

interface PageLoaderProps {
    className?: string;
}

export const AppLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.AppLoader, {}, [className])}>
        <Loader />
    </div>
);
