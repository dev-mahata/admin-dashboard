import React, { useState } from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  Mail,
  Phone,
  RotateCcw,
  Save,
  ShieldCheck,
  Upload,
  UserPlus,
} from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-slate-200/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-800/70 px-4 py-3 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

const labelClass =
  "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2";

function CreateEmployee() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    joiningDate: "",
    role: "Admin",
    status: "Active",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Created:", formData);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      joiningDate: "",
      role: "Admin",
      status: "Active",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800 dark:text-white">
            Create Employee
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Add a new team member and assign their access
            details.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl">
          <UserPlus className="h-4 w-4" />
          New Employee
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 xl:grid-cols-3 gap-6"
      >
        <div className="xl:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 p-3">
              <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                Employee Information
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Basic profile and work details.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                Full Name
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
                placeholder="Debnath Mahata"
              />
            </div>

            <div>
              <label className={labelClass}>
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="employee@crecox.com"
              />
            </div>

            <div>
              <label className={labelClass}>
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className={labelClass}>
                Joining Date
              </label>
              <input
                name="joiningDate"
                type="date"
                value={formData.joiningDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select department</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Operations</option>
                <option>Finance</option>
                <option>Human Resource</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>
                Designation
              </label>
              <input
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className={inputClass}
                placeholder="Product Manager"
              />
            </div>

            <div>
              <label className={labelClass}>Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={inputClass}
              >
                <option>Manager</option>
                <option>Admin</option>
                <option>Operator</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={inputClass}
              >
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Address</label>
              <textarea
                name="address"
                rows="4"
                value={formData.address}
                onChange={handleChange}
                className={inputClass}
                placeholder="Employee address"
              />
            </div>

            <div>
              <label className={labelClass}>Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={inputClass}
                placeholder="ZyU3BBjJ7LQsP6dB"
              />
            </div>

            <div>
              <label className={labelClass}>
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={inputClass}
                placeholder="ZyU3BBjJ7LQsP6dB"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="rounded-xl bg-purple-50 dark:bg-purple-900/20 p-3">
                <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  Access Summary
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Review before saving.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <Summary
                icon={Mail}
                label="Email"
                value={formData.email || "Not added"}
              />
              <Summary
                icon={Phone}
                label="Phone"
                value={formData.phone || "Not added"}
              />
              <Summary
                icon={Building2}
                label="Department"
                value={
                  formData.department || "Not selected"
                }
              />
              <Summary
                icon={Calendar}
                label="Joining"
                value={
                  formData.joiningDate || "Not selected"
                }
              />
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
            <button
              type="button"
              className="mb-4 flex h-28 w-full items-center justify-center rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <Upload className="h-5 w-5 mr-2" />
              Upload Photo
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl"
              >
                <Save className="h-4 w-4" />
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function Summary({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
      <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="font-semibold text-slate-800 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default CreateEmployee;
