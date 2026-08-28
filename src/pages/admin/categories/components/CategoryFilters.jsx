import { SearchIcon, XIcon, ChevronDownIcon } from './icons';

const STATUS_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

/** Search input + status filter + clear-filters control for the category table. */
export default function CategoryFilters({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  hasActiveFilters,
  onClearFilters,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <div className="group relative flex-1">
        <SearchIcon
          width={16}
          height={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-colors duration-200 group-focus-within:text-slate-600"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search category…"
          className="w-full h-10 pl-10 pr-4 text-sm rounded-full bg-slate-100/80 border border-slate-300 text-slate-900 placeholder:text-slate-500 outline-none transition-all duration-200 focus:bg-white focus:shadow-sm focus:ring-2 focus:ring-indigo-400/50"
        />
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <label htmlFor="category-status-filter" className="text-sm font-medium text-slate-600 whitespace-nowrap">
          Status:
        </label>
        <div className="relative">
          <select
            id="category-status-filter"
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            className="h-10 pl-3.5 pr-9 text-sm font-medium rounded-xl bg-white border border-slate-200 text-slate-800 outline-none appearance-none cursor-pointer transition-all duration-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          >
            {STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            width={14}
            height={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="flex items-center gap-1.5 px-3 h-10 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors duration-150"
          >
            <XIcon width={15} height={15} />
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
