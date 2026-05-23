import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Instagram, MapPin } from "lucide-react";
import Nav from "@/components/Nav";
import BrandLogo from "@/components/BrandLogo";

/* ─── المكونات الأساسية للبساطة والاستقرار ─── */
const Section = ({ children, id }: any) => (
  <section id={id} className="py-20 px-6 container mx-auto">
    {children}
  </section>
);

export default function HomePage() {
  return (
    <div className="bg-charcoal min-h-screen text-white overflow-x-hidden">
      <Nav />
      
      {/* Hero */}
      <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
         <BrandLogo className="w-32 h-24 text-gold mb-8" />
         <h1 className="text-5xl md:text-7xl font-serif mb-6">Future Design</h1>
         <p className="text-gold tracking-[0.3em] uppercase text-sm">Decore & Interior Architecture</p>
      </section>

      {/* About */}
      <Section id="about">
        <h2 className="text-4xl font-serif mb-8 text-gold">من نحن</h2>
        <p className="text-lg leading-relaxed max-w-2xl">
          في فيوتشر ديزاين ديكور، نؤمن بأن كل مساحة تروي قصة. نقدم حلولاً متكاملة من التصميم حتى التنفيذ بأعلى معايير الجودة.
        </p>
      </Section>

      {/* Portfolio - معرض الصور (بشكل شبكي بسيط ومضمون) */}
      <Section id="portfolio">
        <h2 className="text-4xl font-serif mb-12 text-gold">معرض الإبداع</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* استراحة مهنا */}
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="aspect-[4/5] bg-black/20 border border-gold/10 overflow-hidden">
               <img src={`/work-${i}.jpeg`} alt="Project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
             </div>
           ))}
        </div>
      </Section>

      {/* Contact - البيانات المصححة */}
      <Section id="contact">
         <h2 className="text-4xl font-serif mb-12 text-gold">تواصل معنا</h2>
         <div className="space-y-6">
            <div className="flex items-center gap-4 text-lg">
               <Phone className="text-gold" />
               <a href="https://wa.link/gitycp" className="hover:text-gold transition">+968 7753 3603</a>
            </div>
            <div className="flex items-center gap-4 text-lg">
               <Instagram className="text-gold" />
               <a href="https://www.instagram.com/future_design_decor" className="hover:text-gold transition">@future_design_decor</a>
            </div>
            <div className="flex items-center gap-4 text-lg">
               <MapPin className="text-gold" />
               <span>سلطنة عُمان</span>
            </div>
         </div>
      </Section>
      
      <footer className="py-10 text-center text-white/30 text-sm border-t border-white/5">
        © 2026 Future Design Decore
      </footer>
    </div>
  );
}
