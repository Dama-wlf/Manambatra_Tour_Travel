import { Target, Eye, Users } from 'lucide-react';
import baobab_about from '../assets/images/about/baobab_about.jpg';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">À propos de nous</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Manambatra Tour Travel : votre porte d’entrée pour des aventures authentiques à Madagascar.
                    </p>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <img
                            src={baobab_about}
                            alt="Madagascar landscape"
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre histoire</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                            Fondée par l’équipe passionnée de Manambatra Tour Travel, notre agence relie les voyageurs à la beauté exceptionnelle et à la biodiversité unique de Madagascar.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                            Nés et élevés à Madagascar, nous connaissons intimement les trésors cachés, les communautés locales et les meilleures façons de découvrir la faune et les paysages de notre pays de manière responsable.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Notre engagement pour un tourisme durable garantit que votre visite profite aux communautés locales tout en préservant le patrimoine naturel exceptionnel de Madagascar pour les générations futures.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-emerald-50 p-8 rounded-xl">
                        <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Target className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">Notre mission</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Offrir des expériences de voyage authentiques, durables et inoubliables qui mettent en valeur les trésors naturels et culturels uniques de Madagascar.
                        </p>
                    </div>

                    <div className="bg-emerald-50 p-8 rounded-xl">
                        <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Eye className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">Notre vision</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Devenir le tour opérateur de référence à Madagascar, reconnu pour un service exceptionnel, nos actions en faveur de la conservation et l’impact positif sur les communautés locales.
                        </p>
                    </div>

                    <div className="bg-emerald-50 p-8 rounded-xl">
                        <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">Notre équipe</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Des guides certifiés, experts en voyages et personnel de soutien dévoués pour rendre votre aventure à Madagascar sûre et inoubliable.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
