import { motion } from "framer-motion";
import fullWrapImg from "@assets/generated_images/car_in_paint_protection_film_wrap.png";
import cleaningImg from "@assets/generated_images/car_interior_dry_cleaning_detail.png";
import polishingImg from "@assets/generated_images/car_body_polishing_process_closeup.png";
import colorWrapImg from "@assets/generated_images/colorful_car_vinyl_wrap_change.png";
import riskZonesImg from "@assets/generated_images/car_front_hood_protective_wrap.png";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "full-wrap",
    title: "Полная оклейка авто",
    price: "260 000 ₽",
    description: "Полная защита кузова премиальной антигравийной пленкой для максимальной сохранности.",
    image: fullWrapImg,
    features: ["Защита от сколов", "Самовосстановление", "Гидрофобный эффект"]
  },
  {
    id: "risk-zones",
    title: "Оклейка зон риска",
    price: "95 000 ₽",
    description: "Защита наиболее уязвимых частей: капот, бампер, крылья, зеркала и фары.",
    image: riskZonesImg,
    features: ["Передняя часть", "Зеркала", "Фары"]
  },
  {
    id: "color-wrap",
    title: "Оклейка в цветную пленку",
    price: "260 000 ₽",
    description: "Смена имиджа вашего автомобиля с использованием качественного винила мировых брендов.",
    image: colorWrapImg,
    features: ["Любые цвета", "Матовые и глянцевые", "Индивидуальный стиль"]
  },
  {
    id: "polishing",
    title: "Глубокая полировка + Керамика",
    price: "42 000 ₽",
    description: "Восстановление блеска и нанесение защитного керамического покрытия 9H.",
    image: polishingImg,
    features: ["Удаление царапин", "Зеркальный блеск", "Защита на 12 месяцев"]
  },
  {
    id: "cleaning",
    title: "Химчистка авто",
    price: "19 000 ₽",
    description: "Глубокая очистка всех элементов интерьера с разбором и использованием безопасной химии.",
    image: cleaningImg,
    features: ["Удаление пятен", "Озонирование", "Консервация кожи"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl text-white font-display mb-4">Услуги</h2>
            <div className="h-1 w-24 bg-white/20 mx-auto md:mx-0"></div>
          </div>
          <p className="text-white/60 max-w-md text-center md:text-right">
            Профессиональный детейлинг и защита вашего автомобиля с гарантией качества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group bg-zinc-900/50 border-white/5 overflow-hidden rounded-none h-full hover:border-white/20 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-1 font-display text-sm font-bold">
                    {service.price}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider leading-tight">{service.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1 h-1 bg-white/50 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}