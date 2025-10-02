import React from "react";
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import App from "@/1_app/App.tsx";

createRoot(document.getElementById('root')!).render(
    <ConfigProvider locale={ruRU}>
        <App />
    </ConfigProvider>
)
