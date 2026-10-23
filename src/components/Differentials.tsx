import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Home, UserCheck } from 'lucide-react';

export const Differentials: React.FC = () => {
  const differentials = [
    {
      title: 'Carinho em cada atendimento',
      description: 'Cada pet possui sua própria personalidade, ritmo e sensibilidade. Tratamos seu companheiro com paciência, respeito e muito afeto.',
      icon: Heart,
    },
    {
      title: 'Atenção ao conforto e bem-estar animal',
      description: 'Priorizamos procedimentos tranquilos e toalhas individuais esterilizadas, garantindo que o momento do cuidado seja positivo e relaxante.',
      icon: Sparkles,
    },
    {
      title: 'Ambiente organizado e acolhedor',
      description: 'Espaço higienizado continuamente, arejado e planejado para receber animais e tutores com segurança, clareza e bem-estar.',
      icon: Home,
    },
    {
      title: 'Atendimento próximo e personalizado',
      description: 'Ouvimos as preferências e necessidades de cada tutor para oferecer recomendações sob medida para o estilo de vida do seu pet.',
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4F7A5E] mb-2">
            Nossos Diferenciais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2922] tracking-tight mb-4 [text-wrap:balance]">
            Por que confiar o seu melhor amigo à Cloud Pet
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Nosso compromisso é unir técnica apurada, higiene impecável e um ambiente afetuoso onde seu animal se sinta seguro.
          </p>
        </motion.div>

        {/* 4 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#FAF8F5] border border-stone-200/80 hover:border-[#4F7A5E]/40 hover:bg-[#F5F0EA] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E5EDE7] text-[#4F7A5E] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E2922] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
