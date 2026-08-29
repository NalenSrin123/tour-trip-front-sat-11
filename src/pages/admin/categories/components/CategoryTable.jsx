import StatusBadge from './StatusBadge';
import { getCategoryVisual } from './categoryVisuals';
import { EyeIcon, EditIcon, TrashIcon, InboxIcon } from './icons';

const COLUMNS = ['ID', 'Category Name', 'Description', 'Tours', 'Status', 'Created Date', 'Actions'];

function formatDate(isoDate) {
  if (!isoDate) return '—';
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function SkeletonRows() {
  return Array.from({ length: 5 }).map((_, i) => (
    <tr key={i} className="border-b border-slate-100 last:border-0">
      {COLUMNS.map((col) => (
        <td key={col} className="px-5 py-4">
          <div className="h-4 bg-slate-100 rounded animate-pulse" style={{ width: `${40 + Math.random() * 40}%` }} />
        </td>
      ))}
    </tr>
  ));
}

function EmptyState({ hasActiveFilters, onClearFilters }) {
  return (
    <tr>
      <td colSpan={COLUMNS.length} className="px-5 py-16">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50">
            <InboxIcon width={22} height={22} className="text-slate-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700">
              {hasActiveFilters ? 'No categories match your filters' : 'No categories yet'}
            </p>
            <p className="text-sm text-slate-400 mt-0.5">
              {hasActiveFilters
                ? 'Try a different search term or status.'
                : 'Click "+ Add Category" to create your first one.'}
            </p>
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="mt-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Clear filters
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

function ActionButton({ label, tone, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={[
        'flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 text-slate-500 bg-white transition-colors duration-150',
        tone,
      ].join(' ')}
    >
      {children}
    </button>
  );
}

/** Category data table with loading skeleton and empty state built in. */
export default function CategoryTable({ categories, isLoading, hasActiveFilters, onClearFilters, onView, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            {COLUMNS.map((col) => (
              <th
                key={col}
                className={[
                  'px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 whitespace-nowrap',
                  col === 'Actions' ? 'text-right' : '',
                ].join(' ')}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <SkeletonRows />
          ) : categories.length === 0 ? (
            <EmptyState hasActiveFilters={hasActiveFilters} onClearFilters={onClearFilters} />
          ) : (
            categories.map((category) => {
              const visual = getCategoryVisual(category.icon);
              const VisualIcon = visual.icon;
              return (
                <tr key={category.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors duration-150">
                  <td className="px-5 py-4 text-sm text-slate-500 font-medium">#{String(category.id).padStart(3, '0')}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {category.image ? (
                        <img
                          src={category.image}
                          alt=""
                          className="w-9 h-9 rounded-xl object-cover border border-slate-200 shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className={['flex items-center justify-center w-9 h-9 rounded-xl shrink-0', visual.bg].join(' ')}>
                          <VisualIcon width={18} height={18} className={visual.fg} />
                        </div>
                      )}
                      <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">{category.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-500 max-w-xs">
                    <p className="truncate">{category.description || '—'}</p>
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-slate-700">{category.toursCount}</td>
                  <td className="px-5 py-4">
                    <StatusBadge status={category.status} />
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-500 whitespace-nowrap">{formatDate(category.createdDate)}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <ActionButton
                        label={`View ${category.name}`}
                        tone="hover:bg-slate-50 hover:text-slate-700"
                        onClick={() => onView(category)}
                      >
                        <EyeIcon width={15} height={15} />
                      </ActionButton>
                      <ActionButton
                        label={`Edit ${category.name}`}
                        tone="hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                        onClick={() => onEdit(category)}
                      >
                        <EditIcon width={15} height={15} />
                      </ActionButton>
                      <ActionButton
                        label={`Delete ${category.name}`}
                        tone="hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200"
                        onClick={() => onDelete(category)}
                      >
                        <TrashIcon width={15} height={15} />
                      </ActionButton>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
