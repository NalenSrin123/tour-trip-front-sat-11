import { ShieldCheck, Users, Star, Tag, Headphones, ShoppingBag, MapPin} from "lucide-react";

function AboutPage() {
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
    {
      icon: ShoppingBag,
      value: "500+",
      label: "Tours Complete",
    },
    {
      icon: Users,
      value: "10,00+",
      label: "Happy Travelers",
    },
    {
      icon: MapPin,
      value: "50+",
      label: "Destinations",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Rating",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "Customer Support",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "https://i.pinimg.com/1200x/d0/3f/c5/d03fc55d02ec00d746bb0880c2b57047.jpg",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 px-10 py-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            About Us
          </p>

          <h1 className="mt-2 text-5xl font-bold text-slate-800">
            About Tour-Trip
          </h1>

          <p className="mt-4 max-w-lg text-lg text-slate-700">
            We are passionate about travel and dedicated to helping you
            discover the world's most amazing places with unforgettable
            experiences.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-slate-800">
              Who We Are
            </h2>

            <p className="mb-5 text-slate-600 leading-8">
              Tour-Trip is a local tour company based in Cambodia.
              We specialize in creating authentic travel experiences
              that connect you with the culture, history, and natural
              beauty of our country.
            </p>

            <p className="text-slate-600 leading-8">
              Our team of professional guides and travel experts is
              here to ensure your journey is safe, comfortable,
              and truly memorable.
            </p>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://i.pinimg.com/736x/db/5e/50/db5e50841178c4ac96601cd2a96ed7a4.jpg"
              alt=""
              className="col-span-2 h-full rounded-xl object-cover"
            />

            <div className="flex flex-col gap-4">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt=""
                className="h-40 rounded-xl object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947"
                alt=""
                className="h-40 rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-14 rounded-2xl bg-blue-600 px-8 py-10 text-white">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-blue-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-8 border-t pt-12 md:grid-cols-2 xl:grid-cols-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 border-r last:border-r-0 pr-6"
              >
                <Icon
                  size={46}
                  className="text-slate-800"
                />

                <div>
                  <h3 className="text-3xl font-bold text-slate-800">
                    {item.value}
                  </h3>

                  <p className="text-slate-600">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;