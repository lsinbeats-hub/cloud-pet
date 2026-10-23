import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Instagram, Mail, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { petShopConfig, buildWhatsAppLink } from '../config/petShopConfig';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [quickName, setQuickName] = useState('');
  const [quickMsg, setQuickMsg] = useState('');
  const [mapMode, setMapMode] = useState<'embed' | 'placeholder'>('embed');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(petShopConfig.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Cloud Pet! Meu nome é ${quickName || 'Cliente'}. Mensagem: ${quickMsg || 'Gostaria de tirar uma dúvida sobre os serviços.'}`;
    window.open(buildWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4F7A5E] mb-2">
            Localização & Contato
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2922] tracking-tight mb-3 [text-wrap:balance]">
            Venha nos visitar ou fale com a gente
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Estamos prontos para atender você e seu pet com toda a atenção e carinho que vocês merecem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/80 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E5EDE7] text-[#4F7A5E] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#1E2922] uppercase tracking-wider">
                      Endereço
                    </h3>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                      Campo Editável
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mt-2">
                    {petShopConfig.address.fullFormatted}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {petShopConfig.address.reference}
                  </p>

                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F7A5E] hover:text-[#324E3D] transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copiado!' : 'Copiar endereço'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/80 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E5EDE7] text-[#4F7A5E] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-[#1E2922] uppercase tracking-wider mb-2">
                    Horários de Funcionamento
                  </h3>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">Segunda a Sexta</span>
                      <span className="tabular-nums">08:00 – 19:00</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">Sábado</span>
                      <span className="tabular-nums">08:30 – 17:00</span>
                    </p>
                    <p className="flex items-center justify-between text-slate-400">
                      <span>Domingos e Feriados</span>
                      <span>Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contacts & Social Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/80 shadow-xs">
              <h3 className="text-sm font-bold text-[#1E2922] uppercase tracking-wider mb-4">
                Canais de Atendimento
              </h3>
              <div className="space-y-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#E5EDE7] border border-stone-200/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#4F7A5E]" />
                    <div>
                      <p className="text-xs text-slate-500">WhatsApp Oficial</p>
                      <p className="text-sm font-semibold text-slate-800">{petShopConfig.contact.whatsappFormatted}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#4F7A5E] transition-colors" />
                </a>

                <a
                  href={`tel:${petShopConfig.contact.phoneFormatted}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#E5EDE7] border border-stone-200/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#4F7A5E]" />
                    <div>
                      <p className="text-xs text-slate-500">Telefone Fixo</p>
                      <p className="text-sm font-semibold text-slate-800">{petShopConfig.contact.phoneFormatted}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#4F7A5E] transition-colors" />
                </a>

                <a
                  href={petShopConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#E5EDE7] border border-stone-200/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-[#4F7A5E]" />
                    <div>
                      <p className="text-xs text-slate-500">Instagram</p>
                      <p className="text-sm font-semibold text-slate-800">{petShopConfig.contact.instagramHandle}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#4F7A5E] transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map & Direct Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Container */}
            <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden">
              <div className="p-4 px-6 border-b border-stone-100 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#4F7A5E]" />
                  <span className="text-xs font-bold text-[#1E2922] uppercase tracking-wider">
                    Mapa de Localização
                  </span>
                </div>

                {/* View toggle for demonstration */}
                <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-[11px]">
                  <button
                    onClick={() => setMapMode('embed')}
                    className={`px-2.5 py-1 font-semibold rounded-md transition-colors ${
                      mapMode === 'embed' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Visualização Interativa
                  </button>
                  <button
                    onClick={() => setMapMode('placeholder')}
                    className={`px-2.5 py-1 font-semibold rounded-md transition-colors ${
                      mapMode === 'placeholder' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Instruções de Integração
                  </button>
                </div>
              </div>

              {mapMode === 'embed' ? (
                <div className="relative h-80 sm:h-96 w-full bg-stone-100">
                  <iframe
                    title="Mapa de Localização Cloud Pet"
                    src={petShopConfig.address.googleMapsEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Floating directions trigger */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-white/80 flex items-center justify-between gap-3">
                    <div className="text-xs">
                      <p className="font-bold text-[#1E2922]">Fácil Acesso</p>
                      <p className="text-slate-500 text-[11px]">Vagas rotativas em frente ao pet shop</p>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(petShopConfig.address.fullFormatted)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#4F7A5E] hover:bg-[#3E634C] text-white text-xs font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
                    >
                      <span>Abrir no GPS</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-8 h-80 sm:h-96 flex flex-col justify-center items-center text-center bg-[#FAF8F5]">
                  <MapPin className="w-12 h-12 text-[#4F7A5E] mb-3" />
                  <h4 className="text-base font-bold text-[#1E2922]">Espaço Reservado para o Google Maps</h4>
                  <p className="text-xs text-slate-600 max-w-md mt-2 leading-relaxed">
                    Nesta demonstração, o mapa está configurado em <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">src/config/petShopConfig.ts</code>. Quando o cliente fornecer o endereço oficial, basta colar o link gerado pelo Google Maps Embed para que o ponto exato apareça automaticamente.
                  </p>
                  <button
                    onClick={() => setMapMode('embed')}
                    className="mt-5 px-4 py-2 text-xs font-semibold text-[#4F7A5E] bg-white border border-[#4F7A5E]/40 rounded-xl hover:bg-[#E5EDE7]"
                  >
                    Voltar ao mapa demonstrativo
                  </button>
                </div>
              )}
            </div>

            {/* Quick Contact Form (Sends directly to WhatsApp) */}
            <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xs p-6 sm:p-7">
              <h3 className="text-base font-bold text-[#1E2922] mb-1">
                Envie uma mensagem rápida
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Dúvidas sobre banho, produtos ou horários? Preencha abaixo para iniciar a conversa:
              </p>

              <form onSubmit={handleQuickSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Mariana"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-[#4F7A5E]/30 focus:border-[#4F7A5E] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="(11) 99999-9999"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-[#4F7A5E]/30 focus:border-[#4F7A5E] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Escreva sua dúvida sobre serviços, produtos ou porte do seu pet..."
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#FAF8F5] rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-[#4F7A5E]/30 focus:border-[#4F7A5E] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#4F7A5E] hover:bg-[#3E634C] active:scale-[0.98] rounded-xl shadow-xs transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar pelo WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
