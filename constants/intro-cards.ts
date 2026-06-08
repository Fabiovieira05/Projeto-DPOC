export interface IntroCardItem {
  icon: string;
  ariaLabel: string;
  title: string;
  description: string;
}

export const introCardsData: IntroCardItem[] = [
  {
    icon: '🫁',
    ariaLabel: 'Ícone de pulmões',
    title: 'Obstrução pulmonar',
    description: 'A DPOC reduz a passagem do ar pelos pulmões',
  },
  {
    icon: '🚬',
    ariaLabel: 'Ícone de cigarro aceso',
    title: 'Principal causa',
    description: 'O tabagismo é a principal causa da doença',
  },
  {
    icon: '⚠️',
    ariaLabel: 'Ícone de sinal de alerta',
    title: 'Doença progressiva',
    description: 'Os sintomas tendem a piorar ao longo do tempo',
  },
  {
    icon: '❤️',
    ariaLabel: 'Ícone de coração vermelho',
    title: 'Qualidade de vida',
    description: 'A doença interfere nas atividades diárias e no bem-estar',
  },
];