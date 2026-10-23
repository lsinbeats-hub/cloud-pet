/**
 * Configurações Centrais do Estabelecimento - Cloud Pet
 * Demonstração comercial desenvolvida pela Creative Cloud Studios.
 * 
 * Este arquivo centraliza todas as informações editáveis do pet shop.
 * Para personalizar para um novo cliente, basta alterar os campos abaixo.
 */

export interface PetShopConfig {
  name: string;
  tagline: string;
  agencyCredit: string;
  agencyUrl: string;
  contact: {
    whatsappNumber: string; // Formato internacional sem símbolos: 55 + DDD + Número
    whatsappFormatted: string; // Exibição visual
    phoneFormatted: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    fullFormatted: string;
    reference: string;
    googleMapsEmbedUrl?: string; // Espaço reservado para o iframe do Google Maps oficial
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sundayAndHolidays: string;
  };
  defaultMessages: {
    generalInquiry: string;
    appointment: string;
    serviceQuote: (serviceName: string) => string;
    productInquiry: (productName: string) => string;
  };
}

export const petShopConfig: PetShopConfig = {
  name: 'Cloud Pet',
  tagline: 'Cuidado, bem-estar e carinho em cada detalhe.',
  agencyCredit: 'Creative Cloud Studios',
  agencyUrl: 'https://creativecloudstudios.com',
  contact: {
    // NÚMERO DE DEMONSTRAÇÃO — Facilmente substituível pelo número real do cliente:
    whatsappNumber: '5511999990000',
    whatsappFormatted: '(11) 99999-0000',
    phoneFormatted: '(11) 3200-0000',
    email: 'contato@cloudpet.exemplo.com.br',
    instagramHandle: '@cloudpet.oficial',
    instagramUrl: 'https://instagram.com',
  },
  address: {
    // Dados ilustrativos claramente identificados para demonstração comercial:
    street: 'Avenida das Palmeiras',
    number: '740',
    neighborhood: 'Jardim Primavera',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567',
    fullFormatted: 'Av. das Palmeiras, 740 — Jardim Primavera, São Paulo - SP',
    reference: 'Próximo à Praça Central, com vagas exclusivas para clientes.',
    // Iframe de demonstração focado em área urbana verde e moderna:
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197577546738!2d-46.65657118447545!3d-23.561349584682498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr',
  },
  businessHours: {
    weekdays: 'Segunda a Sexta: 08h às 19h',
    saturday: 'Sábado: 08h30 às 17h',
    sundayAndHolidays: 'Domingos e Feriados: Fechado',
  },
  defaultMessages: {
    generalInquiry: 'Olá! Conheci a Cloud Pet pelo site e gostaria de saber mais sobre os serviços e horários disponíveis.',
    appointment: 'Olá! Conheci a Cloud Pet pelo site e gostaria de agendar um atendimento para o meu pet.',
    serviceQuote: (serviceName: string) => 
      `Olá! Estava navegando no site da Cloud Pet e gostaria de saber mais sobre o serviço de ${serviceName}.`,
    productInquiry: (productName: string) => 
      `Olá! Vi o produto "${productName}" no site da Cloud Pet e gostaria de consultar a disponibilidade.`,
  },
};

/**
 * Utilitário para construir links diretos do WhatsApp
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const number = petShopConfig.contact.whatsappNumber;
  const message = customMessage || petShopConfig.defaultMessages.generalInquiry;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
