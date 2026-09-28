import { Link, Navigate, Routes, Route, Outlet } from "react-router-dom";

import { Sidebar } from "../components/layout/Sidebar";
import SocialMedia from "../components/SocialMedia";

// Public pages
import PublicHome from "../pages/public/PublicHome";
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

const Navbar = () => (
  <header className="border-b border-slate-200 bg-white">
    <nav className="px-5 mx-auto min-h-16 max-w-7xl justify-between flex items-center sm:px-8" aria-label="Main navigation">
      <Link to="/" className="font-serif text-xl font-semibold text-slate-900">
        TourTrip
      </Link>
      <div className="gap-5 text-sm font-medium text-slate-700 flex items-center">
        <Link to="/" className="transition-colors hover:text-blue-700">Home</Link>
        <Link to="/trips/1" className="transition-colors hover:text-blue-700">Trips</Link>
        <Link to="/contact" className="transition-colors hover:text-blue-700">Contact</Link>
        <Link to="/login" className="transition-colors hover:text-blue-700">Log in</Link>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="px-5 pb-6 pt-8 bg-white sm:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 justify-center flex">
        <SocialMedia />
      </div>

      <div className="grid grid-cols-2 gap-8 px-6 py-7 bg-[#293461] text-white sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <Link to="/" className="gap-3 inline-flex items-center">
            <span className="grid rounded-full bg-white font-serif text-lg font-bold text-[#293461] size-10 place-items-center">
              T
            </span>
            <span className="font-serif text-base font-semibold">Tour-Trip</span>
          </Link>
          <p className="mt-4 max-w-56 text-xs text-white/80 leading-relaxed">
            Explore amazing destinations, create unforgettable memories, and
            enjoy your journey with Tour-Trip.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Company</h2>
          <ul className="mt-3 text-xs text-white/80 space-y-1">
            <li><Link to="/contact" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Support</h2>
          <ul className="mt-3 text-xs text-white/80 space-y-1">
            <li><Link to="/contact" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Popular Destinations</h2>
          <ul className="mt-3 text-xs text-white/80 space-y-1">
            <li><Link to="/trips/1" className="hover:text-white">Siem Reap</Link></li>
            <li><Link to="/trips/2" className="hover:text-white">Phnom Penh</Link></li>
            <li><Link to="/trips/3" className="hover:text-white">Sihanoukville</Link></li>
            <li><Link to="/trips/4" className="hover:text-white">Kampot</Link></li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-sm font-semibold">Newsletter</h2>
          <p className="mt-3 text-xs text-white/80 leading-relaxed">
            Subscribe to get the latest tours, travel tips, and special offers.
          </p>
          <form
            className="mt-4 overflow-hidden rounded-md bg-white flex"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="footer-email">
              Your email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 min-w-0 text-xs text-slate-900 outline-none"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-emerald-700 text-xs font-semibold text-white transition-colors hover:bg-emerald-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="px-6 py-3 bg-[#293461] text-center text-xs text-white/70">
        © {new Date().getFullYear()} Tour-Trip. All rights reserved.
      </div>
    </div>
  </footer>
);

const PublicLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);


export const AppRoutes = () => {
  return (
    <Routes>

      {/* =========================
          PUBLIC WEBSITE
      ========================= */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicHome />} />
        <Route path="/trips/:id" element={<TripDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customer" element={<CustomerList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/booking" element={<BookingPage />} />
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