import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import {
  BarChart3,
  ChevronDown,
  LayoutDashboard,
  Settings,
  UserCog,
  Users,
} from "lucide-react";

const menuItems = [
  {
    path: "/",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    path: "/analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { path: "/analytics/overview", label: "Overview" },
      { path: "/analytics/reports", label: "Reports" },
      { path: "/analytics/insights", label: "Insights" },
    ],
  },
  {
    path: "/users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { path: "/users/all-users", label: "All Users" },
      { path: "/users/roles", label: "User Activity" },
      {
        path: "/users/create-employee",
        label: "Create Employee",
      },
    ],
  },
  {
    path: "/admin-manager",
    icon: UserCog,
    label: "Admin Manager",
    submenu: [
      { path: "/admin-manager/employees", label: "Employees" },
      { path: "/admin-manager/activity-log", label: "Activity Log" },
    ],
  },
  {
    path: "/settings",
    icon: Settings,
    label: "Settings",
  },
];

function Sidebar({ collapsed, onToggle }) {
  const [expandedItems, setExpandedItems] = useState(
    new Set(["/analytics"]),
  );

  const toggleExpanded = (path) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }

    setExpandedItems(newExpanded);
  };
  return (
    <div
      className={`${collapsed ? "w-20" : "w-64"} transition-all duration-300 ease-in-out bg-white/80 
      dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 
      dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      <div
        className={`${collapsed ? "p-6" : "p-6"} border-b border-slate-200/50 dark:border-slate-700/50`}
      >
        <div className="flex items-center space-x-3">
          <div className="">
            <img
              src={logo}
              className={`${collapsed ? "h-8 w-8" : "h-10 w-10"} `}
              alt=""
            />
          </div>

          {!collapsed && (
            <div className="">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Crecox
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          return (
            <div key={item.path}>
              <div className="relative">
                <NavLink
                  to={item.path}
                  className={({
                    isActive,
                  }) => `w-full flex items-center justify-between p-3 rounded-xl
              transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className={`w-5 h-5`} />
                    {/* Conditional Rendering */}
                    <>
                      {!collapsed && (
                        <span className="font-medium ml-2">
                          {item.label}
                        </span>
                      )}
                      {!collapsed && item.badge && (
                        <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {!collapsed && item.count && (
                        <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </>
                  </div>
                </NavLink>

                {!collapsed && item.submenu && (
                  <button
                    onClick={() =>
                      toggleExpanded(item.path)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedItems.has(item.path) ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>

              {/* Sub Menus  */}
              {!collapsed &&
                item.submenu &&
                expandedItems.has(item.path) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu.map((subitem) => {
                      return (
                        <NavLink
                          to={subitem.path}
                          key={subitem.path}
                          className="w-full flex text-left p-2 text-sm text-slate-600 dark:text-slate-400 
                          hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-100 
                          dark:hover:bg-slate-800/50 rounded-lg transition-all"
                        >
                          {subitem.label}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      {/* {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div
            className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50
        dark:bg-slate-800./50"
          >
            <img
              src="https://images.pexels.com/photos/34099725/pexels-photo-34099725.jpeg?
            _gl=1*1hmlx6*_ga*MjA4NDg0NjU4MS4xNzgyNDc2OTMx*_ga_8JE65Q40S6*czE3ODI0NzY5M
            zAkbzEkZzEkdDE3ODI0NzcwMzgkajE2JGwwJGgw"
              alt="user"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  Debnath Mahata
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Sidebar;
