import { Navigate, Routes, Route, Outlet } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import { Sidebar } from "../components/layout/Sidebar";
import MastersTabs from "../components/common/MastersTabs";
import ManageBooking from "../pages/admin/bookings/ManageBooking";
import ManageCategory from "../pages/ManageCategory";
import CategoriesPage from "../pages/admin/categories/CategoriesPage";
import ManageCategory from "../pages/ManageCategory";
import CreateCategoryPage from "../pages/admin/categories/CreateCategoryPage";
import CustomerList from "../pages/CustomerList";
import CreateCustomer from "../pages/admin/customers/CreateCustomer";
import ReviewsPage from "../pages/admin/reviews/ReviewsPage";
import CreateDestination from "../pages/admin/destinations/CreateDestination";
import LoginForm from "../components/auth/LoginForm";
import DestinationsPage from "../pages/admin/destinations";
import RegisterForm from "../pages/public/auth/RegisterForm";
import ManageCategory from "../pages/ManageCategory";
import TourDetail from "../components/tour/TourDetailHero";

import TourSchedules from "../pages/admin/tours/TourSchedules";
import GuidesPage from "../pages/admin/guides/GuidesPage";
import PublicHome from "../pages/public/PublicHome";
import Home from "../pages/Home";
import TripDetailPage from "../pages/public/trips/TripDetailPage";
import CreateTour from "../components/tour/CreateTour";
const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
export const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/login" element={<LoginForm />} />
       <Route path="/register" element={<RegisterForm />} />
       <Route path="/tour/detail" element={<TourDetail />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/" element={<Home />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="/admin" element={<DashboardOverview />} />
        <Route path="/admin/manageBooking" element={<ManageBooking />} />
        <Route path="/admin/masters" element={<MastersTabs />} />
        <Route path="/admin/categories" element={<CategoriesPage />} />
        <Route
          path="/admin/categories/create"
          element={<CreateCategoryPage />}
        />
        <Route path="/admin/customerList" element={<CustomerList />} />
        <Route
          path="/admin/customers/create"
          element={<CreateCustomer />}
        />
        <Route path="/admin/categories" element={<CategoriesPage/>}/>

        <Route path="/admin/manageBooking" element={<ManageBooking />} />
        <Route
          path="/admin/masters"
          element={<Navigate to="/admin/masters/destinations" replace />}
        />
        <Route
          path="/admin/categories"
          element={<ManageCategory page={CategoriesPage} />}
        />
        <Route path="/admin/categoriesPage" element={<CategoriesPage />} />

        <Route path="/admin/masters/tours" element={<TourSchedules />} />
        <Route path="/admin/masters/categories" element={<CategoriesPage />} />
        <Route path="/admin/masters/guides" element={<GuidesPage />} />
        <Route path="/admin/masters/schedules" element={<TourSchedules />} />

        <Route path="/admin/customerList" element={<CustomerList />} />
        <Route
          path="/admin/masters/destinations/create"
          element={<CreateDestination />}
        />
        <Route path="/admin/reviews" element={<ReviewsPage />} />
        <Route
          path="/admin/destinations/create"
          element={<CreateDestination />}
        />
        <Route
          path="/admin/masters/destinations"
          element={<DestinationsPage />}
        />
        <Route path="/admin/destinations" element={<DestinationsPage />} />
        <Route path="/admin/tour-schedules" element={<TourSchedules />} />
        <Route path="/trips/:id" element={<TripDetailPage />} />
        <Route path="tour-schedules/create" element={<CreateTour />} />
      </Route>

      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};
