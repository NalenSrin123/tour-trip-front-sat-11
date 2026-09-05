import { useEffect, useMemo, useState } from "react";
import {
  Pencil,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "../../../App.css";

// Change this to your real backend URL later.
// Example:
// VITE_API_URL=http://localhost:5000/api
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Temporary data.
// This lets the page work before your backend/API is ready.
const demoTours = [
  {
    id: 1,
    tourId: "T-001",
    name: "Angkor Wat Sunrise Signature Experience",
    category: "CULTURAL HERITAGE",
    price: 85,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    tourId: "T-042",
    name: "Hidden Jungle Temples Trek",
    category: "ADVENTURE & NATURE",
    price: 120,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    tourId: "T-015",
    name: "Tonle Sap Floating Village Half-Day",
    category: "LOCAL EXPERIENCE",
    price: 45,
    status: "Inactive",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    tourId: "T-099",
    name: "Banteay Srei Temple Tour",
    category: "CULTURAL HERITAGE",
    price: 65,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    tourId: "T-112",
    name: "Preah Vihear Expedition",
    category: "ADVENTURE",
    price: 145,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 6,
    tourId: "T-067",
    name: "Mondulkiri Elephant Sanctuary",
    category: "ADVENTURE & NATURE",
    price: 95,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 7,
    tourId: "T-028",
    name: "Sihanoukville Beach Escape",
    category: "LOCAL EXPERIENCE",
    price: 110,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 8,
    tourId: "T-074",
    name: "Ratanakiri Jungle Trek",
    category: "ADVENTURE & NATURE",
    price: 130,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 9,
    tourId: "T-031",
    name: "Kep Crab Market Visit",
    category: "LOCAL EXPERIENCE",
    price: 40,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 10,
    tourId: "T-045",
    name: "Otres Beach Sunset Cruise",
    category: "LOCAL EXPERIENCE",
    price: 50,
    status: "Inactive",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&q=80",
  },
];

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");

  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  // ==========================================
  // GET TOURS FROM API
  // ==========================================

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await fetch(`${API_URL}/tours`);

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();

        setTours(data);
      } catch (error) {
        // Backend isn't connected yet.
        // Use demo data instead.
        console.log("Using demo tours:", error.message);

        setTours(demoTours);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  // ==========================================
  // SEARCH + FILTER
  // ==========================================

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        tour.name.toLowerCase().includes(searchText) ||
        tour.tourId.toLowerCase().includes(searchText);

      const matchesStatus =
        status === "All" || tour.status === status;

      const matchesCategory =
        category === "All" ||
        tour.category === category;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory
      );
    });
  }, [tours, search, status, category]);

  // ==========================================
  // PAGINATION
  // ==========================================

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTours.length / itemsPerPage)
  );

  const startIndex = (page - 1) * itemsPerPage;

  const currentTours = filteredTours.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // ==========================================
  // CATEGORIES
  // ==========================================

  const categories = [
    "All",
    ...new Set(tours.map((tour) => tour.category)),
  ];

  // ==========================================
  // DELETE TOUR
  // ==========================================

  const handleDelete = async (tour) => {
    const confirmDelete = window.confirm(
      `Delete "${tour.name}"?`
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await fetch(`${API_URL}/tours/${tour.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("API delete unavailable.");
    }

    // Remove from UI
    setTours((oldTours) =>
      oldTours.filter((item) => item.id !== tour.id)
    );
  };

  // ==========================================
  // EDIT TOUR
  // ==========================================

  const handleEdit = (tour) => {
    // Later you can navigate to:
    // /admin/tours/edit/${tour.id}

    console.log("Edit:", tour);

    alert(
      `Edit Tour\n\n${tour.name}\nTour ID: ${tour.tourId}`
    );
  };

  // ==========================================
  // PAGE CHANGE
  // ==========================================

  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return;
    }

    setPage(newPage);
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="tours-page">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading tours...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tours-page">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="tours-header">
        <div>
          <h1>Tours</h1>

          <p>
            Manage your tours and travel
            experiences
          </p>
        </div>

        <button className="add-tour-btn">
          + Add New Tour
        </button>
      </div>

      {/* =====================================
          FILTERS
      ====================================== */}

      <div className="tour-filters">

        {/* Search */}
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search tours..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>
        </select>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">
            All Categories
          </option>

          {categories
            .filter((item) => item !== "All")
            .map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>

      {/* =====================================
          TABLE
      ====================================== */}

      <div className="tours-card">

        {/* Table Header */}
        <div className="table-header">

          <div>THUMBNAIL</div>

          <div>TOUR NAME</div>

          <div>TOUR ID</div>

          <div>STARTING PRICE</div>

          <div>STATUS</div>

          <div>ACTIONS</div>

        </div>

        {/* Table Rows */}
        {currentTours.length > 0 ? (
          currentTours.map((tour) => (
            <div
              className="tour-row"
              key={tour.id}
            >

              {/* Image */}
              <div className="thumbnail">
                <img
                  src={tour.image}
                  alt={tour.name}
                />
              </div>

              {/* Name */}
              <div className="tour-info">
                <strong>
                  {tour.name}
                </strong>

                <span>
                  {tour.category}
                </span>
              </div>

              {/* ID */}
              <div className="tour-id">
                {tour.tourId}
              </div>

              {/* Price */}
              <div className="tour-price">
                ${Number(tour.price).toFixed(2)}
              </div>

              {/* Status */}
              <div>
                <span
                  className={`status-badge ${
                    tour.status === "Active"
                      ? "active"
                      : "inactive"
                  }`}
                >
                  {tour.status}
                </span>
              </div>

              {/* Actions */}
              <div className="actions">

                <button
                  onClick={() => handleEdit(tour)}
                  title="Edit"
                >
                  <Pencil size={18} />
                </button>

                <button
                  onClick={() => handleDelete(tour)}
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>
          ))
        ) : (
          <div className="no-results">
            No tours found.
          </div>
        )}

        {/* ===================================
            FOOTER
        ==================================== */}

        <div className="table-footer">

          <span>
            Showing{" "}
            {filteredTours.length === 0
              ? 0
              : startIndex + 1}{" "}
            to{" "}
            {Math.min(
              startIndex + itemsPerPage,
              filteredTours.length
            )}{" "}
            of {filteredTours.length} results
          </span>

          <div className="pagination">

            <button
              onClick={() =>
                changePage(page - 1)
              }
              disabled={page === 1}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            )
              .slice(0, 3)
              .map((number) => (
                <button
                  key={number}
                  className={
                    page === number
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    changePage(number)
                  }
                >
                  {number}
                </button>
              ))}

            {totalPages > 3 && (
              <>
                <span>...</span>

                <button
                  onClick={() =>
                    changePage(totalPages)
                  }
                  className={
                    page === totalPages
                      ? "selected"
                      : ""
                  }
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() =>
                changePage(page + 1)
              }
              disabled={page === totalPages}
            >
              Next
              <ChevronRight size={16} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ToursPage;
