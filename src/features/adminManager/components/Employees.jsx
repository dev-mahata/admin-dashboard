import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Filter,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { employees } from "../data/employeesData";

const statusStyles = {
  Active:
    "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
  Pending:
    "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
  Inactive:
    "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
};

function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const searchValue = searchTerm.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(searchValue) ||
        employee.email.toLowerCase().includes(searchValue) ||
        employee.department.toLowerCase().includes(searchValue) ||
        employee.designation.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || employee.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active",
  ).length;

  const pendingEmployees = employees.filter(
    (employee) => employee.status === "Pending",
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive",
  ).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800 dark:text-white">
            Employees
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Manage employee profiles, roles, and account status.
          </p>
        </div>

        <Link
          to="/users/create-employee"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
        >
          <Plus className="h-4 w-4" />
          Add Employee
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Employees"
          value={employees.length}
          icon={Users}
          iconClass="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
        />
        <StatCard
          title="Active"
          value={activeEmployees}
          icon={UserCheck}
          iconClass="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
        />
        <StatCard
          title="Pending"
          value={pendingEmployees}
          icon={ShieldCheck}
          iconClass="bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
        />
        <StatCard
          title="Inactive"
          value={inactiveEmployees}
          icon={UserX}
          iconClass="bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
        />
      </div>

      <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              Employee Directory
            </h3>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search employee"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-xl border border-slate-200/70 bg-white/80 py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700/70 dark:bg-slate-800/70 dark:text-white sm:w-72"
              />
            </div>
          </div>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200/70 text-left dark:border-slate-700/70">
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Location</TableHead>
                <TableHead></TableHead>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50/80 dark:border-slate-800 dark:hover:bg-slate-800/40"
                >
                  <td className="py-4 pr-4">
                    <EmployeeInfo employee={employee} />
                  </td>
                  <td className="py-4 pr-4">
                    <p className="font-semibold text-slate-700 dark:text-slate-200">
                      {employee.department}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {employee.designation}
                    </p>
                  </td>
                  <td className="py-4 pr-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {employee.role}
                    </span>
                  </td>
                  <td className="py-4 pr-4">
                    <StatusBadge status={employee.status} />
                  </td>
                  <td className="py-4 pr-4 text-sm text-slate-600 dark:text-slate-400">
                    {employee.joinedAt}
                  </td>
                  <td className="py-4 pr-4 text-sm text-slate-600 dark:text-slate-400">
                    {employee.location}
                  </td>
                  <td className="py-4 text-right">
                    <button className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, iconClass }) {
  return (
    <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/20 dark:border-slate-700/50 dark:bg-slate-900/80 dark:hover:shadow-slate-900/20">
      <div className="flex items-start justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">
            {title}
          </p>
          <p className="text-3xl font-bold text-slate-800 dark:text-white">
            {value}
          </p>
        </div>
        <div className={`rounded-xl p-3 ${iconClass}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

function EmployeeInfo({ employee }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${employee.color} text-sm font-bold text-white shadow-lg shadow-slate-300/40 dark:shadow-slate-950/40`}
      >
        {employee.initials}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-slate-800 dark:text-white">
          {employee.name}
        </p>
        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <Mail className="h-3.5 w-3.5" />
          <span className="truncate">{employee.email}</span>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

function MobileInfo({ icon: Icon, value }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-slate-400" />
      <span>{value}</span>
    </div>
  );
}

function TableHead({ children }) {
  return (
    <th className="pb-3 pr-4 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
      {children}
    </th>
  );
}

export default Employees;