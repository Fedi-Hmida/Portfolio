import ConnectSection from "../components/Contact/ConnectSection";
import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/ContactHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10 pb-20">
        <ContactHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Form Centered or distinct */}
            <div className="lg:col-span-8 lg:col-start-3">
              <ContactForm />
            </div>
          </div>

          <ConnectSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
