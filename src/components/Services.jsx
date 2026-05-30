import { useScrollFade } from "../hooks/useScrollFade";

const SERVICES = [
  {
    num: "01",
    title: "Полировка + Керамика 9H",
    desc: "Многоступенчатая полировка с устранением царапин и нанесением защитного керамического покрытия. Гидрофоб до 5 лет. Работаем только с составами Gtechniq, IGL и Nanolex.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20" strokeDasharray="4 3" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Тюнинг и антигравий",
    desc: "Внешний тюнинг, установка аэродинамических обвесов, защитная плёнка PPF и антигравийное покрытие на пороги, арки и бампер. Прозрачность и невидимость покрытия гарантированы.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Автозвук и шумоизоляция",
    desc: "Проектирование и монтаж аудиосистем любого уровня — от качественного стока до Hi-End инсталляций. Полный шумодемпфинг и виброизоляция кузова.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Перешив салона",
    desc: "Перетяжка руля, сидений, торпедо и потолка в алькантару, натуральную или экокожу. Индивидуальный крой, контрастная строчка и любые цветовые комбинации по ТЗ.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useScrollFade();

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="section-label fade-in">Что мы делаем</div>
        <h2 className="section-title fade-in fade-in-delay-1">
          Полный цикл работ с&nbsp;<span>вашим</span>&nbsp;автомобилем
        </h2>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`service-card fade-in fade-in-delay-${i + 1}`}
            >
              <div className="service-card-number">{s.num}</div>
              <div className="service-card-icon">{s.icon}</div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
              <div className="service-card-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
