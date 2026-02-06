import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <MapPin className="h-8 w-8 text-emerald-500" />
                            <span className="text-xl font-bold">Manambatra Tour Travel</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Manambatra Tour Travel : votre partenaire pour vivre des aventures inoubliables sur cette île exceptionnelle qu’est Madagascar.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-500 transition">
                                    Accueil
                                </button>
                            </li>
                            <li>
                                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-500 transition">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-500 transition">
                                    Tours
                                </button>
                            </li>
                            <li>
                                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-500 transition">
                                    À Propos
                                </button>
                            </li>
                            <li>
                                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-500 transition">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400">
                                <Phone className="h-5 w-5 text-emerald-500" />
                                <span>+261 32 42 925 13</span>
                            </li>
                          
                            <li className="flex items-center gap-2 text-gray-400">
                                <Mail className="h-5 w-5 text-emerald-500" />
                                <span>info@manambatratourtravel.mg</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400">
                                <MapPin className="h-5 w-5 text-emerald-500" />
                                <span>Antsirabe 110, Madagascar</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                        <p className="text-gray-400 mt-6 text-sm">
                            Restez connecté pour des conseils de voyage, des offres spéciales et de l'inspiration à Madagascar.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Manambatra Tour Travel. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
