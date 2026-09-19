import React from "react";
import {
  FiDownload,
  FiFileText,
  FiCalendar,
  FiDollarSign,
  FiClipboard,
  FiCreditCard,
  FiRefreshCcw,
  FiTrendingUp,
  FiMoreVertical,
  FiArrowUpRight,
  FiArrowDownRight,
} from "react-icons/fi";

const Reports = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$124,500",
      percent: "+12.5%",
      type: "up",
      icon: <FiDollarSign />,
    },
    {
      title: "Total Bookings",
      value: "842",
      percent: "+5.2%",
      type: "up",
      icon: <FiClipboard />,
    },
    {
      title: "Avg. Order Value",
      value: "$147.80",
      percent: "-1.1%",
      type: "down",
      icon: <FiCreditCard />,
    },
    {
      title: "Refunds",
      value: "$2,100",
      percent: "0.0%",
      type: "normal",
      icon: <FiRefreshCcw />,
    },
  ];

  const tours = [
    {
      name: "Angkor Wat Sunrise Special",
      category: "Group",
      bookings: 145,
      revenue: "$12,500",
      trend: "up",
    },
    {
      name: "Bayon Temple Private Tour",
      category: "Private",
      bookings: 82,
      revenue: "$18,450",
      trend: "up",
    },
    {
      name: "Siem Reap Culinary Explorer",
      category: "Group",
      bookings: 110,
      revenue: "$8,200",
      trend: "down",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fc] p-6 lg:p-8">
      {/* TITLE */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Financial Reports
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Comprehensive overview of revenue and bookings.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-teal-600 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-50">
            <FiDownload />
            Download PDF
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800">
            <FiFileText />
            Export Excel
          </button>
        </div>
      </div>

      {/* FILTER */}
      <div className="mb-6 flex flex-wrap items-center gap-6 rounded-xl bg-white p-5 shadow-sm">
        <button className="flex items-center gap-2 rounded-lg border bg-gray-50 px-4 py-2 text-sm text-gray-700">
          <FiCalendar />
          Last 30 Days
        </button>

        <div className="flex items-center gap-5 text-sm">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="currency"
              defaultChecked
              className="accent-teal-700"
            />
            USD ($)
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="currency"
              className="accent-teal-700"
            />
            KHR (៛)
          </label>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between">
              <p className="text-sm font-medium text-gray-500">
                {card.title}
              </p>

              <div className="rounded-full bg-gray-100 p-2 text-teal-700">
                {card.icon}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              {card.value}
            </h2>

            <div className="mt-3 flex items-center gap-2 text-xs">
              <span
                className={`rounded-full px-2 py-1 font-medium ${
                  card.type === "up"
                    ? "bg-green-100 text-green-600"
                    : card.type === "down"
                    ? "bg-red-100 text-red-500"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {card.percent}
              </span>

              <span className="text-gray-400">
                vs last period
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* REVENUE CHART */}
        <div className="rounded-xl bg-white p-5 shadow-sm xl:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">
              Revenue vs. Bookings Trend
            </h3>

            <FiMoreVertical className="cursor-pointer text-gray-500" />
          </div>

          <div className="flex h-[300px] items-center justify-center rounded-lg border border-dashed border-gray-300 bg-[#eef2fb]">
            <div className="text-center text-gray-500">
              <FiTrendingUp className="mx-auto mb-3 text-3xl text-gray-400" />

              <p className="text-sm font-medium">
                Interactive Line Chart Placeholder
              </p>

              <p className="mt-1 text-xs">
                Integrate Recharts or Chart.js here
              </p>
            </div>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="mb-10 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">
              Revenue by Category
            </h3>

            <FiMoreVertical className="cursor-pointer text-gray-500" />
          </div>

          <div className="space-y-8">
            <CategoryBar
              title="Luxury"
              percent={75}
              barClass="bg-teal-700"
            />

            <CategoryBar
              title="Private"
              percent={55}
              barClass="bg-orange-400"
            />

            <CategoryBar
              title="Group"
              percent={30}
              barClass="bg-gray-400"
            />
          </div>
        </div>
      </div>

      {/* TOP TOURS */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h3 className="font-semibold text-gray-900">
            Top Performing Tours
          </h3>

          <button className="text-sm font-medium text-teal-700 hover:underline">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs text-gray-500">
              <tr>
                <th className="px-5 py-3 font-medium">
                  Tour Name
                </th>

                <th className="px-5 py-3 font-medium">
                  Category
                </th>

                <th className="px-5 py-3 text-center font-medium">
                  Bookings
                </th>

                <th className="px-5 py-3 text-right font-medium">
                  Revenue
                </th>

                <th className="px-5 py-3 text-center font-medium">
                  Trend
                </th>
              </tr>
            </thead>

            <tbody>
              {tours.map((tour, index) => (
                <tr
                  key={index}
                  className="border-t text-sm transition hover:bg-gray-50"
                >
                  <td className="px-5 py-4 font-medium text-gray-800">
                    {tour.name}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-md px-3 py-1 text-xs font-medium ${
                        tour.category === "Private"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {tour.category}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center text-gray-600">
                    {tour.bookings}
                  </td>

                  <td className="px-5 py-4 text-right font-medium">
                    {tour.revenue}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center">
                      {tour.trend === "up" ? (
                        <FiArrowUpRight className="text-green-500" />
                      ) : (
                        <FiArrowDownRight className="text-red-500" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const CategoryBar = ({ title, percent, barClass }) => {
  return (
    <div className="flex items-center gap-4">
      <p className="w-16 text-sm text-gray-600">
        {title}
      </p>

      <div className="h-4 flex-1 overflow-hidden rounded-full bg-blue-100">
        <div
          className={`h-full rounded-full ${barClass}`}
          style={{ width: `${percent}%` }}
        />
      </div>

      <span className="w-10 text-right text-sm text-gray-600">
        {percent}%
      </span>
    </div>
  );
};

export default Reports;