import {
  LayoutDashboard,
  LayoutGrid,
  CalendarCheck,
  Users,
  BarChart3,
  Star,
  Settings,
  LogOut,
} from 'lucide-react';

/**
 * Main navigation items displayed in the sidebar body.
 * Each item maps to a route path and uses a lucide-react icon component.
 *
 * @typedef {Object} NavItem
 * @property {string}   label - Display text for the nav item
 * @property {string}   path  - Route path the item links to
 * @property {import('lucide-react').LucideIcon} icon - Lucide icon component
 */

/** @type {NavItem[]} */
export const mainNavItems = [
  { label: 'Dashboard',        path: '/admin',                  icon: LayoutDashboard },
  { label: 'Manage Masters',   path: '/admin/manage-masters',   icon: LayoutGrid },
  { label: 'Manage Bookings',  path: '/admin/manage-bookings',  icon: CalendarCheck },
  { label: 'Manage Customers', path: '/admin/manage-customers', icon: Users },
  { label: 'Reports',          path: '/admin/reports',           icon: BarChart3 },
  { label: 'Reviews',          path: '/admin/reviews',           icon: Star },
];

/**
 * Footer navigation items displayed at the bottom of the sidebar.
 * Separated from main nav for visual grouping (settings, logout, etc.).
 *
 * @type {NavItem[]}
 */
export const footerNavItems = [
  { label: 'System Settings', path: '/admin/settings', icon: Settings },
  { label: 'Logout',          path: '/logout',          icon: LogOut },
];
