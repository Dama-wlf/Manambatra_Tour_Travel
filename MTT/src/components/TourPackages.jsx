import { Clock } from 'lucide-react';
import baobab from '../assets/images/destinations/baobab.jpg';
import nosy_iranja from '../assets/images/destinations/nosy_iranja.jpg';
import nosy_be from '../assets/images/destinations/nosy_be.jpg';
import isalo from '../assets/images/destinations/isalo.jpg';
import tsingy_bemaraha from '../assets/images/destinations/tsingy_bemaraha.jpg';
import sainte_marie from '../assets/images/destinations/sainte_marie.jpg';
import andasibe from '../assets/images/destinations/andasibe.jpg';

const tours =[
  {
    title: "Avenue des Baobabs",
    image: baobab,
    description: "Admirez les célèbres baobabs bordant cette route emblématique, encore plus magique au coucher du soleil",
    duration: "3 jours",
    highlights: ["Photographie au coucher du soleil", "Villages locaux", "Paysages uniques"]
  },
  {
    title: "Île paradisiaque de Nosy Be",
    image: nosy_be,
    description: "Plages immaculées, eaux cristallines, snorkeling et plongée de classe mondiale",
    duration: "5 jours",
    highlights: ["Détente sur la plage", "Snorkeling", "Découverte des îles"]
  },
  {
    title: "Parc National de l'Isalo",
    image: isalo,
    description: "Formations rocheuses spectaculaires, piscines naturelles et faune diversifiée dans ce parc impressionnant",
    duration: "4 jours",
    highlights: ["Sentiers de randonnée", "Piscines naturelles", "Observation de la faune"]
  },
  {
    title: "Tsingy de Bemaraha",
    image: tsingy_bemaraha,
    description: "Parcourez d’impressionnantes formations calcaires dans ce site classé au patrimoine mondial de l’UNESCO",
    duration: "6 jours",
    highlights: ["Formations rocheuses", "Randonnée aventure", "Géologie unique"]
  },
  {
    title: "Observation des baleines à Sainte-Marie",
    image: sainte_marie,
    description: "Admirez les baleines à bosse pendant leur migration sur cette belle île tropicale",
    duration: "4 jours",
    highlights: ["Observation des baleines", "Plages tropicales", "Vie marine"]
  },
  {
    title: "Forêt tropicale d'Andasibe",
    image: andasibe,
    description: "Rencontrez des lémuriens, caméléons et oiseaux exotiques dans cette forêt primaire luxuriante",
    duration: "3 jours",
    highlights: ["Rencontres avec les lémuriens", "Balades nocturnes", "Biodiversité"]
  }
];

export default function TourPackages() {
  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tour Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully curated experiences showcasing the best of Madagascar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-900">{tour.duration}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{tour.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tour.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
