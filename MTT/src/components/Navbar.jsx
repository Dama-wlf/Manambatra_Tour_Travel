import { Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Manambatra Tour Travel</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition">Accueil</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition">Services</button>
            <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-emerald-600 transition">Circuits</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition">À propos</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition">Contact</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-emerald-50">Accueil</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-emerald-50">Services</button>
            <button onClick={() => scrollToSection('tours')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-emerald-50">Circuits</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-emerald-50">À propos</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-emerald-50">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
