import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  IndianRupeeIcon,
  Music,
  Rocket,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import React from "react";

const stats = [
  {
    title: "Total Users",
    value: "12,845",
    change: "+12.4%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Active Campaigns",
    value: "186",
    change: "+6.8%",
    trend: "up",
    icon: Rocket,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Pending Approvals",
    value: "24",
    change: "-3",
    trend: "down",
    icon: Clock,
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    textColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    title: "Total Revenue",
    value: "₹48,230",
    change: "+18.2%",
    trend: "up",
    icon: IndianRupeeIcon,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Creator Payouts",
    value: "₹21,480",
    change: "+7.5%",
    trend: "up",
    icon: Wallet,
    color: "from-cyan-500 to-sky-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    textColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "UGC Videos",
    value: "9,642",
    change: "+15.3%",
    trend: "up",
    icon: Video,
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-600 dark:text-red-400",
  },
  {
    title: "Songs Uploaded",
    value: "1,342",
    change: "+9.1%",
    trend: "up",
    icon: Music,
    color: "from-pink-500 to-fuchsia-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    textColor: "text-pink-600 dark:text-pink-400",
  },
  {
    title: "Verified Artists",
    value: "512",
    change: "+5.4%",
    trend: "up",
    icon: BadgeCheck,
    color: "from-indigo-500 to-violet-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    textColor: "text-indigo-600 dark:text-indigo-400",
  },
];

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stats, index) => {
        return (
          <div
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border
          border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20
          dark:hover:shadow-slate-900/20 transition-all duration-300 group"
            key={index}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {stats.title}
                </p>
                <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  {stats.value}
                </p>
                <div className="flex items-center space-x-2">
                  {stats.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-semibold ${stats.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
                  >
                    {stats.change}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    vs Last month
                  </span>
                </div>
              </div>
              <div
                className={`p-3 rounded-xl ${stats.bgColor} group-hover:scale-100 transition-all duration-300`}
              >
                {
                  <stats.icon
                    className={`w-6 h-6 ${stats.textColor}`}
                  />
                }
              </div>
            </div>

            {/* Progressbar */}
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${stats.color} rounded-full transition-all duration-100`}
                style={{
                  width:
                    stats.trend === "up" ? "75%" : "45%",
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;
