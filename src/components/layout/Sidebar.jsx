import { Compass } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { mainNavItems, footerNavItems } from '../../constants/sidebarLinks';

/**
 * Application sidebar with brand header, main navigation, and footer actions.
 *
 * Layout: fixed-height flex column so the footer sticks to the bottom.
 * All nav items are data-driven via `sidebarLinks.js` and rendered
 * through the reusable `SidebarItem` component.
 */
export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen w-64 bg-white border-r border-slate-200 shrink-0">
      {/* ─── Brand ─── */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-slate-100">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-sm">
          <Compass size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-base font-bold text-slate-800 leading-tight tracking-tight">
            Tour Trip
          </h1>
          <p className="text-[11px] text-slate-500 leading-none mt-0.5">
            Admin Dashboard
          </p>
        </div>
      </div>

      {/* ─── Main navigation ─── */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1" aria-label="Main navigation">
        {mainNavItems.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </nav>

      {/* ─── Footer actions ─── */}
      <div className="px-3 py-4 border-t border-slate-100 space-y-1" aria-label="Settings and logout">
        {footerNavItems.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </div>
    </aside>
  );
}
