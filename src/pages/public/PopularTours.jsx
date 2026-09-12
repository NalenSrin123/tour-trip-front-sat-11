import { useState } from "react";
import {
  Heart,
  MapPin,
  Star,
  Trees,
  Umbrella,
  Landmark,
  Users,
  Mountain,
} from "lucide-react";
import { PopularTourData } from "../../data/PopularTourData";

function PopularTours() {
  const [activeCategory, setActiveCategory] = useState("All Tours");

  const categories = [
    { name: "All Tours", icon: null },
    { name: "Adventure", icon: Trees },
    { name: "Beach", icon: Umbrella },
    { name: "Culture", icon: Landmark },
    { name: "Family", icon: Users },
    { name: "Nature", icon: Mountain },
  ];

  const filteredTours =
    activeCategory === "All Tours"
      ? PopularTourData
      : PopularTourData.filter(
          (tour) => tour.category === activeCategory
        );

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Category Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`
                  flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium duration-300
                  ${
                    activeCategory === category.name
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }
                `}
              >
                {Icon && <Icon size={18} />}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Section Title */}
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
              alt="logo"
              className="h-8 w-8"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Popular Tours
            </h2>
            <p className="text-slate-500">
              Explore Cambodia's most loved destinations
            </p>
          </div>
        </div>

        {/* Tour Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Heart */}
                <button
                  className="
                    absolute right-3 top-3
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-white/80 backdrop-blur
                    text-slate-600 shadow-md
                    transition hover:text-red-500
                  "
                >
                  <Heart size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
                  {tour.title}
                </h3>

                <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                  <MapPin size={14} className="text-blue-500" />
                  <span>{tour.location}</span>
                </div>

                <p className="mt-1 text-sm text-slate-400">
                  {tour.duration}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">
                      Starting From
                    </p>

                    <p className="text-lg font-bold text-red-500">
                      ${tour.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-600">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {tour.rating}
                  </div>
                </div>

                <button
                  className="
                    mt-5 w-full rounded-xl
                    bg-blue-600 py-2.5
                    font-medium text-white
                    transition duration-300
                    hover:bg-blue-700
                  "
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTours.length === 0 && (
          <div className="mt-10 text-center text-slate-500">
            No tours found.
          </div>
        )}
      </div>
    </section>
  );
}

export default PopularTours;