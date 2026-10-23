import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Bath, Sparkles, ShoppingBag, HeartHandshake, ArrowRight, MessageCircle } from 'lucide-react';
import { petShopConfig, buildWhatsAppLink } from '../config/petShopConfig';

import bathImg from '../assets/images/bath_grooming_service_1792775251205.jpg';
import careImg from '../assets/images/about_care_moment_1792775252966.jpg';
import catImg from '../assets/images/cat_cozy_spa_1792775252903.jpg';
import boutiqueImg from '../assets/images/boutique_pet_items_1792775252906.jpg';
import heroImg from '../assets/images/hero_dog_tutor_1792775250819.jpg';

interface ServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const servicesData = [
    {
      id: 'banho-e-tosa',
      title: 'Banho e tosa',
      description: 'Higiene, cuidado com a pelagem e um visual renovado para seu melhor amigo.',
      pricePrefix: 'A partir de',
      price: 'R$ 65',
      priceCents: ',00',
      priceNote: 'Varia conforme o porte e pelagem do pet',
      icon: Scissors,
      image: bathImg,
      alt: 'Cachorrinho higienizado enrolado em toalha macia',
      features: ['Secagem cuidadosa sem barulho excessivo', 'Produtos adequados para cada tipo de pelo', 'Finalização suave e perfume suave hipoalergênico'],
    },
    {
      id: 'tosa-higienica',
      title: 'Tosa higiênica',
      description: 'Cuidados especiais para ajudar a manter seu pet limpo e confortável.',
      pricePrefix: 'A partir de',
      price: 'R$ 45',
      priceCents: ',00',
      priceNote: 'Manutenção de patinhas, barriga e áreas íntimas',
      icon: Bath,
      image: heroImg,
      alt: 'Cão bem cuidado e tosado confortavelmente',
      features: ['Limpeza de patinhas e almofadinhas', 'Aparo delicado das regiões íntimas', 'Conforto e higiene diária para cães e gatos'],
    },
    {
      id: 'cuidados-e-higiene',
      title: 'Cuidados e higiene',
      description: 'Atenção aos detalhes para proporcionar mais conforto e bem-estar.',
      pricePrefix: 'A partir de',
      price: 'R$ 35',
      priceCents: ',00',
      priceNote: 'Ouvidos, corte de unhas e escovação dental',
      icon: HeartHandshake,
      image: careImg,
      alt: 'Especialista cuidando com carinho e delicadeza do animal',
      features: ['Limpeza suave das orelhas e ouvidos', 'Corte e lixamento seguro de unhas', 'Escovação de dentes e remoção de pelos mortos'],
    },
    {
      id: 'produtos-para-pets',
      title: 'Produtos para pets',
      description: 'Uma seleção ilustrativa de rações, brinquedos, acessórios e itens essenciais para o dia a dia.',
      pricePrefix: 'Itens a partir de',
      price: 'R$ 18',
      priceCents: ',90',
      priceNote: 'Rações Super Premium, petiscos e higiene',
      icon: ShoppingBag,
      image: catImg,
      alt: 'Gato confortável com produtos e acessórios de qualidade',
      features: ['Rações premium e petiscos saudáveis', 'Brinquedos seguros e educativos', 'Itens de cuidado diário recomendados'],
    },
    {
      id: 'acessorios',
      title: 'Acessórios',
      description: 'Coleiras, guias, caminhas e outros itens para tornar a rotina do seu pet ainda melhor.',
      pricePrefix: 'Itens a partir de',
      price: 'R$ 29',
      priceCents: ',90',
      priceNote: 'Guias resistentes, camas antialérgicas e tigelas',
      icon: Sparkles,
      image: boutiqueImg,
      alt: 'Vitrine de guias em couro, tigelas de cerâmica e brinquedos artesanais',
      features: ['Guias e coleiras ergonômicas e duráveis', 'Caminhas ortopédicas e aconchegantes', 'Comedouros em cerâmica de fácil higienização'],
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4F7A5E] mb-2">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2922] tracking-tight mb-4 [text-wrap:balance]">
            Cuidado dedicado em cada detalhe
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Tratamentos de estética e higiene pensados para a tranquilidade do seu animal e a confiança do tutor.
          </p>
          <p className="text-xs text-[#4F7A5E] font-medium mt-2.5">
            * Valores de referência transparentes · Ajustados sob medida de acordo com porte e pelagem.
          </p>
        </motion.div>

        {/* Services Grid (Asymmetric & Responsive Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const waLink = buildWhatsAppLink(petShopConfig.defaultMessages.serviceQuote(service.title));

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col group ${
                  index === 0 ? 'lg:col-span-2 md:col-span-2' : ''
                }`}
              >
                {/* Image slot */}
                <div className={`relative overflow-hidden bg-stone-100 ${
                  index === 0 ? 'h-64 sm:h-72' : 'h-52'
                }`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Floating Category indicator */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/60 shadow-xs flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-[#4F7A5E]" />
                    <span className="text-xs font-semibold text-[#1E2922]">Cloud Pet</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1E2922] mb-2.5 group-hover:text-[#4F7A5E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Service Pricing Block */}
                    <div className="mb-5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-medium text-slate-500 block leading-none">
                          {service.pricePrefix}
                        </span>
                        <div className="flex items-baseline gap-0.5 mt-1">
                          <span className="text-2xl font-extrabold text-[#1E2922] tabular-nums tracking-tight">
                            {service.price}
                          </span>
                          <span className="text-xs font-bold text-slate-500 tabular-nums">
                            {service.priceCents}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] text-right text-[#4F7A5E] font-medium leading-snug max-w-[140px]">
                        {service.priceNote}
                      </span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6 border-t border-stone-100 pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4F7A5E]/60 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectServiceForBooking(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F7A5E] hover:text-[#324E3D] transition-colors"
                    >
                      <span>Agendar agora</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 hover:text-[#1E2922] bg-stone-100 hover:bg-[#E5EDE7] rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#4F7A5E]" />
                      <span>Consultar atendimento</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
