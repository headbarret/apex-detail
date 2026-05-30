export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            APEX<span>.</span>DETAIL
          </div>
          <div className="footer-copy">
            © {year} APEX Detail. Все права защищены.
          </div>
          <div className="footer-links">
            <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}>
              Услуги
            </a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" }); }}>
              Галерея
            </a>
            <a href="#contacts" onClick={(e) => { e.preventDefault(); document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" }); }}>
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
