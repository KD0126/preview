import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-6xl text-white font-display mb-12">Контакты</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Адрес</h3>
                  <p className="text-white/60">Москва, Олимпийский проспект, 12</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Время работы</h3>
                  <p className="text-white/60">Ежедневно: 10:30 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">Телефон</h3>
                  <a href="tel:+79161330014" className="text-white/60 hover:text-white transition-colors">
                    +7 (916) 133-00-14
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Button asChild className="bg-[#24A1DE] hover:bg-[#24A1DE]/80 text-white rounded-none w-full md:w-auto h-12">
                <a href="https://t.me/dtmlab" target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4 mr-2" /> Telegram
                </a>
              </Button>
              <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/80 text-white rounded-none w-full md:w-auto h-12">
                <a href="https://api.whatsapp.com/message/UKP5LU4ULDPSK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                   <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] bg-zinc-900 relative grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
             <iframe 
               src="https://yandex.ru/map-widget/v1/?ll=37.621714%2C55.777599&z=17&pt=37.621714%2C55.777599" 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               allowFullScreen 
               className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}