            import { useMemo, useState } from "react";
            import angkorHero from "../../../assets/images/trips/Angkor-Wat(1).jpg";
            import angkorGallery from "../../../assets/images/trips/angkor-gallery(1).jpg";
            import oldMarket from "../../../assets/images/trips/Arrival & Siem Reap City.jpg";
            import tonleLake from "../../../assets/images/trips/tonle-lake(1).jpg";
            import lilyAvatar from "../../../assets/images/avatars/Lina.jpg";
            import linaAvatar from "../../../assets/images/avatars/Lily.jpg";
            import danielAvatar from "../../../assets/images/avatars/Daniel.jpg";

            import kohRongImage from "../../../assets/images/trips/Kohrong(1).jpg";
            import kampotImage from "../../../assets/images/trips/KP.jpg";
            import phnomPenhImage from "../../../assets/images/trips/PP at night.jpg";
            import mondulkiriImage from "../../../assets/images/trips/mondulkiri.jpg";
            import { Link } from "react-router-dom";
            import {
            ArrowLeft,
            ArrowRight,
            CalendarDays,
            Check,
            ChevronLeft,
            ChevronRight,
            Clock3,
           
            MapPin,
            Plane,
            Star,
            Users,
            Languages,
            X,
            Plus,
            Minus,
            CreditCard,

            } from "lucide-react";

            const TRIP = {
            title: "Angkor Temple & Siem Reap Adventure",
            category: "Cultural Trip",
            price: 299,
            rating: 4.9,
            reviewCount: 128,
            duration: "3 Days / 2 Nights",
            destination: "Siem Reap",
            groupSize: "2-12 people",
            description:
                "Discover the majestic Angkor temples, experience local culture, and enjoy the beauty of Tonlé Sap Lake. This 3-day adventure is designed for travelers who want to experience the best of Siem Reap in one memorable journey.",
            images: [
                angkorHero,
                oldMarket,
                tonleLake,
            ],
            itinerary: [
                {
                day: "Day 1",
                title: "Arrival & Siem Reap City",
                image: oldMarket,
                activities: [
                    "Airport pickup",
                    "Hotel check-in",
                    "Explore the Old Market",
                    "Dinner at a local restaurant",
                ],
                },
                {
                day: "Day 2",
                title: "Angkor Temple Tour",
                image: angkorGallery,
                activities: [
                    "5:00 AM - Angkor Wat sunrise",
                    "8:00 AM - Breakfast",
                    "9:00 AM - Bayon Temple",
                    "11:00 AM - Ta Prohm",
                    "1:00 PM - Lunch",
                    "3:00 PM - Free time",
                    "7:00 PM - Dinner",
                ],
                },

                {
                day: "Day 3",
                title: "Tonlé Sap & Departure",
                image: tonleLake,
                activities: [
                    "8:00 AM - Breakfast",
                    "9:00 AM - Tonlé Sap Lake",
                    "12:00 PM - Lunch",
                    "2:00 PM - Free time",
                    "4:00 PM - Airport transfer",
                ],
                },
            ],
            included: [
                "Hotel accommodation",
                "Daily breakfast",
                "English-speaking tour guide",
                "Private transportation",
                "Entrance tickets",
                "Airport pickup & drop-off",
            ],
            excluded: [
                "International flights",
                "Personal expenses",
                "Travel insurance",
                "Lunch and dinner unless specified",
                "Tips for guide and driver",
            ],

            info: [
                ["Duration", "3 Days / 2 Nights", Clock3],
                ["Destination", "Siem Reap", MapPin],
                ["Group Size", "2-12 people", Users],
                ["Difficulty", "Easy", Star],
                ["Language", "English", Languages],
                ["Best Time", "Nov - Mar", CalendarDays],
                ["Departure", "Daily", Plane],
            ],
            
            reviews: [
                {
                name: "Lily",
                rating: 5,
                text: "Amazing experience! The temples were beautiful and our guide was very helpful.",
                avatar: lilyAvatar,
                },
                {
                name: "Lina",
                rating: 5,
                text: "Everything was well organized from airport pickup to the temple tour.",
                avatar: linaAvatar,
                },
                {
                name: "Daniel",
                rating: 5,
                text: "A great balance of temples, local culture and relaxing free time.",
                avatar: danielAvatar,
                },
            ],
            };

            const RECOMMENDED_TRIPS = [
            {
                id: "phnom-penh-city-tour",
                title: "Phnom Penh City Tour",
                duration: "1 Day Tour",
                price: 199,
                image: phnomPenhImage,
            },
            {
                id: "koh-rong-island-escape",
                title: "Koh Rong Island Escape",
                duration: "3 Days / 2 Nights",
                price: 169,
                image: kohRongImage,
            },
            {
                id: "mondulkiri-province",
                title: "Mondulkiri Province",
                duration: "2 Day Tour",
                price: 120,
                image: mondulkiriImage,
            },
            {
                id: "kampot-province",
                title: "Kampot Province",
                duration: "3 Days / 2 Nights",
                price: 220,
                image: kampotImage,
            },
           ];

            function Stars({ value = 5 }) {
            return (
                <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label={`${value} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />
                ))}
                </span>
            );
            }

            function SectionTitle({ children, action }) {
            return (
                <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">{children}</h2>
                {action}
                </div>
            );
            }

            export default function TripDetailPage() {
            const [activeImage, setActiveImage] = useState(0);
            const [activeDay, setActiveDay] = useState(0);
            const [liked, setLiked] = useState(false);
            const [reviewStart, setReviewStart] = useState(0);
            const [travelers, setTravelers] = useState(2);

            const visibleReviews = useMemo(() => {
                const result = [];
                for (let i = 0; i < Math.min(2, TRIP.reviews.length); i += 1) {
                result.push(TRIP.reviews[(reviewStart + i) % TRIP.reviews.length]);
                }
                return result;
            }, [reviewStart]);

            const totalPrice = TRIP.price * travelers;
            const nextImage = () => setActiveImage((current) => (current + 1) % TRIP.images.length);
            const previousImage = () => setActiveImage((current) => (current - 1 + TRIP.images.length) % TRIP.images.length);

            const decreaseTravelers = () => {
                setTravelers((current) => Math.max(1, current - 1));
            };

            const increaseTravelers = () => {
                setTravelers((current) => Math.min(12, current + 1));
            };

            return (
                <div className="min-h-screen bg-white text-slate-800">
                <main className="mx-auto max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">                 
                    <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <div className="order-2 lg:order-1">
                        
                    <h1
                            className="mt-0 max-w-2xl text-3xl leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]"
                            style={{ fontFamily: '"Mongolian Baiti", serif' }}>
                        
                            {TRIP.title}
                        </h1>
                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-slate-900">
                            <Star size={17} fill="currentColor" className="text-amber-400" /> {TRIP.rating}
                        </span>
                        <span>({TRIP.reviewCount} reviews)</span>
                        <span className="hidden h-4 w-px bg-slate-200 sm:block" />
                        <span className="inline-flex items-center gap-1.5"><Clock3 size={16} /> {TRIP.duration}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin size={16} /> {TRIP.destination}</span>
                        <span className="inline-flex items-center gap-1.5"><Users size={16} /> {TRIP.groupSize}</span>
                        </div>

                        <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">{TRIP.description}</p>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200">
                        <img
                            src={TRIP.images[activeImage]}
                            alt={TRIP.title}
                            className="h-[330px] w-full object-cover transition duration-500 sm:h-[410px] lg:h-[450px]"
                        />
                        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                            <span className="rounded-full bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                            {activeImage + 1} / {TRIP.images.length}
                            </span>
                            <div className="flex gap-2">
                            <button onClick={previousImage} className="grid size-9 place-items-center rounded-full bg-white/90 text-slate-800 shadow transition hover:bg-white" aria-label="Previous image">
                                <ChevronLeft size={18} />
                            </button>
                            <button onClick={nextImage} className="grid size-9 place-items-center rounded-full bg-white/90 text-slate-800 shadow transition hover:bg-white" aria-label="Next image">
                                <ChevronRight size={18} />
                            </button>
                            </div>
                        </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-3">
                        {TRIP.images.map((image, index) => (
                            <button
                            key={image}
                            onClick={() => setActiveImage(index)}
                            className={`overflow-hidden rounded-xl ring-2 transition ${activeImage === index ? "ring-indigo-500" : "ring-transparent hover:ring-slate-200"}`}
                            aria-label={`Show image ${index + 1}`}
                            >
                            <img src={image} alt="" className="h-20 w-full object-cover sm:h-24" />
                            </button>
                        ))}
                        </div>
                    </div>
                    </section>

                    
                    <section className="mt-14">
                    <SectionTitle>Itinerary</SectionTitle>
                    <div className="mb-6 flex gap-7 overflow-x-auto border-b border-slate-200">
                        {TRIP.itinerary.map((item, index) => (
                        <button
                            key={item.day}
                            onClick={() => setActiveDay(index)}
                            className={`relative shrink-0 pb-3 text-sm font-semibold transition ${activeDay === index ? "text-indigo-600" : "text-slate-500 hover:text-slate-800"}`}
                        >
                            {item.day}
                            {activeDay === index && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-indigo-600" />}
                        </button>
                        ))}
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {TRIP.itinerary.map((item, index) => (
                        <article
                            key={item.day}
                            className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition ${activeDay === index ? "border-indigo-200 shadow-md" : "border-slate-200"}`}
                        >
                            <div className="relative">
                            <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                            <span className="absolute left-3 top-3 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm">{item.day}</span>
                            </div>
                            <div className="p-5">
                            <h3 className="font-bold text-slate-900">{item.title}</h3>
                            <ul className="mt-4 space-y-2 text-sm text-slate-600">
                                {item.activities.map((activity) => (
                                <li key={activity} className="flex gap-2 leading-5">
                                    <Check size={16} className="mt-0.5 shrink-0 text-indigo-600" />
                                    <span>{activity}</span>
                                </li>
                                ))}
                            </ul>
                            </div>
                        </article>
                        ))}
                    </div>
                    </section>

                    
                    <section className="mt-12 grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
                        <h2 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                        <span className="grid size-8 place-items-center rounded-full bg-emerald-500 text-white"><Check size={17} /></span>
                        What's Included
                        </h2>
                        <ul className="mt-5 space-y-3 text-sm text-slate-700">
                        {TRIP.included.map((item) => (
                            <li key={item} className="flex gap-3"><Check size={17} className="mt-0.5 shrink-0 text-emerald-600" /> {item}</li>
                        ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-rose-100 bg-rose-50/45 p-6">
                        <h2 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                        <span className="grid size-8 place-items-center rounded-full bg-rose-500 text-white"><X size={17} /></span>
                        What's Not Included
                        </h2>
                        <ul className="mt-5 space-y-3 text-sm text-slate-700">
                        {TRIP.excluded.map((item) => (
                            <li key={item} className="flex gap-3"><X size={17} className="mt-0.5 shrink-0 text-rose-500" /> {item}</li>
                        ))}
                        </ul>
                    </div>
                    </section>

                
                    <section className="mt-12">
                    <SectionTitle>Tour Information</SectionTitle>
                    <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-4 lg:grid-cols-7">
                        {TRIP.info.map(([label, value, Icon], index) => (
                        <div key={label} className={`p-5 ${index > 0 ? "border-l border-slate-200" : ""} ${index >= 2 ? "border-t md:border-t-0" : ""}`}>
                            <Icon size={19} className="text-indigo-600" />
                            <p className="mt-3 text-xs font-medium text-slate-500">{label}</p>
                            <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
                        </div>
                        ))}
                    </div>
                    </section>

                
                    <section className="mt-12">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <SectionTitle>Reviews</SectionTitle>
                        <div className="mb-5 flex items-center gap-3 text-sm">
                        <span className="font-bold text-slate-900">{TRIP.rating} / 5</span>
                        <Stars value={5} />
                        <span className="text-slate-500">{TRIP.reviewCount} Reviews</span>
                        </div>
                    </div>

                    <div className="relative grid gap-5 md:grid-cols-2">
                        {visibleReviews.map((review) => (
                        <article key={`${review.name}-${review.text}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                            <img src={review.avatar} alt={review.name} className="size-11 rounded-full object-cover ring-2 ring-slate-100" />
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">{review.name}</h3>
                                <div className="mt-1 flex items-center gap-2"><Stars value={review.rating} /><span className="text-xs font-medium text-slate-500">5.0</span></div>
                            </div>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-slate-600">{review.text}</p>
                        </article>
                        ))}

                        <button
                        type="button"
                        onClick={() => setReviewStart((current) => (current - 1 + TRIP.reviews.length) % TRIP.reviews.length)}
                        className="absolute -left-4 top-1/2 hidden size-9 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-indigo-600 md:grid"
                        aria-label="Previous reviews"
                        >
                        <ArrowLeft size={17} />
                        </button>
                        <button
                        type="button"
                        onClick={() => setReviewStart((current) => (current + 1) % TRIP.reviews.length)}
                        className="absolute -right-4 top-1/2 hidden size-9 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-indigo-600 md:grid"
                        aria-label="Next reviews"
                        >
                        <ArrowRight size={17} />
                        </button>
                    </div>

                    <div className="mt-5 flex justify-center gap-1.5">
                        {TRIP.reviews.map((review, index) => (
                        <button
                            key={review.name}
                            onClick={() => setReviewStart(index)}
                            className={`h-1.5 rounded-full transition-all ${index === reviewStart ? "w-6 bg-indigo-600" : "w-1.5 bg-slate-300"}`}
                            aria-label={`Show review ${index + 1}`}
                        />
                        ))}
                    </div>
                    </section>


                    <section className="mt-14 border-t border-slate-200 pt-10">
                            <div className="rounded-2xl bg-white">
                            <div className="grid items-center gap-7 md:grid-cols-[1.3fr_auto_1fr_auto]">

                                <div>
                                <h2
                                    className="text-xl font-bold text-slate-900 md:text-2xl"
                                    style={{
                                        fontFamily: '"Mongolian Baiti", serif',
                                    }}
                                >
                                    Ready for your adventure?
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Book your trip today and discover the wonders of Cambodia.
                                </p>

                                <p className="mt-3 text-xl font-bold text-emerald-700">
                                    ${TRIP.price}
                                    <span className="ml-1 text-sm font-medium text-slate-500">
                                        /person
                                    </span>
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center overflow-hidden rounded-lg border border-slate-200 bg-white">

                                    <button
                                        type="button"
                                        onClick={decreaseTravelers}
                                        disabled={travelers <= 1}
                                        className="grid size-10 place-items-center text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <Minus size={17} />
                                    </button>

                                    <span className="min-w-10 text-center text-sm font-bold text-slate-900">
                                        {travelers}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={increaseTravelers}
                                        disabled={travelers >= 12}
                                        className="grid size-10 place-items-center text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <Plus size={17} />
                                    </button>

                                </div>

                                <span className="mt-2 text-sm font-medium text-slate-700">
                                    {travelers} {travelers === 1 ? "Traveler" : "Travelers"}
                                </span>
                            </div>

                            <div className="md:border-l md:border-slate-200 md:pl-7">
                                <p className="text-sm font-semibold text-slate-600">
                                    Total:
                                </p>

                                <p className="mt-1 text-2xl font-bold text-emerald-700">
                                    ${totalPrice}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                            >
                                <CreditCard size={20} />
                                Book This Tour
                            </button>

                        </div>
                    </div>
                </section>

                <section className="mt-14">
                    <SectionTitle>
                        You may also like
                    </SectionTitle>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {RECOMMENDED_TRIPS.map((trip) => (
                    <Link
                        key={trip.id}
                        to={`/trips/${trip.id}`}
                        className="group block"
                    >
                        <article>
                            <div className="overflow-hidden rounded-xl bg-slate-100">
                                <img
                                    src={trip.image}
                                    alt={trip.title}
                                    className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-3">
                                <h3 className="text-sm font-bold text-slate-900 transition group-hover:text-emerald-700">
                                    {trip.title}
                                </h3>

                                <p className="mt-1 text-xs text-slate-600">
                                    {trip.duration}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    From{" "}
                                    <span className="font-semibold text-slate-900">
                                        ${trip.price}
                                    </span>{" "}
                                    / person
                                </p>
                            </div>
                        </article>
                    </Link>
                ))}
                </div>
                </section>
                
                </main>
                </div>
            );
            }
