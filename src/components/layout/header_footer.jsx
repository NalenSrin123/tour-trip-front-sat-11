import { useState } from "react";

const NAV_LINKS = ["Home", "Tour", "About", "Contact", "Detail content"];

const FOOTER_LINKS = {
  Company: ["About Us", "Our Services", "Careers", "Blog"],
  Support: ["FAQ", "Terms & Conditions", "Privacy Policy", "Contact Us"],
};

const DESTINATIONS = ["Siem Reap", "Phnom Penh", "Sihanoukville", "Kampot"];

const styles = `
  /* ---------- Header ---------- */
  .tourtrip-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(14, 31, 53, 0.08);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  }

  .tourtrip-brand {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
  }

  .tourtrip-logo {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #0ea5e9, #2563eb);
    color: white;
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
  }

  .tourtrip-nav {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .tourtrip-nav-list {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tourtrip-nav-list a {
    text-decoration: none;
    color: #1e293b;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .tourtrip-nav-list a:hover {
    color: #2563eb;
  }

  .tourtrip-header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .tourtrip-booking-link,
  .tourtrip-signin-btn {
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .tourtrip-booking-link {
    color: #0f172a;
  }

  .tourtrip-signin-btn {
    padding: 0.7rem 1.2rem;
    border-radius: 999px;
    background: #2563eb;
    color: #fff;
    box-shadow: 0 10px 18px rgba(37, 99, 235, 0.2);
  }

  .tourtrip-signin-btn:hover {
    background: #1d4ed8;
  }

  .tourtrip-nav-toggle {
    display: none;
    border: none;
    background: transparent;
    font-size: 1.8rem;
    cursor: pointer;
    color: #0f172a;
  }

  @media (max-width: 768px) {
    .tourtrip-header {
      flex-wrap: wrap;
      padding: 1rem 1.25rem;
    }

    .tourtrip-nav-toggle {
      display: block;
    }

    .tourtrip-nav {
      width: 100%;
      display: none;
    }

    .tourtrip-nav.open {
      display: block;
    }

    .tourtrip-nav-list {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.9rem;
      padding-top: 0.75rem;
    }

    .tourtrip-header-actions {
      margin-left: auto;
    }
  }

  /* ---------- Footer ---------- */
  .tt-site-footer {
    background: #2b3161;
    color: #cfd2ea;
    padding: 3rem 3rem 0;
  }

  .tt-footer-top {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1fr 1.3fr;
    gap: 2rem;
    padding-bottom: 2.5rem;
  }

  .tt-footer-logo-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
  }

  .tt-footer-logo-text {
    font-weight: 700;
    font-size: 1.1rem;
    color: #fff;
  }

  .tt-footer-brand p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #cfd2ea;
    max-width: 320px;
  }

  .tt-footer-col h4 {
    color: #fff;
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .tt-footer-col ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .tt-footer-col ul li a {
    color: #e3e5f5;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .tt-footer-col ul li a:hover {
    color: #fff;
  }

  .tt-pin-list li {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #e3e5f5;
  }

  .tt-pin-list .tt-pin {
    font-style: normal;
    font-size: 0.85rem;
  }

  .tt-footer-newsletter p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #cfd2ea;
    margin-bottom: 1.1rem;
  }

  .tt-subscribe-row {
    display: flex;
    gap: 0.5rem;
  }

  .tt-subscribe-row input {
    flex: 1;
    min-width: 0;
    padding: 0.65rem 0.9rem;
    border: none;
    border-radius: 6px;
    font-size: 0.85rem;
    color: #1a1a1a;
  }

  .tt-subscribe-row button {
    background: #3f9e5c;
    color: #fff;
    border: none;
    padding: 0.65rem 1.1rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    white-space: nowrap;
  }

  .tt-subscribe-row button:hover {
    background: #338049;
  }

  .tt-footer-bottom {
    text-align: center;
    font-size: 0.85rem;
    color: #9fa3c9;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 900px) {
    .tt-footer-top {
      grid-template-columns: 1fr 1fr;
    }
    .tt-footer-brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 560px) {
    .tt-footer-top {
      grid-template-columns: 1fr;
    }
    .tt-site-footer {
      padding: 2.5rem 1.5rem 0;
    }
  }
`;

export default function HeaderFooter() {
  const [navOpen, setNavOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) return;
    // Wire this up to your newsletter provider.
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <>
      <style>{styles}</style>

      <header className="tourtrip-header">
        <div className="tourtrip-brand">
          <div className="tourtrip-logo">🌏</div>
          <span>Tour-Trip</span>
        </div>

        <button
          className="tourtrip-nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setNavOpen((open) => !open)}
        >
          ☰
        </button>

        <nav
          className={navOpen ? "tourtrip-nav open" : "tourtrip-nav"}
          aria-label="Main navigation"
        >
          <ul className="tourtrip-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="tourtrip-header-actions">
          <a href="#" className="tourtrip-booking-link">
            Booking
          </a>
          <a href="#" className="tourtrip-signin-btn">
            Sign in
          </a>
        </div>
      </header>

      <footer className="tt-site-footer">
        <div className="tt-footer-top">
          <div className="tt-footer-col tt-footer-brand">
            <div className="tt-footer-logo-row">
              <div className="tourtrip-logo">🌏</div>
              <span className="tt-footer-logo-text">Tour-Trip</span>
            </div>
            <p>
              Explore amazing destinations, create unforgettable memories, and
              enjoy your journey with Tour-Trip.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div className="tt-footer-col" key={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="tt-footer-col">
            <h4>Popular destinations</h4>
            <ul className="tt-pin-list">
              {DESTINATIONS.map((place) => (
                <li key={place}>
                  <i className="tt-pin">📍</i>
                  {place}
                </li>
              ))}
            </ul>
          </div>

          <div className="tt-footer-col tt-footer-newsletter">
            <h4>Newsletter</h4>
            <p>
              Subscribe to get the latest tours, travel tips, and special
              offers.
            </p>
            <div className="tt-subscribe-row">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="button" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="tt-footer-bottom">
          &copy; 2026 Tour-Trip. All rights reserved.
        </div>
      </footer>
    </>
  );
}
