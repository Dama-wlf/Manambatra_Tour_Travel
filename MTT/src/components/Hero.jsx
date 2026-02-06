import { ArrowRight } from 'lucide-react';
import plage_hero from '../assets/images/hero/plage_hero.jpg';

export default function Hero() {
  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={plage_hero}
          alt="Madagascar plage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Explorer Madagascar Autrement
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
          Basé à Madagascar, nous connaissons chaque recoin de notre île et nous sommes là pour vous faire découvrir ses trésors cachés.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToTours}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Découvrez Nos Circuits <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Réserver
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
