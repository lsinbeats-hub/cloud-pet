import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Gallery } from './components/Gallery';
import { Products } from './components/Products';
import { About } from './components/About';
import { ScheduleCTA } from './components/ScheduleCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AppointmentModal } from './components/AppointmentModal';
import { PawCursorEffect } from './components/PawCursorEffect';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Banho e tosa');

  const handleOpenAppointment = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 flex flex-col font-sans selection:bg-[#4F7A5E]/20 selection:text-[#283E31]">
      {/* Interactive Dog Paw Click Effect */}
      <PawCursorEffect />

      {/* Seção 1: Cabeçalho Fixo */}
      <Header onOpenAppointment={() => handleOpenAppointment()} />

      <main className="flex-1">
        {/* Seção 2: Banner Principal (Hero) */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* Seção 3: Serviços */}
        <Services onSelectServiceForBooking={(name) => handleOpenAppointment(name)} />

        {/* Seção 4: Diferenciais */}
        <Differentials />

        {/* Seção 5: Galeria de Fotos com Lightbox */}
        <Gallery />

        {/* Seção 6: Produtos em Destaque */}
        <Products />

        {/* Seção 7: Sobre a Cloud Pet */}
        <About />

        {/* Seção 8: Chamada para Agendamento */}
        <ScheduleCTA onOpenAppointment={() => handleOpenAppointment()} />

        {/* Seção 9: Localização e Contato */}
        <Contact />
      </main>

      {/* Seção 10: Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />

      {/* Modal Interativo de Agendamento */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointment}
        initialService={selectedService}
      />
    </div>
  );
}
