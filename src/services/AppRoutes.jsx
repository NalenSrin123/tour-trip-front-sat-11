import { Routes, Route } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import { AdminLayout } from "../layouts/AdminLayout";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/admin/dashboardOverview" element={<DashboardOverview />} />
        </Routes>
    )
}
