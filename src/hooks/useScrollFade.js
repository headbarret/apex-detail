import { useEffect, useRef } from "react";

export function useScrollFade() {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const items = section.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
