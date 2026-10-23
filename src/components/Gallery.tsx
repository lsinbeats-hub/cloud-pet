import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

import heroImg from '../assets/images/hero_dog_tutor_1792775250819.jpg';
import bathImg from '../assets/images/bath_grooming_service_1792775251205.jpg';
import catImg from '../assets/images/cat_cozy_spa_1792775252903.jpg';
import careImg from '../assets/images/about_care_moment_1792775252966.jpg';
import boutiqueImg from '../assets/images/boutique_pet_items_1792775252906.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  aspectClass: string;
}

export const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'item-1',
      title: 'Higiene e pelagem renovada',
      category: 'Banho & Tosa',
      description: 'Pelo seco, desembaraçado e macio com toalhas de algodão individuais e produtos calmantes.',
      src: bathImg,
      aspectClass: 'md:col-span-2 md:row-span-2 h-96 md:h-full',
    },
    {
      id: 'item-2',
      title: 'Conforto e serenidade para felinos',
      category: 'Gatos',
      description: 'Espaço reservado e sem ruídos para o descanso seguro e tranquilo dos gatos.',
      src: catImg,
      aspectClass: 'md:col-span-1 h-72',
    },
    {
      id: 'item-3',
      title: 'Manejo gentil e afetuoso',
      category: 'Cuidados Profissionais',
      description: 'Respeito aos limites do animal, criando um vínculo de confiança mútua em cada sessão.',
      src: careImg,
      aspectClass: 'md:col-span-1 h-72',
    },
    {
      id: 'item-4',
      title: 'Boutique selecionada & bem-estar',
      category: 'Acessórios & Produtos',
      description: 'Coleiras em couro legítimo, caminhas aconchegantes e brinquedos de estimulação saudável.',
      src: boutiqueImg,
      aspectClass: 'md:col-span-1 h-72',
    },
    {
      id: 'item-5',
      title: 'Espaço limpo e acolhedor',
      category: 'Nosso Espaço',
      description: 'Estrutura contemporânea, iluminação natural, piso higienizado e bancadas ergonômicas.',
      src: heroImg,
      aspectClass: 'md:col-span-2 h-72',
    },
  ];

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + galleryItems.length) % galleryItems.length
    );
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#4F7A5E] mb-2">
              Galeria Visual
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2922] tracking-tight mb-3 [text-wrap:balance]">
              Momentos de cuidado e alegria na Cloud Pet
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Conheça a rotina do nosso espaço, o carinho da equipe e o resultado dos nossos cuidados.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Camera className="w-4 h-4 text-[#4F7A5E]" />
            <span>Fotos reais do espaço e atendimentos</span>
          </div>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`group relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/80 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 4 ? 'md:col-span-1' : ''}`}
            >
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Caption & Metadata overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 line-clamp-1 max-w-md hidden sm:block">
                    {item.description}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 group-hover:bg-[#4F7A5E] group-hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Controls */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-hidden"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-hidden hidden sm:flex items-center justify-center"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 focus:outline-hidden hidden sm:flex items-center justify-center"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[70vh] shadow-2xl">
              <img
                src={galleryItems[selectedImageIndex].src}
                alt={galleryItems[selectedImageIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>
            <div className="mt-4 text-center text-white px-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9FC1A4]">
                {galleryItems[selectedImageIndex].category}
              </span>
              <h3 className="text-xl font-bold mt-1">
                {galleryItems[selectedImageIndex].title}
              </h3>
              <p className="text-sm text-stone-300 mt-1 max-w-xl mx-auto">
                {galleryItems[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
