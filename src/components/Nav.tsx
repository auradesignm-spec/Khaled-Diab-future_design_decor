import { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "ar");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled
          ? "bg-charcoal/80 backdrop-blur-md border-gold/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-cream-light hover:text-gold transition-colors">
          <BrandLogo className="w-10 h-10" color="var(--color-gold)" />
          <span className="font-serif tracking-widest uppercase text-sm md:text-base">
            Khaled Diab
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#about" className="text-cream-light hover:text-gold transition-colors uppercase">
            <span className="ar">من نحن</span>
            <span className="en">About Us</span>
          </a>
          <a href="#design-services" className="text-cream-light hover:text-gold transition-colors uppercase">
            <span className="ar">خدمات التصميم</span>
            <span className="en">Design Services</span>
          </a>
          <a href="#execution-services" className="text-cream-light hover:text-gold transition-colors uppercase">
            <span className="ar">خدمات التنفيذ</span>
            <span className="en">Execution Services</span>
          </a>
          <a href="#contact" className="text-cream-light hover:text-gold transition-colors uppercase">
            <span className="ar">تواصل معنا</span>
            <span className="en">Contact Us</span>
          </a>
        </div>

        <button
          onClick={toggleLang}
          className="text-xs tracking-widest text-gold hover:text-cream-light transition-colors uppercase px-4 py-2 border border-gold/30 rounded-full hover:bg-gold/10"
        >
          {lang === "ar" ? "English" : "عربي"}
        </button>
      </div>
    </nav>
  );
}
