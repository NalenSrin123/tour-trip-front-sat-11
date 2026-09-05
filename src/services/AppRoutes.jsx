import { Navigate, Routes, Route, Outlet } from "react-router-dom";
import DashboardOverview from "../pages/admin/dashboard/DashboardOverview";
import { Sidebar } from "../components/layout/Sidebar";
import ManageBooking from "../pages/admin/bookings/ManageBooking";
import CategoriesPage from "../pages/admin/categories/CategoriesPage";
import CustomerList from "../pages/CustomerList";
import CreateDestination from "../pages/admin/destinations/CreateDestination";
import LoginForm from "../components/auth/LoginForm";
import DestinationsPage from "../pages/admin/destinations";
import RegisterForm from "../pages/public/auth/RegisterForm";
const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
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
      <Route path="/" element={<Navigate to="/admin" replace />} />

      <Route path="/admin" element={<AdminLayout />}>
        
        <Route index element={<DashboardOverview />} />

        
        <Route
          path="/admin"
          element={<DashboardOverview />}
        />
        
        <Route
          path="/admin/manageBooking"
          element={<ManageBooking/>}
        />
        
        <Route path="/admin/categoriesPage" element={<CategoriesPage/>}/>

        <Route path="/admin/customerList" element={<CustomerList/>}/>
         <Route path="/admin/destinations/create" element={<CreateDestination />} />
          <Route path="/admin/destinations" element={<DestinationsPage />} />

      </Route>


      
      <Route
        path="*"
        element={<Navigate to="/admin" replace />}
      />


    </Routes>
  );
};
