const STYLES = {
  active: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200',
  inactive: 'bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-200',
};

const DOT_STYLES = {
  active: 'bg-emerald-500',
  inactive: 'bg-rose-500',
};

/** Small pill badge showing a category's Active / Inactive status. */
export default function StatusBadge({ status }) {
  const isActive = status === 'active';
  const label = isActive ? 'Active' : 'Inactive';

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium',
        STYLES[status] ?? STYLES.inactive,
      ].join(' ')}
    >
      <span className={['h-1.5 w-1.5 rounded-full', DOT_STYLES[status] ?? DOT_STYLES.inactive].join(' ')} />
      {label}
    </span>
  );
}
