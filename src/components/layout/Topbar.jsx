import { useState } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

/**
 * Top bar with search input, notification bell, and profile trigger.
 *
 * The profile section is structured as a clickable trigger that exposes
 * `isProfileOpen` state — a parent or sibling component can consume
 * this to render a dropdown menu later.
 */
export default function Topbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 shrink-0">
      {/* ─── Search ─── */}
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          id="topbar-search"
          type="text"
          placeholder="Search anything…"
          className={[
            'w-full pl-10 pr-4 py-2 text-sm rounded-xl',
            'bg-slate-50 border border-slate-200 text-slate-700 placeholder:text-slate-400',
            'outline-none transition-all duration-200',
            'focus:border-amber-400 focus:ring-2 focus:ring-amber-100 focus:bg-white',
          ].join(' ')}
        />
      </div>

      {/* ─── Right actions ─── */}
      <div className="flex items-center gap-5 ml-6">
        {/* Notification bell */}
        <button
          id="topbar-notifications"
          type="button"
          className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors duration-200"
          aria-label="View notifications"
        >
          <Bell size={20} />

          {/* Unread indicator dot with pulse animation */}
          <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
          </span>
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-slate-200" aria-hidden="true" />

        {/* Profile trigger */}
        <button
          id="topbar-profile-trigger"
          type="button"
          onClick={() => setIsProfileOpen((prev) => !prev)}
          className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-50 transition-colors duration-200"
          aria-expanded={isProfileOpen}
          aria-haspopup="true"
        >
          {/* Avatar placeholder */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-sm font-bold shadow-sm">
            AT
          </div>

          {/* Name & role */}
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-slate-700 leading-tight">Admin User</p>
            <p className="text-xs text-slate-400 leading-tight">Administrator</p>
          </div>

          <ChevronDown
            size={16}
            className={[
              'text-slate-400 transition-transform duration-200',
              isProfileOpen ? 'rotate-180' : '',
            ].join(' ')}
          />
        </button>

        {/* ─── Profile dropdown placeholder ─── */}
        {/* 
          When ready to build the dropdown, render it conditionally here
          based on `isProfileOpen`. The trigger above already manages the
          toggle state and sets aria-expanded / aria-haspopup.
          
          Example:
          {isProfileOpen && <ProfileDropdown onClose={() => setIsProfileOpen(false)} />}
        */}
      </div>
    </header>
  );
}
