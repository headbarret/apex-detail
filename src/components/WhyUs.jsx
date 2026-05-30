import { useScrollFade } from "../hooks/useScrollFade";

const CARDS = [
  {
    num: "01",
    title: "Премиум-материалы",
    text: "Работаем исключительно с сертифицированными составами: Gtechniq, IGL Coatings, Nanolex, Stek. Никакой «китайской» химии — только проверенные продукты с гарантией производителя.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Опыт с авто от 3 млн",
    text: "Более 6 лет мастерская специализируется на работе с премиальными и спортивными автомобилями. Ferrari, Lamborghini, Porsche, BMW M-серии — наш ежедневный контекст.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Гарантия на работы",
    text: "Письменная гарантия на все виды работ: 12 месяцев на полировку, до 5 лет на керамическое покрытие 9H, пожизненная гарантия на аудиоинсталляции при соблюдении условий.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const sectionRef = useScrollFade();

  return (
    <section className="why-us" id="why-us" ref={sectionRef}>
      <div className="why-us-bg-glow" />
      <div className="container">
        <div className="section-label fade-in">Наши преимущества</div>
        <h2 className="section-title fade-in fade-in-delay-1">
          Почему выбирают <span>APEX</span>
        </h2>

        <div className="why-us-grid">
          {CARDS.map((card, i) => (
            <div
              key={card.num}
              className={`why-card fade-in fade-in-delay-${i + 1}`}
            >
              <div className="why-card-num">{card.num}</div>
              <div className="why-card-icon-wrap">{card.icon}</div>
              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
