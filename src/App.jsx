import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Gallery />
        <WhyUs />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
