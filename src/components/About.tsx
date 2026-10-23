import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Check, Shield } from 'lucide-react';
import aboutImage from '../assets/images/about_care_moment_1792775252966.jpg';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 bg-stone-100 aspect-4/3 sm:aspect-square lg:aspect-4/3">
              <img
                src={aboutImage}
                alt="Profissional carinhosa da Cloud Pet segurando a patinha de um cão com muito afeto e tranquilidade"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Floating Trust Indicator */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E5EDE7] text-[#4F7A5E] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-[#4F7A5E]/20" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E2922]">Respeito ao Tempo do Pet</h4>
                    <p className="text-[11px] text-slate-500">Manejo calmo, sem pressa e sem estresse</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-[#4F7A5E] mb-3">
              Sobre a Cloud Pet
            </div>

            {/* Required exact title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2922] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Mais do que cuidar. É fazer parte da família.
            </h2>

            {/* Required exact text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8">
              Na Cloud Pet, acreditamos que cada animal merece cuidado, respeito e carinho. Nossa proposta é tornar a rotina dos tutores mais prática e proporcionar aos pets uma experiência acolhedora em cada visita.
            </p>

            {/* Editorial highlights for demonstration */}
            <div className="space-y-4 pt-6 border-t border-stone-200/80">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E5EDE7] text-[#4F7A5E] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E2922]">Ambiente planejado para segurança e bem-estar</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Instalações limpas, equipamentos modernos e toalhas individuais esterilizadas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E5EDE7] text-[#4F7A5E] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E2922]">Produtos de primeira linha selecionados com rigor</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Cosméticos com formulação suave e itens de nutrição que priorizam a saúde animal.</p>
                </div>
              </div>
            </div>

            {/* Demonstration notice */}
            <div className="mt-8 pt-4 text-xs text-slate-400 italic">
              * Conteúdo demonstrativo profissional: esta seção pode ser facilmente personalizada com a história e diferenciais específicos do seu estabelecimento.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
