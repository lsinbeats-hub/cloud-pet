import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { CloudPetLogo } from './CloudPetLogo';

interface HeaderProps {
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-[#FAF8F5] border-b border-stone-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="whitespace-nowrap shrink-0 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4F7A5E] rounded-xl"
            aria-label="Cloud Pet Página Inicial"
          >
            <CloudPetLogo />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 transition-colors hover:text-[#4F7A5E] relative py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4F7A5E] rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#4F7A5E] hover:bg-[#3E634C] active:scale-[0.98] rounded-full shadow-xs transition-all whitespace-nowrap shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4F7A5E] focus-visible:ring-offset-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar atendimento</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-stone-200/60 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4F7A5E]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-stone-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#4F7A5E] hover:bg-[#E5EDE7]/60 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#4F7A5E] hover:bg-[#3E634C] rounded-xl shadow-xs transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar atendimento</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
