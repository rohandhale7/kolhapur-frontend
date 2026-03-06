import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostProperty from "./pages/PostProperty";
import Favorites from "./pages/Favorites";
import Comparison from "./pages/Comparison";
import SavedSearch from "./pages/SavedSearch";
import PlanPurchase from "./pages/PlanPurchase";
import MyProperties from "./pages/MyProperties";
import Dashboard from "./pages/Dashboard";
import EditProperty from "./pages/EditProperty";
import PropertyDetails from "./pages/PropertyDetails";

import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import PropertyModeration from "./admin/pages/PropertyModeration";
import UserManagement from "./admin/pages/UserManagement";
import RevenueAnalytics from "./admin/pages/RevenueAnalytics";
import PlatformSettings from "./admin/pages/PlatformSettings";

function AdminRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}

function App() {
  return (
    <Router>

      <Routes>

        {/* Marketplace */}
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/saved-search" element={<SavedSearch />} />
        <Route path="/plans" element={<PlanPurchase />} />
        <Route path="/my-properties" element={<MyProperties />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-property/:id" element={<EditProperty />} />

        {/* Admin redirect */}
        <Route path="/admin" element={<Navigate to="/admin/login" />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Protected */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/properties"
          element={
            <AdminRoute>
              <PropertyModeration />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <UserManagement />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/revenue"
          element={
            <AdminRoute>
              <RevenueAnalytics />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <AdminRoute>
              <PlatformSettings />
            </AdminRoute>
          }
        />

      </Routes>

    </Router>
  );
}

export default App;