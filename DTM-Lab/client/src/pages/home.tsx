import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Reviews } from "@/components/sections/reviews";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      
      {/* About / Philosophy Section */}
      <section id="about" className="py-32 container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
           <h2 className="text-2xl md:text-4xl font-display mb-8 leading-tight">
             Мы не просто моем машины.<br />
             <span className="text-white/40">Мы возвращаем им первозданный вид.</span>
           </h2>
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-white/70 text-lg font-light leading-relaxed">
           <p>
             В отличие от крупных потоковых центров, DTM Lab — это место, где качеству уделяется персональное внимание.
           </p>
           <p>
             Это наш личный бизнес, и мы живем своей работой. Каждый автомобиль, попадающий к нам, проходит тщательную проверку и обслуживание, как если бы это был наш собственный автомобиль.
           </p>
        </div>
      </section>

      <Reviews />
      <Contact />

      <footer className="py-8 border-t border-white/5 text-center text-white/20 text-xs uppercase tracking-widest">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 DTM Lab. All rights reserved.</p>
          <p>Москва, Олимпийский проспект, 12</p>
        </div>
      </footer>
    </div>
  );
}