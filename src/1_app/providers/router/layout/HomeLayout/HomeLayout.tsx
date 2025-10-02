import React from 'react';
import cls from "./HomeLayout.module.scss";
import { Header, Footer } from "@/3_widgets";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className={cls.HomeLayout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;