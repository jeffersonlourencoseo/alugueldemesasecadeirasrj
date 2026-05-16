export const SITE_CONFIG = {
  // Dominio
  domain: 'https://mesasecadeirasrio.com.br',

  // Empresa
  companyName: 'Mesas e Cadeiras Rio',
  companyLegalName: 'Mesas e Cadeiras Rio Locação de Equipamentos LTDA',
  slogan: 'Aluguel de Mesas e Cadeiras para o Seu Evento Perfeito',

  // NAP (Name, Address, Phone) - Essencial para SEO Local
  nap: {
    name: 'Mesas e Cadeiras Rio',
    address: 'Av. Brasil, 11201',
    addressComplement: 'Penha Circular',
    city: 'Rio de Janeiro',
    state: 'RJ',
    postalCode: '21012-351',
    country: 'BR',
    phone: '+55 21 99775-1577',
    phoneDisplay: '(21) 99775-1577',
    whatsapp: '+55 21 99775-1577',
    whatsappDisplay: '(21) 99775-1577',
    email: 'contato@mesasecadeirasrio.com.br',
  },

  // Horario de Funcionamento (Schema.org format)
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 08:00-14:00',
  ],

  // Redes Sociais
  social: {
    instagram: 'https://instagram.com/mesasecadeirasrio',
    facebook: 'https://facebook.com/mesasecadeirasrio',
    whatsappLink:
      'https://wa.me/5521997751577?text=Olá,%20achei%20seu%20site%20no%20google%20e%20gostaria%20de%20saber%20mais%20informações!',
  },

  // SEO Defaults
  seo: {
    title: 'Aluguel de Mesas e Cadeiras no Rio de Janeiro | Entrega Rápida',
    description:
      'Aluguel de mesas e cadeiras no Rio de Janeiro. Entrega rápida, preço justo e equipamentos de qualidade para festas, eventos corporativos e celebrações. Solicite um orçamento!',
    keywords: [
      'aluguel de mesas e cadeiras Rio de Janeiro',
      'aluguel de mesas para festa',
      'aluguel de cadeiras Rio',
      'mesas e cadeiras para eventos',
      'locação de mesas e cadeiras',
      'aluguel de móveis para festa RJ',
    ],
    ogImage: '/og-image.jpg',
    author: 'Mesas e Cadeiras Rio',
    locale: 'pt_BR',
  },

  // Regiao de Atuação (Local SEO)
  serviceArea: {
    city: 'Rio de Janeiro',
    state: 'RJ',
    neighborhoods: [
      'Centro',
      'Copacabana',
      'Ipanema',
      'Leblon',
      'Barra da Tijuca',
      'Tijuca',
      'Botafogo',
      'Flamengo',
      'Penha',
      'Penha Circular',
      'Iraja',
      'Vicente de Carvalho',
      'Olaria',
      'Bonsucesso',
      'Ramos',
    ],
  },
} as const;
