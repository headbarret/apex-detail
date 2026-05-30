import { useState, useEffect, useCallback } from "react";
import { useScrollFade } from "../hooks/useScrollFade";

const PHOTOS = [
  {
    id: 1,
    src: "images/gallery-1.jpg",
    thumb: "images/gallery-1.jpg",
    label: "Описание",
  },
  {
    id: 2,
    src: "images/gallery-2.jpg",
    thumb: "images/gallery-2.jpg",
    label: "Описание",
  },
  {
    id: 3,
    src: "images/gallery-3.jpg",
    thumb: "images/gallery-3.jpg",
    label: "Описание",
  },
  {
    id: 4,
    src: "images/gallery-4.jpg",
    thumb: "images/gallery-4.jpg",
    label: "Описание",
  },
  {
    id: 5,
    src: "images/gallery-5.jpg",
    thumb: "images/gallery-5.jpg",
    label: "Описание",
  },
  {
    id: 6,
    src: "images/gallery-6.jpg",
    thumb: "images/gallery-6.jpg",
    label: "Описание",
  },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const sectionRef = useScrollFade();

  const close = useCallback(() => setLightboxIdx(null), []);

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i === 0 ? PHOTOS.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setLightboxIdx((i) => (i === PHOTOS.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIdx, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  return (
    <section className="gallery" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-label fade-in">Наши работы</div>
        <h2 className="section-title fade-in fade-in-delay-1">
          Портфолио <span>проектов</span>
        </h2>

        <div className="gallery-grid" style={{ marginTop: 60 }}>
          {PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              className={`gallery-item fade-in fade-in-delay-${(idx % 3) + 1}`}
              onClick={() => setLightboxIdx(idx)}
            >
              <img src={photo.thumb} alt={photo.label} loading="lazy" />
              <div className="gallery-item-overlay">
                <div className="gallery-zoom-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div className="lightbox-inner">
            <img
              src={PHOTOS[lightboxIdx].src}
              alt={PHOTOS[lightboxIdx].label}
            />

            <button className="lightbox-close" onClick={close} aria-label="Закрыть">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <button className="lightbox-nav prev" onClick={prev} aria-label="Предыдущее">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button className="lightbox-nav next" onClick={next} aria-label="Следующее">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="lightbox-counter">
              {lightboxIdx + 1} / {PHOTOS.length} — {PHOTOS[lightboxIdx].label}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
