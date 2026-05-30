import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div
        ref={bgRef}
        className={`hero-bg${loaded ? " loaded" : ""}`}
        style={{
          backgroundImage:
            "url('images/hero-bg.jpg')",
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-overlay-bottom" />

      <div className="hero-content">
        <div className="hero-badge fade-in visible">
          Детейлинг &amp; Тюнинг — Москва
        </div>

        <h1 className="hero-title fade-in visible fade-in-delay-1">
          Детейлинг, который{" "}
          <em>видно.</em>
          <br />
          Тюнинг, который{" "}
          <em>слышно.</em>
        </h1>

        <p className="hero-subtitle fade-in visible fade-in-delay-2">
          Полировка, керамика, перешив салона, автозвук —
          без компромиссов. Работаем с авто от&nbsp;3&nbsp;млн&nbsp;₽.
        </p>

        <div className="hero-buttons fade-in visible fade-in-delay-3">
          <button
            className="btn-primary"
            onClick={() => handleScroll("#gallery")}
          >
            Смотреть работы
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="btn-outline"
            onClick={() => handleScroll("#contacts")}
          >
            Обсудить проект
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
        Листай вниз
      </div>
    </section>
  );
}
