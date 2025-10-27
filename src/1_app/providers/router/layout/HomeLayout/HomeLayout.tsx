import React from 'react';
import cls from "./HomeLayout.module.scss";
import { Header, Footer } from "@/3_widgets";
import { Outlet } from "react-router-dom";
import {Layout} from "antd";

const HomeLayout = () => {
    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Header />
            <div style={{ flex: 1, padding: "24px" }}>
                <Outlet />
            </div>
            <Footer />
        </Layout>
    );
};

export default HomeLayout;