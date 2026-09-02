import { Navigate, Routes, Route } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import { AdminLayout } from "../layouts/AdminLayout";
import OtpVerifyPage from "../pages/public/auth/OtpVerifyPage";
import DestinationsPage from "../pages/admin/destinations";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Manage Masters — Destinations is the section landing page for now */}
            <Route path="/admin/masters" element={<AdminLayout />}>
                <Route index element={<Navigate to="destinations" replace />} />
                <Route path="destinations" element={<DestinationsPage />} />
            </Route>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/admin/dashboardOverview" element={<DashboardOverview />} />
            <Route path="/verify-otp" element={<OtpVerifyPage />} />
            <Route path="*" element={<Navigate to="/verify-otp" replace />} />
        </Routes>
    )
}
