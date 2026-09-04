import { Navigate, Routes, Route } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import { AdminLayout } from "../layouts/AdminLayout";
import OtpVerifyPage from "../pages/public/auth/OtpVerifyPage";
import CreateCustomer from "../pages/admin/customers/CreateCustomer";
import CategoriesPage from "../pages/admin/categories/CategoriesPage";
import ManageBooking from "../pages/admin/bookings/ManageBooking";
import CreateDestination from "../pages/admin/destinations/CreateDestination";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="dashboardOverview" element={<DashboardOverview />} />
        <Route path="masters" element={<CategoriesPage />} />
        <Route path="customers" element={<CreateCustomer />} />
        <Route path="bookings" element={<ManageBooking />} />
        <Route path="destinations/create" element={<CreateDestination />} />
      </Route>

      <Route path="/verify-otp" element={<OtpVerifyPage />} />

      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};
