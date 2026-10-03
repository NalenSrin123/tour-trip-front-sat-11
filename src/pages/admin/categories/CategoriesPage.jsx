import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as categoryService from "../../../services/categoryService";
import CategoryFilters from "./components/CategoryFilters";
import CategoryTable from "./components/CategoryTable";
import Pagination from "./components/Pagination";
import CategoryFormModal from "./components/CategoryFormModal";
import CategoryViewModal from "./components/CategoryViewModal";
import DeleteConfirmDialog from "./components/DeleteConfirmDialog";
import { PlusIcon, AlertTriangleIcon } from "./components/icons";

export default function CategoriesPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [formModal, setFormModal] = useState({ isOpen: false, category: null });
  const [viewModal, setViewModal] = useState({ isOpen: false, category: null });
  const [deleteDialog, setDeleteDialog] = useState({
    isOpen: false,
    category: null,
  });

  const loadCategories = useCallback(async () => {
    const token = localStorage.getItem("token")
      || localStorage.getItem("access_token")
      || localStorage.getItem("authToken");
    const config = {
      headers: {
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
    const endpoints = ["https://tour-trip-back-sat-11-laravel.onrender.com/api/categories"];

    setLoading(true);
    setError(null);

    try {
      let response;

      for (const endpoint of endpoints) {
        try {
          response = await axios.get(endpoint, config);
          break;
        } catch (requestError) {
          if (requestError.response?.status !== 404 || endpoint === endpoints.at(-1)) {
            throw requestError;
          }
        }
      }

      if (!response || response.status !== 200) {
        throw new Error("Unable to load categories.");
      }

      const payload = response.data;
      const list = Array.isArray(payload)
        ? payload
        : payload?.data ?? payload?.categories;

      if (!Array.isArray(list)) {
        throw new Error("The categories response has an unexpected format.");
      }

      setCategories(list.map((item) => ({
        ...item,
        id: item.id,
        name: item.name || item.name || "Untitled category",
        slug: item.description || item.slug || "-",
        toursCount: item.tours_count ?? item.tours?.length ?? 0,
      })));
    } catch (requestError) {
      const status = requestError.response?.status;
      const responseMessage = requestError.response?.data?.message;
      setError(
        status === 401
          ? "Your session has expired. Please sign in again."
          : status === 403
            ? "You do not have permission to view categories."
            : typeof responseMessage === "string"
              ? responseMessage
              : status === 404
                ? "Categories endpoint was not found."
                : status === 500
                  ? "The server could not load categories. Please try again."
                  : requestError.message || "Failed to load categories.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const filteredCategories = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return categories.filter((category) => {
      const matchesSearch = !term || category.name.toLowerCase().includes(term);
      const matchesStatus = statusFilter === "all" || category.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [categories, searchTerm, statusFilter]);

  const hasActiveFilters = searchTerm.trim() !== "" || statusFilter !== "all";

  function clearFilters() {
    setSearchTerm("");
    setStatusFilter("all");
  }

  const addCategory = useCallback(async (values) => {
    const created = await categoryService.createCategory(values);
    setCategories((previous) => [created, ...previous]);
    return created;
  }, []);

  const editCategory = useCallback(async (id, values) => {
    const updated = await categoryService.updateCategory(id, values);
    setCategories((previous) => previous.map((category) => (
      category.id === id ? updated : category
    )));
    return updated;
  }, []);

  const removeCategory = useCallback(async (id) => {
    await categoryService.deleteCategory(id);
    setCategories((previous) => previous.filter((category) => category.id !== id));
  }, []);

  function openCreateCategoryPage() {
    navigate("/admin/categories/create");
  }

  function openEditModal(category) {
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
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">Manage Categories</h1>
        <p className="mt-1 text-sm text-slate-500">Organize your tours into categories admins and customers can browse by.</p>
      </div>

      {/* ─── Main card ─── */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="flex-col gap-4 px-5 py-5 border-b border-slate-100 flex sm:px-6">
          <div className="flex-col gap-4 flex sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">Category Information</h2>
              <p className="mt-0.5 text-sm text-slate-500">Manage tour categories</p>
            </div>
            <button
              type="button"
              onClick={openCreateCategoryPage}
              className="gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl bg-teal-600 shadow-sm w-fit inline-flex items-center hover:bg-teal-700 transition-colors duration-150 shrink-0"
            >
              <PlusIcon width={17} height={17} />
              Add New Category
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
          <div className="flex-col gap-3 px-5 py-16 justify-center text-center flex items-center">
            <div className="justify-center w-12 h-12 rounded-full bg-rose-50 flex items-center">
              <AlertTriangleIcon width={22} height={22} className="text-rose-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">
                Couldn't load categories
              </p>
              <p className="text-sm text-slate-400 mt-0.5">{error}</p>
            </div>
            <button
              type="button"
              onClick={loadCategories}
              className="mt-1 px-4 py-2 text-sm font-medium text-white rounded-xl bg-slate-800 hover:bg-slate-900 transition-colors duration-150"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            <CategoryTable
              categories={filteredCategories}
              isLoading={loading}
              hasActiveFilters={hasActiveFilters}
              onClearFilters={clearFilters}
              onEdit={openEditModal}
              onDelete={openDeleteDialog}
            />
            {!loading && (
              <Pagination
                currentPage={1}
                totalPages={1}
                onPageChange={() => { }}
                totalCount={filteredCategories.length}
                pageSize={filteredCategories.length || 1}
              />
            )}
          </>
        )}
      </div>

      <CategoryFormModal
        key={formModal.category?.id ?? "new"}
        isOpen={formModal.isOpen}
        category={formModal.category}
        onClose={closeFormModal}
        onSubmit={handleFormSubmit}
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
