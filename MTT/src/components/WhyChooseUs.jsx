import { Award, Users, DollarSign, Heart, Languages, Shield } from 'lucide-react';

const reasons = [
    {
        icon: Award,
        title: 'Expertise locale',
        description: 'Une connaissance approfondie pour vous faire découvrir le meilleur de Madagascar'
    },
    {
        icon: Users,
        title: 'Guides certifiés',
        description: 'Des guides professionnels et agréés, passionnés par le partage de leur pays'
    },
    {
        icon: Shield,
        title: 'Réservation sécurisée',
        description: 'Moyens de paiement sûrs et tarifs transparents, sans frais cachés'
    },
    {
        icon: DollarSign,
        title: 'Meilleurs prix',
        description: 'Des tarifs compétitifs offrant un excellent rapport qualité-prix'
    },
    {
        icon: Heart,
        title: 'Voyages personnalisés',
        description: 'Des itinéraires sur mesure conçus selon vos envies et vos préférences'
    },
    {
        icon: Languages,
        title: 'Équipe multilingue',
        description: 'Communication en français, anglais, malgache et autres langues'
    }
];



export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pourquoi nous choisir</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Votre partenaire de confiance pour découvrir les merveilles de Madagascar avec Manambatra Tour Travel
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="p-8 rounded-xl border-2 border-gray-100 hover:border-emerald-500 transition group"
                            >
                                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition">
                                    <Icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
