import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {UserStore} from "@/5_entities/user";
import {observer} from "mobx-react";

interface ProtectedRouteProps {
    roles?: string[];
}

const ProtectedRoute = observer(({ roles }: ProtectedRouteProps) => {
    const { meData, isAuth } = UserStore;


    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }

    if (!roles || !roles.includes(meData.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
});

export default ProtectedRoute;
