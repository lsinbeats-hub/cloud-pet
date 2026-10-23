import React, { useState } from 'react';
import { X, Calendar, MessageCircle, Heart, Check, Sparkles } from 'lucide-react';
import { petShopConfig, buildWhatsAppLink } from '../config/petShopConfig';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Banho e tosa',
}) => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState<'Cachorro' | 'Gato' | 'Outro'>('Cachorro');
  const [service, setService] = useState(initialService);
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã');
  const [notes, setNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    { label: 'Banho e tosa (a partir de R$ 65,00)', value: 'Banho e tosa' },
    { label: 'Tosa higiênica (a partir de R$ 45,00)', value: 'Tosa higiênica' },
    { label: 'Cuidados e higiene (a partir de R$ 35,00)', value: 'Cuidados e higiene' },
    { label: 'Produtos para pets (a partir de R$ 18,90)', value: 'Produtos para pets' },
    { label: 'Acessórios (a partir de R$ 29,90)', value: 'Acessórios' },
  ];

  const generateMessage = () => {
    let msg = `Olá! Gostaria de agendar um atendimento na Cloud Pet.\n\n`;
    if (petName) msg += `🐾 Pet: ${petName} (${petType})\n`;
    else msg += `🐾 Pet: ${petType}\n`;
    msg += `✨ Serviço: ${service}\n`;
    msg += `⏰ Período de preferência: ${preferredPeriod}\n`;
    if (notes.trim()) msg += `📝 Detalhes: ${notes.trim()}\n`;
    msg += `\nPoderiam me informar os próximos horários disponíveis?`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const text = generateMessage();
    const url = buildWhatsAppLink(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessage());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200/70 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#4F7A5E]/10 text-[#4F7A5E] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg font-bold text-[#1E2922]">
                Agendar Atendimento
              </h3>
              <p className="text-xs text-slate-500">
                Pré-agendamento rápido e direto via WhatsApp
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-stone-100 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Pet Info */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Seu Amigo Pet
            </label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {(['Cachorro', 'Gato', 'Outro'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setPetType(type)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center ${
                    petType === type
                      ? 'bg-[#4F7A5E] text-white border-[#4F7A5E] shadow-xs'
                      : 'bg-white text-slate-600 border-stone-200 hover:border-[#4F7A5E]/40'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Nome do pet (opcional, ex: Pipoca)"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-[#4F7A5E]/30 focus:border-[#4F7A5E] transition-all"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Serviço Desejado
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-[#4F7A5E]/30 focus:border-[#4F7A5E] transition-all"
            >
              {servicesList.map((srv) => (
                <option key={srv.value} value={srv.value}>
                  {srv.label}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Period */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Período de Preferência
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Manhã', 'Tarde', 'Qualquer horário'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPreferredPeriod(p)}
                  className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                    preferredPeriod === p
                      ? 'bg-[#3E634C] text-white border-[#3E634C]'
                      : 'bg-white text-slate-600 border-stone-200 hover:border-[#4F7A5E]/40'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Observations */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Observações (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Porte, raça, se precisa de cuidado especial ou primeira vez..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-white rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-[#4F7A5E]/30 focus:border-[#4F7A5E] transition-all resize-none"
            />
          </div>

          {/* Demonstration Notice */}
          <div className="p-3 bg-[#E5EDE7] rounded-xl text-xs text-[#283E31] flex items-start gap-2">
            <Sparkles className="w-4 h-4 shrink-0 text-[#4F7A5E] mt-0.5" />
            <span>
              Ao clicar no botão abaixo, sua mensagem formatada será direcionada para o WhatsApp da Cloud Pet (número demonstrativo: {petShopConfig.contact.whatsappFormatted}).
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-white border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-stone-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : null}
            {isCopied ? 'Mensagem copiada' : 'Copiar mensagem'}
          </button>

          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-[#4F7A5E] hover:bg-[#3E634C] active:scale-[0.98] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Prosseguir no WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
