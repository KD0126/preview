import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Леонид",
    rating: 5,
    text: "Здесь работают профессионалы! Это сразу видно, как только попадаешь в их мастерскую - всё на своих местах, ничего лишнего, всё чисто и аккуратно. Преимущества налицо - эти люди живут своей работой, это их маленький личный бизнес.",
  },
  {
    name: "Роман",
    rating: 5,
    text: "Неоднократно оклеивал авто в у ребят. Отличный подход к клиенту и хорошо выполненная работа в указанные сроки! Думаю, этим все сказано!",
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-yellow-500">
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
            <Star className="fill-current w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl text-white font-display mb-4">Рейтинг 4.9</h2>
          <p className="text-white/40 uppercase tracking-widest text-sm">На основе 47 оценок</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-transparent border border-white/10 rounded-none relative h-full">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <Quote className="w-12 h-12 text-white" />
                </div>
                <CardContent className="p-8 flex flex-col h-full justify-between">
                  <p className="text-white/80 italic mb-6 leading-relaxed">"{review.text}"</p>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider">{review.name}</h4>
                    <div className="flex gap-1 mt-2">
                       {[...Array(review.rating)].map((_, i) => (
                         <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                       ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}