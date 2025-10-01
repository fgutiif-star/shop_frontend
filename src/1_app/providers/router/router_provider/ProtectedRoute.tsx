// import { Navigate, Outlet } from "react-router-dom";
// import { observer } from "mobx-react-lite";
//
// interface ProtectedRouteProps {
//     roles?: string[];
// }
//
// const ProtectedRoute = observer(({ roles }: ProtectedRouteProps) => {
//     const { isAuth } = UserStore;
//
//     const currentRole =
//         localStorage.getItem(USER_ROLE) || sessionStorage.getItem(USER_ROLE);
//
//     if (!isAuth) {
//         return <Navigate to="/login" replace />;
//     }
//
//     if (!roles || !roles.includes(currentRole)) {
//         return <Navigate to="/unauthorized" replace />;
//     }
//
//     return <Outlet />;
// });
//
// export default ProtectedRoute;
