import { Compass, Hotel, Car, Calendar, Mountain, Users, Globe, Shield } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Circuits guidés',
    description: 'Guides locaux expérimentés avec une connaissance approfondie de la culture et de la nature malgaches'
  },
  {
    icon: Hotel,
    title: 'Réservation d’hôtels',
    description: 'Hébergements soigneusement sélectionnés, du budget au luxe, à travers toute l’île'
  },
  {
    icon: Car,
    title: 'Location de voiture',
    description: 'Véhicules bien entretenus avec possibilité de chauffeur'
  },
  {
    icon: Calendar,
    title: 'Organisation de voyage',
    description: 'Itinéraires personnalisés selon vos intérêts et votre planning'
  },
  {
    icon: Mountain,
    title: 'Excursions nature',
    description: 'Découvrez les parcs nationaux, forêts tropicales et écosystèmes uniques'
  },
  {
    icon: Users,
    title: 'Circuits culturels',
    description: 'Plongez au cœur des traditions locales et des communautés authentiques'
  },
  {
    icon: Globe,
    title: 'Découverte des îles',
    description: 'Explorez des plages paradisiaques et des îles préservées autour de Madagascar'
  },
  {
    icon: Shield,
    title: 'Transport sécurisé',
    description: 'Des déplacements fiables et sécurisés tout au long de votre séjour'
  }
];


export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour une aventure inoubliable à Madagascar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group cursor-pointer"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition">
                  <Icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
