import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { petShopConfig, buildWhatsAppLink } from '../config/petShopConfig';

import boutiqueImg from '../assets/images/boutique_pet_items_1792775252906.jpg';
import catImg from '../assets/images/cat_cozy_spa_1792775252903.jpg';
import bathImg from '../assets/images/bath_grooming_service_1792775251205.jpg';
import heroImg from '../assets/images/hero_dog_tutor_1792775250819.jpg';

interface ProductItem {
  id: string;
  name: string;
  category: 'Cães' | 'Gatos' | 'Acessórios' | 'Higiene';
  description: string;
  image: string;
  badge: string;
}

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const products: ProductItem[] = [
    {
      id: 'racao-caes',
      name: 'Rações Super Premium para Cães',
      category: 'Cães',
      description: 'Fórmulas com ingredientes selecionados, ricas em proteínas e nutrientes para cães de todos os portes.',
      image: heroImg,
      badge: 'Nutrição Balanceada',
    },
    {
      id: 'racao-gatos',
      name: 'Alimentação Especial para Gatos',
      category: 'Gatos',
      description: 'Opções secas e úmidas que auxiliam no controle de bolas de pelos e na saúde renal do seu felino.',
      image: catImg,
      badge: 'Saúde Felina',
    },
    {
      id: 'brinquedos',
      name: 'Brinquedos Interativos & Mordedores',
      category: 'Acessórios',
      description: 'Itens em borracha natural e cordas ecológicas para gastar energia e estimular a mente.',
      image: boutiqueImg,
      badge: 'Estimulação Saudável',
    },
    {
      id: 'coleiras-guias',
      name: 'Coleiras, Guias & Peitorais',
      category: 'Acessórios',
      description: 'Acabamentos em couro legítimo e tecidos confortáveis, com costuras reforçadas para passeios seguros.',
      image: boutiqueImg,
      badge: 'Segurança & Estilo',
    },
    {
      id: 'caminhas',
      name: 'Caminhas Aconchegantes & Almofadas',
      category: 'Acessórios',
      description: 'Tecidos suaves ao toque, enchimento antialérgico e capas laváveis para o descanso merecido.',
      image: catImg,
      badge: 'Máximo Conforto',
    },
    {
      id: 'produtos-higiene',
      name: 'Shampoos, Loções & Cuidados de Higiene',
      category: 'Higiene',
      description: 'Linha dermocosmética hipoalergênica, desembaraçadores suaves e lenços umedecidos especializados.',
      image: bathImg,
      badge: 'Dermocosmética',
    },
  ];

  const categories = ['Todos', 'Cães', 'Gatos', 'Acessórios', 'Higiene'];

  const filteredProducts = activeCategory === 'Todos'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#4F7A5E] mb-2">
              Boutique Cloud Pet
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2922] tracking-tight mb-3 [text-wrap:balance]">
              Produtos selecionados com carinho
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Itens pensados para a rotina diária de alimentação, diversão e bem-estar do seu amigo de quatro patas.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF8F5] rounded-2xl border border-stone-200/80 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#4F7A5E] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Commercial Demonstration Disclaimer */}
        <div className="mb-10 p-4 bg-[#FAF8F5] border border-stone-200/80 rounded-2xl flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <Sparkles className="w-4 h-4 text-[#4F7A5E] shrink-0" />
            <span>
              Catálogo visual demonstrativo. Para consultar disponibilidade de marcas específicas ou tamanhos na loja física, clique no botão do item.
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#4F7A5E] uppercase tracking-wider">
            Atendimento humanizado via WhatsApp
          </span>
        </div>

        {/* Product Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const waLink = buildWhatsAppLink(petShopConfig.defaultMessages.productInquiry(product.name));

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#FAF8F5] rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col group"
                >
                  {/* Product Image Frame */}
                  <div className="relative h-60 bg-stone-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Clean unboxed category + badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/80 shadow-xs flex items-center gap-2">
                      <span className="text-xs font-semibold text-[#4F7A5E]">
                        {product.category}
                      </span>
                      <span className="text-stone-300">·</span>
                      <span className="text-[11px] text-slate-600 font-medium">
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#1E2922] mb-2 group-hover:text-[#4F7A5E] transition-colors leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                        {product.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-stone-200/70">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#1E2922] bg-white hover:bg-[#E5EDE7] hover:text-[#283E31] border border-stone-200 rounded-xl transition-all shadow-xs group-hover:border-[#4F7A5E]/40"
                      >
                        <MessageCircle className="w-4 h-4 text-[#4F7A5E]" />
                        <span>Consultar disponibilidade</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
