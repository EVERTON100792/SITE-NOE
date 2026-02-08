
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import ServiceDetails from './components/ServiceDetails';
import PracticalSupport from './components/PracticalSupport';
import IRPFHighlight from './components/IRPFHighlight';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="diferenciais">
          <Differentials />
        </section>

        <section id="irpf" className="bg-emerald-50/30">
          <IRPFHighlight />
        </section>

        <section id="servicos" className="py-24">
          <ServicesOverview />
        </section>

        <section id="detalhes-servicos" className="bg-slate-50/50">
          <ServiceDetails />
        </section>

        <section id="como-funciona" className="bg-slate-50 py-24">
          <PracticalSupport />
        </section>

        <section id="sobre" className="py-24 bg-white">
          <Portfolio />
        </section>

        <section id="localizacao">
          <LocationMap />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
