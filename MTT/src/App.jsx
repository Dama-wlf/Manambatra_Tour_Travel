import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import TourPackages from "./components/TourPackages";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <TourPackages />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}



export default App
