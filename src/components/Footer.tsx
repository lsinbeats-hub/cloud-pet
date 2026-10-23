import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock, Phone, Heart, ExternalLink } from 'lucide-react';
import { CloudPetLogo } from './CloudPetLogo';
import { petShopConfig, buildWhatsAppLink } from '../config/petShopConfig';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
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

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#1E2922] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Brief Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <CloudPetLogo light={true} />
            <p className="text-sm text-stone-400 font-normal leading-relaxed max-w-sm mt-3">
              Cuidado, bem-estar e estética animal com dedicação e afeto. Oferecemos banho e tosa de alto padrão e produtos selecionados para o seu melhor amigo.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4F7A5E] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Cloud Pet"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={petShopConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#4F7A5E] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram da Cloud Pet"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Unidade & Horários
            </h4>
            
            <div className="flex items-start gap-3 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#9FC1A4] shrink-0 mt-0.5" />
              <span>{petShopConfig.address.fullFormatted}</span>
            </div>

            <div className="flex items-start gap-3 text-xs text-stone-400">
              <Clock className="w-4 h-4 text-[#9FC1A4] shrink-0 mt-0.5" />
              <div>
                <p>{petShopConfig.businessHours.weekdays}</p>
                <p className="mt-0.5">{petShopConfig.businessHours.saturday}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-stone-400">
              <Phone className="w-4 h-4 text-[#9FC1A4] shrink-0 mt-0.5" />
              <span>{petShopConfig.contact.phoneFormatted} · WhatsApp: {petShopConfig.contact.whatsappFormatted}</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Cloud Pet. Todos os direitos reservados.
          </p>

          {/* Commercial demonstration credit for Creative Cloud Studios */}
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>Desenvolvido como demonstração comercial por</span>
            <span className="font-semibold text-[#CDE1D2]">
              {petShopConfig.agencyCredit}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
