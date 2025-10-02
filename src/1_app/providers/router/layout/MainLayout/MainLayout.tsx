import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.scss";
import {AppSidebar, HeaderProfile} from "@/3_widgets";

export const MainLayout = () => {
    return (
        <div className={cls.MainLayout}>
            <AppSidebar />
            <div className={cls.Content}>
                <HeaderProfile />
                <Outlet />
            </div>
        </div>
    );
};
