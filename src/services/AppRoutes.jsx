import { Navigate, Routes, Route } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import { AdminLayout } from "../layouts/AdminLayout";
import OtpVerifyPage from "../pages/public/auth/OtpVerifyPage";
import ManageCategory from "../pages/ManageCategory";
import CategoriesPage from "../pages/admin/categories/CategoriesPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="categories" element={<ManageCategory page={CategoriesPage} />} />
            </Route>
            <Route path="/verify-otp" element={<OtpVerifyPage />} />
            <Route path="*" element={<Navigate to="/verify-otp" replace />} />
        </Routes>
    )
}
