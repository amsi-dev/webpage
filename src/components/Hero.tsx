import { Music } from "lucide-react";

interface HeroProps {
  logoUrl?: string;
}

export default function Hero({ logoUrl }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-musical-soft via-background to-musical-gold-light overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-musical-gold/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-musical-gold/30 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-musical-gold/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-musical-gold/40 rounded-full animate-float delay-300"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            {logoUrl ? (
              <img 
                src={logoUrl} 
                alt="Agrupació Musical Sant Isidre" 
                className="w-48 h-48 mx-auto object-contain drop-shadow-lg"
              />
            ) : (
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-musical-gold to-musical-gold-light rounded-full flex items-center justify-center shadow-lg animate-glow">
                <Music className="w-24 h-24 text-white" />
              </div>
            )}
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl font-bold text-musical-warm mb-4">
            Agrupació Musical
            <span className="block text-musical-gold">Sant Isidre</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-musical-warm/80 mb-8">
            Banda i Escola de Música
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-musical-warm/70 leading-relaxed">
              Agrupació Musical Sant Isidre és una escola de música i banda de concerts amb seu a Carrer de Nicolau Primitiu Gómez, 10, València. 
              Oferim educació musical per a totes les edats i actuem regularment en esdeveniments locals.
            </p>
          </div>

          {/* Under construction notice */}
          <div className="mt-12">
            <div className="inline-block bg-musical-gold/20 border-2 border-musical-gold rounded-full px-6 py-3">
              <p className="text-musical-warm font-medium">
                🚧 Pàgina web en construcció — Prompte actualitzarem amb més detalls!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}