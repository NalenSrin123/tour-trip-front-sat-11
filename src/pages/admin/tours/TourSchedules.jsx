import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiEye,
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiStar,
} from "react-icons/fi";

const TourSchedules = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const tours = [
    {
      tour_id: 1,
      category_id: 1,
      destination_id: 101,
      title: "Angkor Wat Sunrise Tour",
      price: 35,
      duration: "1 Day",
      rating_avg: 4.8,
      created_at: "2026-09-01",
    },
    {
      tour_id: 2,
      category_id: 2,
      destination_id: 102,
      title: "Phnom Penh City Tour",
      price: 25,
      duration: "1 Day",
      rating_avg: 4.6,
      created_at: "2026-09-02",
    },
    {
      tour_id: 3,
      category_id: 1,
      destination_id: 103,
      title: "Siem Reap Adventure",
      price: 80,
      duration: "3 Days",
      rating_avg: 4.9,
      created_at: "2026-09-03",
    },
    {
      tour_id: 4,
      category_id: 3,
      destination_id: 104,
      title: "Koh Rong Beach Tour",
      price: 55,
      duration: "2 Days",
      rating_avg: 4.7,
      created_at: "2026-09-04",
    },
  ];
  const filteredTours = tours.filter((tour) =>
    tour.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-4 min-h-screen bg-slate-100 md:p-6">
      <div className="flex-col mb-6 gap-4 flex md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Tour Schedules</h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage all tour schedules
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/admin/masters/tours/create")}
          className="gap-2 px-5 py-3 justify-center rounded-xl bg-blue-600 font-semibold text-white shadow-sm flex items-center transition hover:bg-blue-700">
          <FiPlus size={20} />
          Add Tour Schedule
        </button>
      </div>
      <div className="grid grid-cols-1 mb-6 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Tours */}
        <div className="p-5 rounded-2xl bg-white shadow-sm">
          <p className="text-sm text-slate-500">Total Tours</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {tours.length}
          </h2>
        </div>
        <div className="p-5 rounded-2xl bg-white shadow-sm">
          <p className="text-sm text-slate-500">Average Price</p>

          <h2 className="mt-2 text-2xl font-bold text-blue-600">$48.75</h2>
        </div>
        <div className="p-5 rounded-2xl bg-white shadow-sm">
          <p className="text-sm text-slate-500">Average Rating</p>

          <h2 className="mt-2 gap-1 text-2xl font-bold text-slate-800 flex items-center">
            4.7
            <FiStar size={20} className="text-yellow-400 fill-yellow-400" />
          </h2>
        </div>
        <div className="p-5 rounded-2xl bg-white shadow-sm">
          <p className="text-sm text-slate-500">Active Tours</p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {tours.length}
          </h2>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex-col gap-4 p-5 border-b border-slate-200 flex md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              All Tour Schedules
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {filteredTours.length} schedules found
            </p>
          </div>
          <div className="w-full relative md:w-80">
            <FiSearch
              size={19}
              className="top-1/2 text-slate-400 absolute left-3 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search tour schedule..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-3 w-full rounded-xl border border-slate-200 bg-slate-50 text-sm pl-10 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-275 text-left">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200">
                <th className="px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  ID
                </th>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Tour
                </th>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Destination
                </th>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Price
                </th>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Duration
                </th>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Rating
                </th>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Created
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTours.length > 0 ? (
                filteredTours.map((tour) => (
                  <tr
                    key={tour.tour_id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <span className="font-semibold text-slate-600">
                        #{tour.tour_id}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-semibold text-slate-800">
                          {tour.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          Category #{tour.category_id}
                        </p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="gap-2 text-sm text-slate-600 flex items-center">
                        <FiMapPin size={17} className="text-blue-500" />
                        Destination #{tour.destination_id}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="gap-1 font-bold text-blue-600 flex items-center">
                        <FiDollarSign size={16} />
                        {tour.price}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="gap-2 text-sm text-slate-600 flex items-center">
                        <FiClock size={16} className="text-slate-400" />
                        {tour.duration}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="gap-1 flex items-center">
                        <FiStar
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                        <span className="font-semibold text-slate-700">
                          {tour.rating_avg}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-slate-500">
                        {tour.created_at}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="gap-2 justify-center flex">
                        <button
                          title="View"
                          className="p-2 rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                        >
                          <FiEye size={17} />
                        </button>

                        {/* Edit */}
                        <button
                          title="Edit"
                          className="p-2 rounded-lg bg-yellow-50 text-yellow-600 transition hover:bg-yellow-100"
                        >
                          <FiEdit size={17} />
                        </button>

                        {/* Delete */}
                        <button
                          title="Delete"
                          className="p-2 rounded-lg bg-red-50 text-red-600 transition hover:bg-red-100"
                        >
                          <FiTrash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-5 py-12 text-center text-slate-500"
                  >
                    No tour schedules found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex-col gap-3 p-5 border-t border-slate-200 flex sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredTours.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">{tours.length}</span>{" "}
            tours
          </p>

          <div className="gap-2 flex">
            <button className="px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-500 transition hover:bg-slate-50">
              Previous
            </button>

            <button className="px-4 py-2 rounded-lg bg-blue-600 text-sm font-semibold text-white">
              1
            </button>

            <button className="px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-500 transition hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSchedules;
