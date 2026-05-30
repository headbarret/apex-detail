import { useState, useRef, useCallback, useEffect } from "react";
import { useScrollFade } from "../hooks/useScrollFade";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const wrapperRef = useRef(null);
  const isDragging = useRef(false);
  const sectionRef = useScrollFade();

  const calcPos = useCallback((clientX) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    calcPos(e.clientX);
  }, [calcPos]);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    calcPos(e.clientX);
  }, [calcPos]);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onTouchMove = useCallback((e) => {
    calcPos(e.touches[0].clientX);
  }, [calcPos]);

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <section className="before-after" id="before-after" ref={sectionRef}>
      <div className="container">
        <div className="before-after-content">
          <div className="section-label fade-in" style={{ justifyContent: "center" }}>
            Результаты работ
          </div>
          <h2 className="section-title fade-in fade-in-delay-1" style={{ marginBottom: 12 }}>
            До и <span>После</span>
          </h2>
          <p className="fade-in fade-in-delay-2" style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: 0 }}>
            Перетащите разделитель, чтобы сравнить состояние до и после обработки
          </p>
        </div>

        <div className="fade-in fade-in-delay-2">
          <div
            className="slider-wrapper"
            ref={wrapperRef}
            onMouseDown={onMouseDown}
            onTouchMove={onTouchMove}
            onTouchStart={(e) => calcPos(e.touches[0].clientX)}
            style={{ cursor: "col-resize" }}
          >
            {/* BEFORE */}
            <div className="slider-before">
              <img
                src="images/before.jpg"
                alt="До полировки — тусклый кузов"
                draggable={false}
                style={{ filter: "saturate(0.5) brightness(0.7) contrast(1.2)" }}
              />
            </div>

            {/* AFTER — clipped */}
            <div
              className="slider-after"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="images/after.jpg"
                alt="После полировки — зеркальный блеск"
                draggable={false}
                style={{ filter: "saturate(1.3) brightness(1.1) contrast(1.05)" }}
              />
            </div>

            {/* Divider line */}
            <div
              className="slider-divider"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="slider-handle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="slider-labels">
              <span className="slider-label">До</span>
              <span className="slider-label label-after">После</span>
            </div>
          </div>

          <p className="slider-caption">
            <strong>BMW M3</strong> — разница видна невооружённым глазом.
            Керамика 9H + трёхэтапная машинная полировка.
          </p>
        </div>
      </div>
    </section>
  );
}
