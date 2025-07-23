import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-16 bg-gradient-to-r from-musical-soft to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-musical-warm text-center mb-12">
            Contacta amb nosaltres
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="text-center group">
              <div className="bg-musical-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-musical-gold/30 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-musical-gold" />
              </div>
              <h3 className="text-xl font-semibold text-musical-warm mb-2">Adreça</h3>
              <p className="text-musical-warm/70">
                Carrer de Nicolau Primitiu Gómez, 10, Patraix,<br />
                46014 València
              </p>
            </div>

            {/* Email */}
            <div className="text-center group">
              <div className="bg-musical-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-musical-gold/30 transition-colors duration-300">
                <Mail className="w-8 h-8 text-musical-gold" />
              </div>
              <h3 className="text-xl font-semibold text-musical-warm mb-2">Email</h3>
              <a 
                href="mailto:info@amsantisidre.es" 
                className="text-musical-warm/70 hover:text-musical-gold transition-colors duration-300"
              >
                info@amsantisidre.es
              </a>
            </div>

            {/* Phone */}
            <div className="text-center group">
              <div className="bg-musical-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-musical-gold/30 transition-colors duration-300">
                <Phone className="w-8 h-8 text-musical-gold" />
              </div>
              <h3 className="text-xl font-semibold text-musical-warm mb-2">Telèfon</h3>
              <a 
                href="tel:+34960881711" 
                className="text-musical-warm/70 hover:text-musical-gold transition-colors duration-300"
              >
                +34 960 881 711
              </a>
                          </div>

            {/* Schedule */}
            <div className="text-center group">
              <div className="bg-musical-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-musical-gold/30 transition-colors duration-300">
                <Clock className="w-8 h-8 text-musical-gold" />
              </div>
              <h3 className="text-xl font-semibold text-musical-warm mb-2">Horaris</h3>
              <p className="text-musical-warm/70">
                Dilluns a divendres<br />
                17:00 - 20:30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}