import { Routes, Route } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/dashboardOverview" element={<DashboardOverview />} />
        </Routes>
    )
}
