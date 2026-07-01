import { useState } from "react";
import Layout from "../components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import Reports from "../features/anaytics/components/Reports";
import Insights from "../features/anaytics/components/Insights";
import AllUsers from "../features/users/components/AllUsers";
import UserActivity from "../features/users/components/UserActivity";
import CreateEmployee from "../features/users/components/CreateEmployee";
import Employees from "../features/adminManager/components/Employees";
// import Users from "../pages/Users";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/analytics/overview"
          element={<Analytics />}
        />
        <Route
          path="/analytics/reports"
          element={<Reports />}
        />
        <Route
          path="/analytics/insights"
          element={<Insights />}
        />
        <Route
          path="/users/all-users"
          element={<AllUsers />}
        />
        <Route
          path="/users/user-activity"
          element={<UserActivity />}
        />
        <Route
          path="/users/create-employee"
          element={<CreateEmployee />}
        />
        <Route path="/admin-manager/employees" element={<Employees />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
