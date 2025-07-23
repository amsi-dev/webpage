import { Music, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-musical-warm text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and name */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Music className="w-8 h-8 text-musical-gold" />
            <h3 className="text-xl font-bold">Agrupació Musical Sant Isidre</h3>
          </div>

          {/* Address */}
          <p className="text-white/80 mb-4">
            Carrer de Nicolau Primitiu Gómez, 10, Patraix, 46014 València
          </p>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-6 text-white/80">
            <a href="mailto:info@amsantisidre.es" className="hover:text-musical-gold transition-colors">
              info@amsantisidre.es
            </a>
            <a href="tel:+34960881711" className="hover:text-musical-gold transition-colors">
              +34 960 881 711
            </a>
          </div>

          {/* Divider */}
          <div className="w-20 h-0.5 bg-musical-gold mx-auto mb-6"></div>

          {/* Copyright */}
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            © 2025 Agrupació Musical Sant Isidre. Fet amb
            <Music className="w-4 h-4 text-musical-gold" /> i <Heart className="w-4 h-4 text-musical-gold" />
            a València.
          </p>
        </div>
      </div>
    </footer>
  );
}