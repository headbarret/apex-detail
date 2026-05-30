import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Услуги", href: "#services" },
    { label: "До/После", href: "#before-after" },
    { label: "Галерея", href: "#gallery" },
    { label: "О нас", href: "#why-us" },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="header-logo">
          APEX<span>.</span>DETAIL
        </div>

        <nav>
          <ul className="header-nav">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(l.href);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href="#contacts"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contacts");
            }}
          >
            Связаться
          </a>
          <button
            className={`burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => {
              e.preventDefault();
              handleNav(l.href);
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contacts"
          style={{ color: "var(--accent)" }}
          onClick={(e) => {
            e.preventDefault();
            handleNav("#contacts");
          }}
        >
          Связаться →
        </a>
      </nav>
    </>
  );
}
