import { useState } from 'react';
import { useCategories } from './hooks/useCategories';
import CategoryFilters from './components/CategoryFilters';
import CategoryTable from './components/CategoryTable';
import Pagination from './components/Pagination';
import CategoryFormModal from './components/CategoryFormModal';
import CategoryViewModal from './components/CategoryViewModal';
import DeleteConfirmDialog from './components/DeleteConfirmDialog';
import { PlusIcon, AlertTriangleIcon } from './components/icons';


export default function CategoriesPage() {
  const {
    categories,
    isLoading,
    error,
    retry,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    hasActiveFilters,
    clearFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    totalFilteredCount,
    pageSize,
    addCategory,
    editCategory,
    removeCategory,
  } = useCategories();

  const [formModal, setFormModal] = useState({ isOpen: false, category: null });
  const [viewModal, setViewModal] = useState({ isOpen: false, category: null });
  const [deleteDialog, setDeleteDialog] = useState({ isOpen: false, category: null });

  function openAddModal() {
    setFormModal({ isOpen: true, category: null });
  }

  function openEditModal(category) {
    setViewModal({ isOpen: false, category: null });
    setFormModal({ isOpen: true, category });
  }

  function closeFormModal() {
    setFormModal({ isOpen: false, category: null });
  }

  async function handleFormSubmit(values) {
    if (formModal.category) {
      await editCategory(formModal.category.id, values);
    } else {
      await addCategory(values);
    }
    closeFormModal();
  }

  function openViewModal(category) {
    setViewModal({ isOpen: true, category });
  }

  function closeViewModal() {
    setViewModal({ isOpen: false, category: null });
  }

  function openDeleteDialog(category) {
    setDeleteDialog({ isOpen: true, category });
  }

  function closeDeleteDialog() {
    setDeleteDialog({ isOpen: false, category: null });
  }

  async function handleConfirmDelete(id) {
    await removeCategory(id);
    closeDeleteDialog();
  }

  return (
    <div className="p-6 space-y-6">
      {/* ─── Page header ─── */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Tour Categories</h1>
        <p className="text-sm text-slate-500 mt-1">Organize your tours into categories admins and customers can browse by.</p>
      </div>

      {/* ─── Main card ─── */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="flex flex-col gap-4 px-5 sm:px-6 py-5 border-b border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800">Category Information</h2>
              <p className="text-sm text-slate-500 mt-0.5">Manage tour categories</p>
            </div>
            <button
              type="button"
              onClick={openAddModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 shadow-sm hover:from-indigo-600 hover:to-blue-700 transition-all duration-150 w-fit shrink-0"
            >
              <PlusIcon width={17} height={17} />
              Add Category
            </button>
          </div>

          <CategoryFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearFilters}
          />
        </div>

        {error ? (
          <div className="flex flex-col items-center justify-center text-center gap-3 px-5 py-16">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-50">
              <AlertTriangleIcon width={22} height={22} className="text-rose-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Couldn't load categories</p>
              <p className="text-sm text-slate-400 mt-0.5">{error}</p>
            </div>
            <button
              type="button"
              onClick={retry}
              className="mt-1 px-4 py-2 text-sm font-medium text-white rounded-xl bg-slate-800 hover:bg-slate-900 transition-colors duration-150"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            <CategoryTable
              categories={categories}
              isLoading={isLoading}
              hasActiveFilters={hasActiveFilters}
              onClearFilters={clearFilters}
              onView={openViewModal}
              onEdit={openEditModal}
              onDelete={openDeleteDialog}
            />
            {!isLoading && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalCount={totalFilteredCount}
                pageSize={pageSize}
              />
            )}
          </>
        )}
      </div>

      <CategoryFormModal
        key={formModal.category?.id ?? 'new'}
        isOpen={formModal.isOpen}
        category={formModal.category}
        onClose={closeFormModal}
        onSubmit={handleFormSubmit}
      />

      <CategoryViewModal
        isOpen={viewModal.isOpen}
        category={viewModal.category}
        onClose={closeViewModal}
      />

      <DeleteConfirmDialog
        isOpen={deleteDialog.isOpen}
        category={deleteDialog.category}
        onCancel={closeDeleteDialog}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}