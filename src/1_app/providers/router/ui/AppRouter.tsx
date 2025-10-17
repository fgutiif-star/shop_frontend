import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    getRouterHome,
    getRouterLogin,
    getRouterNotFound,
    getRouterRegister,
    getRouterUnauthorized, getRouterUserList,
} from "@/6_shared/const/routes.ts";
import HomeLayout from "../layout/HomeLayout/HomeLayout.tsx";
import AuthLayout from "../layout/AuthLayout/AuthLayout.tsx";
import {HomePage} from "@/2_pages/home_page";
import {LoginPage} from "@/2_pages/login_page";
import {MainLayout} from "../layout/MainLayout/MainLayout.tsx";
import {NotFoundPage} from "@/2_pages/not_found_page";
import {UnauthorizedPage} from "@/2_pages/unauthorized_page";
import {RegisterPage} from "@/2_pages/register_page";
import {UserListPage} from "@/2_pages/user_list_page";

const AppRouter = () => {
    const router = createBrowserRouter(
        [
            {
                element: <HomeLayout />,
                children: [
                    {
                        path: getRouterHome,
                        element: <HomePage />,
                    },
                    {
                        path: getRouterUserList,
                        element: <UserListPage />,
                    },
                ],
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: getRouterLogin,
                        element: <LoginPage />,
                    },
                    {
                        path: getRouterRegister,
                        element: <RegisterPage />,
                    },
                ],
            },
            {
                element: <MainLayout />,
                children: [
                    // {
                    //     path: getRouterStateMain,
                    //     element: <MainPage />,
                    // },
                    // Это защищенные роуты для пользователей "admin", "seller", "buyer"
                    // {
                    //     element: <ProtectedRoute roles={["admin", "seller", "buyer"]}/>,
                    //     children: [
                    //         {
                    //             path: getRouteProductForm(":id"),
                    //             element: <ProductFormAsync />,
                    //         },
                    //     ],
                    // },


                ],
            },
            {
                path: getRouterNotFound,
                element: <NotFoundPage />,
            },
            {
                path: getRouterUnauthorized,
                element: <UnauthorizedPage />,
            },
        ],
    );

    return <RouterProvider router={router} />;
};

export default AppRouter;
