import { Navigate, Routes, Route, Outlet } from "react-router-dom";

import { Sidebar } from "../components/layout/Sidebar";
import HeaderFooter from "../components/layout/header_footer";

// Public pages
import PublicHome from "../pages/public/PublicHome";
import AboutPage from "../pages/public/AboutPage";
import ToursPage from "../pages/public/ToursPage";
import RegisterForm from "../pages/public/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
import TripDetailPage from "../pages/public/trips/TripDetailPage";
import BookingPage from "../components/booking/BookingPage";
import ContactPage from "../pages/ContactPage";

// Admin pages
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import ManageMasters from "../pages/admin/masters/ManageMaster";
import ManageBooking from "../pages/admin/bookings/ManageBooking";
import CategoriesPage from "../pages/admin/categories/CategoriesPage";
import CreateCategoryPage from "../pages/admin/categories/CreateCategoryPage";
import CustomerList from "../pages/CustomerList";
import CreateCustomer from "../pages/admin/customers/CreateCustomer";
import ReviewsPage from "../pages/admin/reviews/ReviewsPage";
import CreateDestination from "../pages/admin/destinations/CreateDestination";
import DestinationsPage from "../pages/admin/destinations";
import Reports from "../pages/admin/reports/Reports";
import TourSchedules from "../pages/admin/tours/TourSchedules";
import GuidesPage from "../pages/admin/guides/GuidesPage";
import CreateTour from "../components/tour/CreateTour";
import EditTour from "../components/tour/EditTour";
import DeleteTour from "../components/tour/DeleteTour";


// Admin Layout
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

const PublicLayout = () => (
  <HeaderFooter>
    <Outlet />
  </HeaderFooter>
);


export const AppRoutes = () => {
  return (
    <Routes>

      {/* =========================
          PUBLIC WEBSITE
      ========================= */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicHome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trips" element={<ToursPage />} />
        <Route path="/trips/:id" element={<TripDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customer" element={<CustomerList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/admin/manageBooking" element={<ManageBooking />} />
        <Route
          path="/admin/masters"
          element={<Navigate to="/admin/masters/destinations" replace />}
        />
        <Route
          path="/admin/categories"
          element={<ManageCategory page={CategoriesPage} />}
        />s
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
        <Route path="/admin/masters/tours/edit/:id" element={<EditTour />} />
        <Route path="/admin/masters/tours/delete/:id" element={<DeleteTour />} />
      </Route>


      {/* =========================
          ADMIN DASHBOARD
      ========================= */}

      <Route path="/admin" element={<AdminLayout />}>

        {/* Dashboard */}
        <Route index element={<DashboardOverview />} />

        {/* Masters */}
        <Route
          path="masters"
          element={<Navigate to="masters/destinations" replace />}
        />

        <Route
          path="masters/destinations"
          element={<DestinationsPage />}
        />

        <Route
          path="masters/destinations/create"
          element={<CreateDestination />}
        />

        <Route
          path="masters/tours"
          element={<TourSchedules />}
        />

        <Route
          path="masters/tours/create"
          element={<CreateTour />}
        />

        <Route
          path="masters/tours/edit/:id"
          element={<EditTour />}
        />

        <Route
          path="masters/tours/delete/:id"
          element={<DeleteTour />}
        />

        <Route
          path="masters/guides"
          element={<GuidesPage />}
        />

        <Route
          path="masters/schedules"
          element={<TourSchedules />}
        />


        {/* Bookings */}
        <Route
          path="manageBooking"
          element={<ManageBooking />}
        />


        {/* Categories */}
        <Route
          path="categories"
          element={<CategoriesPage />}
        />

        <Route
          path="categories/create"
          element={<CreateCategoryPage />}
        />


        {/* Customers */}
        <Route
          path="customerList"
          element={<CustomerList />}
        />

        <Route
          path="customers/create"
          element={<CreateCustomer />}
        />


        {/* Reviews */}
        <Route
          path="reviews"
          element={<ReviewsPage />}
        />


        {/* Destinations */}
        <Route
          path="destinations"
          element={<DestinationsPage />}
        />

        <Route
          path="destinations/create"
          element={<CreateDestination />}
        />


        {/* Reports */}
        <Route
          path="reports"
          element={<Reports />}
        />

      </Route>


      {/* Anything not found */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
};