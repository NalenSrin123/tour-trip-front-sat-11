import { CalendarDays, ChevronDown, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DestinationList from "../../components/DestinationList";

const heroImage =
  "https://i.pinimg.com/1200x/33/12/c8/3312c852051d2d7850d979456af159d5.jpg";

export default function PublicHome() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");

  function handleSearch(event) {
    event.preventDefault();
    navigate("/admin/masters/tours");
  }

  return (
    <main className="p-2 min-h-screen bg-[#f5f1e9] sm:p-3">
      <section className="min-h-[calc(100vh-1rem)] overflow-hidden rounded-xs text-white relative isolate sm:min-h-[calc(100vh-1.5rem)]">
        <img
          src={heroImage}
          alt="Angkor Wat at sunset"
          className="h-full w-full object-cover absolute inset-0 -z-20"
        />
        <div className="bg-[linear-gradient(90deg,rgba(5,28,34,0.18),rgba(16,42,92,0.08)_42%,rgba(15,48,128,0.6))] absolute inset-0 -z-10" />
        <div className="bg-[linear-gradient(0deg,rgba(4,24,30,0.42),transparent_48%)] absolute inset-0 -z-10" />

        <div className="flex-col px-5 pt-16 mx-auto w-full max-w-310 flex items-end sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="w-full max-w-155 text-left lg:mr-2">
            <p className="mb-4 text-xs font-semibold text-slate-950 tracking-[0.22em] sm:text-sm">
              DISCOVER · EXPLORE · REMEMBER
            </p>
            <h1 className="max-w-155 font-serif text-5xl text-white leading-[0.95] tracking-tight sm:text-6xl lg:text-[70px]">
              Explore Cambodia,
              <br />
              one trip at a time.
            </h1>
            <p className="mt-5 max-w-130 text-base text-gray-200 leading-7 sm:text-lg">
              Find beautiful places, unforgettable experiences, and tours made
              for your next adventure.
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="mt-28 p-3 w-full max-w-187.5 rounded-[20px] bg-[#121d59]/95 shadow-2xl shadow-slate-950/25 backdrop-blur-sm sm:mt-36 sm:flex sm:items-center sm:gap-1 sm:p-2"
          >
            <label className="flex-1 gap-3 px-3 py-3 min-w-0 border-b border-white/25 flex items-center sm:border-b-0 sm:border-r sm:px-5">
              <MapPin size={17} className="text-white/80 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold text-white/75 block tracking-[0.14em]">
                  WHERE
                </span>
                <input
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                  placeholder="Search destination"
                  className="mt-1 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/90"
                />
              </span>
            </label>
            <label className="flex-1 gap-3 px-3 py-3 min-w-0 border-b border-white/25 flex items-center sm:border-b-0 sm:border-r sm:px-5">
              <CalendarDays size={17} className="text-white/80 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold text-white/75 block tracking-[0.14em]">
                  DATE
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="mt-1 w-full bg-transparent text-sm text-white outline-none scheme-dark"
                />
              </span>
            </label>
            <label className="flex-1 gap-3 px-3 py-3 min-w-0 flex items-center sm:px-5">
              <Users size={17} className="text-white/80 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold text-white/75 block tracking-[0.14em]">
                  GUESTS
                </span>
                <select
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                  className="mt-1 w-full bg-transparent text-sm text-white appearance-none outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                    <option
                      key={count}
                      value={count}
                      className="text-slate-900"
                    >
                      {count} {count === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </span>
              <ChevronDown size={15} className="text-white/75 shrink-0" />
            </label>
            <button
              type="submit"
              className="gap-2 px-8 h-14 w-full justify-center rounded-[15px] bg-[#2942d8] font-serif text-2xl text-white inline-flex shrink-0 items-center transition hover:bg-[#3852eb] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:w-auto"
            >
              <Search size={19} />
              Search
            </button>
          </form>

          <div className="mt-3 px-4 py-2 rounded-full bg-white/75 text-xs text-slate-900 shadow-sm self-start backdrop-blur-sm sm:ml-1">
            ★★★★★ <strong>4.9/5</strong> from 2,000+ happy travelers
          </div>
        </div>
      </section>

      <section className="px-5 py-12 bg-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5">
            <p className="text-xs font-semibold text-red-400">TOP DESTINATION</p>
            <h2 className="text-2xl font-bold text-gray-800">
              Place worth discovering
            </h2>
            <p className="text-sm text-gray-500">
              Start with our most-loved destinations across Southeast Asia.
            </p>
          </div>
          <DestinationList />
        </div>
      </section>
    </main>
  );
}
