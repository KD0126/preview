import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/sleek_dark_luxury_car_detailing_studio_shot.png";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Luxury Car Detailing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.5em] text-white/60 mb-4 font-display">Москва • Олимпийский проспект, 12</h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tighter mix-blend-overlay opacity-90">
            DTM LAB
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Детейлинг. Оклейка. Мойка.<br />
            <span className="text-sm text-white/50 mt-2 block">Искусство ухода за вашим автомобилем</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none uppercase tracking-widest px-8 py-6 text-sm bg-transparent"
              onClick={scrollToServices}
            >
              Наши услуги
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToServices}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}