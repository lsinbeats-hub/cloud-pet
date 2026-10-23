import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Calendar, Sparkles, Heart } from 'lucide-react';
import { petShopConfig, buildWhatsAppLink } from '../config/petShopConfig';

interface ScheduleCTAProps {
  onOpenAppointment: () => void;
}

export const ScheduleCTA: React.FC<ScheduleCTAProps> = ({ onOpenAppointment }) => {
  // Pre-filled WhatsApp message strictly as requested in Section 8:
  const whatsappUrl = buildWhatsAppLink(
    'Olá! Conheci a Cloud Pet pelo site e gostaria de saber mais sobre os serviços e horários disponíveis.'
  );

  return (
    <section className="py-20 lg:py-24 bg-[#3E634C] text-white relative overflow-hidden">
      {/* Decorative gentle shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-80 h-80 bg-[#4F7A5E] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-6">
          <Heart className="w-3.5 h-3.5 fill-white/30 text-white" />
          <span>Atendimento com amor e respeito</span>
        </div>

        {/* Required Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 [text-wrap:balance]">
          Vamos cuidar de quem faz seus dias mais felizes?
        </h2>

        {/* Required Subtitle */}
        <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Entre em contato com a Cloud Pet e consulte nossos serviços e horários de atendimento.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Main button opening pre-filled WhatsApp conversation */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-[#1E2922] bg-white hover:bg-stone-100 active:scale-[0.98] hover:shadow-2xl transition-all whitespace-nowrap shrink-0 rounded-2xl shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-[#4F7A5E]" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          {/* Secondary helper */}
          <button
            onClick={onOpenAppointment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 active:scale-[0.98] rounded-2xl border border-white/20 transition-all whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Personalizar detalhes</span>
          </button>
        </div>

        <p className="text-xs text-white/70 mt-6">
          Resposta ágil em horário comercial · Número demonstrativo: {petShopConfig.contact.whatsappFormatted}
        </p>

      </motion.div>
    </section>
  );
};
