// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { HomePage } from "@/2_pages/home";
// import { NotFoundPage } from "@/2_pages/not_found";
// import { UnauthorizedPage } from "@/2_pages/unauthorized";
// import { LoginPage } from "@/2_pages/login";
// import {
//     getRouteAlkoProductsCreateUpdate,
//     getRouteAnalysisComparison,
//     getRouteElectronicReports,
//     getRouteIssuedLicensees,
//     getRouteLicenses,
//     getRouteMyReport,
//     getRouteMyReports,
//     getRouteNotificationDetailByCategory,
//     getRouteNotifications,
//     getRouteOrganizationUsers,
//     getRouteProductForm,
//     getRouteProducts,
//     getRouterAgreements,
//     getRouterDirectoriesAlkoByType,
//     getRouterDirectoriesAlkoContainers,
//     getRouterDirectoriesAlkoContainersCreateUpdate,
//     getRouterDirectoriesAlkoProducts,
//     getRouterDirectoriesBudClass,
//     getRouterDirectoriesCategories,
//     getRouterDirectoriesGskp,
//     getRouterDirectoriesTnvd,
//     getRouterHome,
//     getRouterLogin,
//     getRouterNotFound,
//     getRouterRegister,
//     getRouterStateConsumers,
//     getRouterStateLicensees,
//     getRouterStateMain,
//     getRouterStateManufacturers,
//     getRouterUnauthorized,
//     getRouterUserGosalko,
//     getRouterUserGosalkoCreateEdit,
//     getRouterUserRepOrg,
//     getRouteSaaEmployeeNotifications,
//     getRouteSummaryReport,
// } from "@/6_shared/const/routes.ts";
// import HomeLayout from "@/1_app/providers/router/layout/HomeLayout/HomeLayout.tsx";
// import AuthLayout from "@/1_app/providers/router/layout/AuthLayout/AuthLayout.tsx";
// import { MainLayout } from "@/1_app/providers/router/layout/MainLayout/MainLayout.tsx";
// import { MainPage } from "@/2_pages/StateUser/main";
// import { ReportOrganizationDetailsPage, ReportOrganizationPage } from "@/2_pages/report_organizations";
// import { GskpPage } from "@/2_pages/admin/gskp";
// import { CategoryPage } from "@/2_pages/category";
// import { BudgetClassifierPage } from "@/2_pages/budget_classifier";
// import { TnvdPage } from "@/2_pages/tnvd";
// import { AlkoProductsPage } from "@/2_pages/alko_products";
// import { AlkoByTypePage } from "@/2_pages/APByType";
// import { AlkoProductsCreatePage } from "@/2_pages/alko_products_create";
// import { AlkoContainersPage } from "@/2_pages/containers_alko";
// import { AlkoContainersCreatePage } from "@/2_pages/alko_containers_create";
// import { AgreementsPage } from "@/2_pages/agreements";
// import { GosalkoUserPage } from "@/2_pages/user_gosalko";
// import { GosalkoUserCreateUpdatePage } from "@/2_pages/gosalko_create_update";
// import { RegisterPage } from "@/2_pages/register";
// import ProtectedRoute from "@/1_app/providers/router/routerProvider/ProtectedRoute.tsx";
// import {
//     CreateReportDetailPage,
//     MyReportPageLazy,
//     ProductFormAsync,
//     ProductTablePageAsync,
//     ReportFillFormPage,
//     SummaryReportsPageLazy,
// } from "@/2_pages/users";
// import { LicensesPageLazy } from "@/2_pages/users/Licenses/LicensesPage.async";
// import { ElectronicReportsPageLazy } from "@/2_pages/users/Reports/ElectornicReportsPage.async";
// import { ManufacturersPage } from "@/2_pages/admin/manufacturers";
// import { ConsumersPage } from "@/2_pages/admin/consumers";
// import { IssuedLicenseesPage } from "@/2_pages/saa_employee/issued_licensees";
// import { LicenseesPage } from "@/2_pages/licensees";
// import {
//     AdminNotificationPageLazy,
//     NotificationListPageLazy,
//     SaaEmployeeNotificationPageLazy,
// } from "@/2_pages/notification";
// import { AnalysisComparisonLazy } from "@/2_pages/analysis_comparison";
//
// const AppRouter = () => {
//     const router = createBrowserRouter(
//         [
//             {
//                 element: <HomeLayout />,
//                 children: [
//                     {
//                         path: getRouterHome,
//                         element: <HomePage />,
//                     },
//                 ],
//             },
//             {
//                 element: <AuthLayout />,
//                 children: [
//                     {
//                         path: getRouterLogin,
//                         element: <LoginPage />,
//                     },
//                     {
//                         path: getRouterAgreements,
//                         element: <AgreementsPage />,
//                     },
//                     {
//                         path: getRouterRegister,
//                         element: <RegisterPage />,
//                     },
//                 ],
//             },
//             {
//                 element: <MainLayout />,
//                 children: [
//                     {
//                         path: getRouterStateMain,
//                         element: <MainPage />,
//                     },
//                     {
//                         path: getRouterUserRepOrg,
//                         element: <ReportOrganizationPage />,
//                     },
//                     {
//                         path: getRouteOrganizationUsers(":id"),
//                         element: <ReportOrganizationDetailsPage />,
//                     },
//                     {
//                         path: getRouterDirectoriesBudClass,
//                         element: <BudgetClassifierPage />,
//                     },
//                     {
//                         path: getRouteIssuedLicensees,
//                         element: <IssuedLicenseesPage />,
//                     },
//                     {
//                         path: getRouterStateConsumers,
//                         element: <ConsumersPage />,
//                     },
//                     {
//                         path: getRouterStateLicensees,
//                         element: <LicenseesPage />,
//                     },
//                     {
//                         path: getRouterStateManufacturers,
//                         element: <ManufacturersPage />,
//                     },
//                     {
//                         element: <ProtectedRoute roles={["admin"]} />,
//                         children: [
//                             {
//                                 path: getRouterDirectoriesGskp,
//                                 element: <GskpPage />,
//                             },
//                         ],
//                     },
//                     {
//                         path: getRouterDirectoriesTnvd,
//                         element: <TnvdPage />,
//                     },
//                     {
//                         path: getRouterDirectoriesAlkoProducts,
//                         element: <AlkoProductsPage />,
//                     },
//                     {
//                         path: getRouterStateManufacturers,
//                         element: <ManufacturersPage />,
//                     },
//                     {
//                         path: getRouterDirectoriesAlkoByType,
//                         element: <AlkoByTypePage />,
//                     },
//                     {
//                         path: getRouteAlkoProductsCreateUpdate(":id"),
//                         element: <AlkoProductsCreatePage />,
//                     },
//                     {
//                         path: getRouterDirectoriesAlkoContainers,
//                         element: <AlkoContainersPage />,
//                     },
//                     {
//                         path: getRouterDirectoriesAlkoContainersCreateUpdate,
//                         element: <AlkoContainersCreatePage />,
//                     },
//                     {
//                         path: getRouterDirectoriesCategories,
//                         element: <CategoryPage />,
//                     },
//                     {
//                         path: getRouterUserGosalko,
//                         element: <GosalkoUserPage />,
//                     },
//                     {
//                         path: getRouteNotifications(),
//                         element: <AdminNotificationPageLazy />,
//                     },
//
//                     {
//                         path: getRouteSaaEmployeeNotifications(),
//                         element: <SaaEmployeeNotificationPageLazy />,
//                     },
//
//                     {
//                         path: getRouteAnalysisComparison(),
//                         element: <AnalysisComparisonLazy />,
//                     },
//
//
//                     //getRouteNotificationDetailByCategory
//
//                     {
//                         path: getRouteNotificationDetailByCategory(":category"),
//                         element: <NotificationListPageLazy />,
//                     },
//                     {
//                         path: getRouterUserGosalkoCreateEdit,
//                         element: <GosalkoUserCreateUpdatePage />,
//                     },
//                     {
//                         element: (
//                             <ProtectedRoute
//                                 roles={["users", "admin", "saa_employee"]}
//                             />
//                         ),
//                         children: [
//                             {
//                                 path: getRouteProductForm(":id"),
//                                 element: <ProductFormAsync />,
//                             },
//                             {
//                                 path: getRouteProducts,
//                                 element: <ProductTablePageAsync />,
//                             },
//                             {
//                                 path: getRouteMyReports,
//                                 element: <MyReportPageLazy />,
//                             },
//                             {
//                                 path: getRouteLicenses,
//                                 element: <LicensesPageLazy />,
//                             },
//                             {
//                                 path: getRouteSummaryReport(),
//                                 element: <SummaryReportsPageLazy />,
//                             },
//                             {
//                                 path: getRouteElectronicReports(":formNumber"),
//                                 element: <ElectronicReportsPageLazy />,
//                             },
//
//                             {
//                                 path: getRouteMyReport(":formNumber"),
//                                 element: <ReportFillFormPage />,
//                             },
//                             {
//                                 path: getRouteMyReport(":formNumber/:id"),
//                                 element: <CreateReportDetailPage />,
//                             },
//                         ],
//                     },
//                     //users role
//                 ],
//             },
//             {
//                 path: getRouterNotFound,
//                 element: <NotFoundPage />,
//             },
//             {
//                 path: getRouterUnauthorized,
//                 element: <UnauthorizedPage />,
//             },
//         ],
//         {
//             basename: "/alko",
//         },
//     );
//
//     return <RouterProvider router={router} />;
// };
//
// export default AppRouter;
