import {
  Headphones,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Star,
  Tag,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description:
      "We are a trusted local tour operator with experienced guides and quality service.",
  },
  {
    icon: Users,
    title: "Local Experts",
    description:
      "Our local guides know the best places and hidden gems to make your trip extra special.",
  },
  {
    icon: Star,
    title: "Memorable Experiences",
    description:
      "We design unique tours that give you real cultural connections and lasting memories.",
  },
  {
    icon: Tag,
    title: "Best Price Guarantee",
    description:
      "We offer competitive prices with no hidden fees, ensuring great value for your money.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our friendly support team is available anytime to assist you before and during your trip.",
  },
];

const stats = [
  { icon: ShoppingBag, value: "500+", label: "Tours Complete" },
  { icon: Users, value: "1,000+", label: "Happy Travelers" },
  { icon: MapPin, value: "50+", label: "Destinations" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
  { icon: Headphones, value: "24/7", label: "Customer Support" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section
        className="bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/1200x/d0/3f/c5/d03fc55d02ec00d746bb0880c2b57047.jpg)",
        }}
      >
        <div className="bg-black/30 absolute inset-0" />
        <div className="px-6 py-16 z-10 mx-auto max-w-7xl relative sm:px-8 sm:py-24">
          <p className="text-sm font-semibold text-orange-300 uppercase tracking-widest">
            About Us
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            About Tour-Trip
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white leading-7 sm:text-lg">
            We are passionate about travel and dedicated to helping you discover
            the world&apos;s most amazing places with unforgettable experiences.
          </p>
        </div>
      </section>

      <div className="px-6 py-12 mx-auto max-w-7xl sm:px-8 sm:py-16">
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-5 font-serif text-3xl font-bold text-slate-800">
              Who We Are
            </h2>
            <p className="mb-5 text-slate-600 leading-8">
              Tour-Trip is a local tour company based in Cambodia. We specialize
              in creating authentic travel experiences that connect you with
              the culture, history, and natural beauty of our country.
            </p>
            <p className="text-slate-600 leading-8">
              Our team of professional guides and travel experts is here to
              ensure your journey is safe, comfortable, and truly memorable.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://i.pinimg.com/736x/db/5e/50/db5e50841178c4ac96601cd2a96ed7a4.jpg"
              alt="Cambodian temple surrounded by greenery"
              className="col-span-2 h-full min-h-64 w-full rounded-xl object-cover"
            />
            <div className="flex-col gap-4 flex">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Tropical beach"
                className="h-40 w-full rounded-xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947"
                alt="Local food experience"
                className="h-40 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section
          aria-label="Why travel with Tour-Trip"
          className="mt-14 px-6 py-10 rounded-xl bg-blue-700 text-white sm:px-8"
        >
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {features.map(({ icon: Icon, title, description }) => (
              <article key={title} className="gap-4 flex">
                <div className="h-14 w-14 justify-center rounded-full border border-cyan-300 flex shrink-0 items-center">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-blue-100 leading-6">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-label="Tour-Trip statistics"
          className="grid mt-16 gap-8 pt-12 border-t sm:grid-cols-2 xl:grid-cols-5"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="gap-4 flex items-center xl:border-r xl:pr-6 xl:last:border-r-0">
              <Icon size={42} className="text-slate-800 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
                <p className="text-slate-600">{label}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}