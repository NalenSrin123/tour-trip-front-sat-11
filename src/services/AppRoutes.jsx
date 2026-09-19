import { Navigate, Routes, Route } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import TourSchedules from "../pages/admin/tours/TourSchedules";
import { AdminLayout } from "../layouts/AdminLayout";
import ForgotPassword from "../pages/customer/ForgotPassword";
import OtpVerifyPage from "../pages/public/auth/OtpVerifyPage";
import Reports from "../pages/admin/reports/Reports";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="tour-schedules" element={<TourSchedules />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<OtpVerifyPage />} />
      <Route path="/reports" element={<Navigate to="/admin/reports" replace />} />
      <Route path="*" element={<Navigate to="/verify-otp" replace />} />
    </Routes>
  );
};
