import {
  LayoutDashboard,
  LayoutGrid,
  CalendarCheck,
  Users,
  BarChart3,
  Star,
  Settings,
  LogOut,
} from "lucide-react";

/**
 * @typedef {Object} NavLinkItem
 * @property {string} label - Visible text
 * @property {string} path  - Route path used for navigation + active matching
 * @property {import("lucide-react").LucideIcon} icon
 */

/** @type {NavLinkItem[]} */
export const sidebarLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Manage Masters", path: "/admin/categoriesPage", icon: LayoutGrid },
  { label: "Manage Bookings", path: "/admin/manageBooking", icon: CalendarCheck },
  { label: "Manage Customers", path: "/admin/customerList", icon: Users },
  { label: "Reports", path: "/admin/categoryViewModal", icon: BarChart3 },
  { label: "Reviews", path: "/admin/reviews", icon: Star },
];

/** @type {NavLinkItem[]} */
export const sidebarFooterLinks = [
  { label: "System Settings", path: "/admin/stepPersonal", icon: Settings },
  { label: "Logout", path: "/logout", icon: LogOut },
];
