import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { petShopConfig, buildWhatsAppLink } from '../config/petShopConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = buildWhatsAppLink(
    'Olá! Conheci a Cloud Pet pelo site e gostaria de saber mais sobre os serviços e horários disponíveis.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      
      {/* Friendly Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto mb-3 max-w-[210px] bg-white rounded-2xl p-3 shadow-lg border border-stone-200/90 text-slate-800 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-slate-600 rounded-md"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="pr-3">
            <p className="font-bold text-[#1E2922] leading-tight">Precisa de ajuda?</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Tire dúvidas ou agende agora pelo WhatsApp!</p>
          </div>
          {/* Small Speech Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-stone-200/90" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com a Cloud Pet"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all focus:outline-hidden focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />

        {/* Small subtle active pulse ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-white" />
        </span>
      </a>
    </div>
  );
};
