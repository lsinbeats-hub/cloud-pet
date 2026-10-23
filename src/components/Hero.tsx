import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageCircle, Sparkles, ShieldCheck, HeartHandshake, Scissors } from 'lucide-react';
import { petShopConfig, buildWhatsAppLink } from '../config/petShopConfig';
import heroImage from '../assets/images/hero_dog_tutor_1792775250819.jpg';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#servicos');
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const whatsappUrl = buildWhatsAppLink(petShopConfig.defaultMessages.generalInquiry);

  return (
    <section id="inicio" className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden">
      {/* Full-width edge-to-edge background photograph */}
      <div className="absolute inset-0 w-full h-full bg-stone-900">
        {!imageError ? (
          <img
            src={heroImage}
            alt="Profissional de pet shop carinhosa com cão golden retriever na Cloud Pet"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-[center_35%] lg:object-[center_28%] transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-95' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-linear-to-br from-[#1E2922] to-[#283E31] text-center text-white">
            <Sparkles className="w-12 h-12 text-[#9FC1A4] mb-3" />
            <p className="text-base font-semibold">Cloud Pet — Cuidado com amor</p>
          </div>
        )}

        {/* High-quality cinematic directional scrim for edge-to-edge photo */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Foreground Content with Motion */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Subtle Brand Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold mb-6 ring-1 ring-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#9FC1A4] animate-pulse" />
            <span>Cloud Pet</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-white/90">Estética Animal & Boutique</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance] drop-shadow-sm"
          >
            Seu pet merece todo esse carinho.
          </motion.h1>

          {/* Complementary Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-stone-200 leading-relaxed font-normal mb-10 max-w-2xl drop-shadow-xs"
          >
            Cuidado, bem-estar e carinho em cada detalhe. Tudo para deixar seu melhor amigo saudável, feliz e bem cuidado.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <a
              href="#servicos"
              onClick={handleServicesClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[#4F7A5E] hover:bg-[#3E634C] active:scale-[0.98] hover:shadow-2xl transition-all whitespace-nowrap shrink-0 text-center rounded-xl shadow-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Conheça nossos serviços</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-[#1E2922] bg-white hover:bg-stone-100 active:scale-[0.98] hover:shadow-2xl transition-all whitespace-nowrap shrink-0 text-center rounded-xl shadow-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4 text-[#4F7A5E]" />
              <span>Fale pelo WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick Trust Highlights on frosted strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="p-5 sm:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-5 text-white"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-[#9FC1A4]">
                <Scissors className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Banho & Tosa</h4>
                <p className="text-[11px] text-stone-300 mt-0.5">Toalhas individuais esterilizadas</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-white/15 pt-3 sm:pt-0 sm:pl-5">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-[#9FC1A4]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Ambiente Calmo</h4>
                <p className="text-[11px] text-stone-300 mt-0.5">Manejo gentil e sem estresse</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-white/15 pt-3 sm:pt-0 sm:pl-5">
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-[#9FC1A4]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Cosméticos Top</h4>
                <p className="text-[11px] text-stone-300 mt-0.5">Fórmulas hipoalergênicas</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

