import { Navigate, Routes, Route } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import { AdminLayout } from "../layouts/AdminLayout";
import OtpVerifyPage from "../pages/public/auth/OtpVerifyPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/admin/dashboardOverview" element={<DashboardOverview />} />
            <Route path="/verify-otp" element={<OtpVerifyPage />} />
            <Route path="*" element={<Navigate to="/verify-otp" replace />} />
        </Routes>
        
    )
}
