import React from 'react';
import { introCardsData } from '../../../data/introCardsData';
import styles from './IntroducaoDpoc.module.css';

export default function IntroducaoDpoc() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.textColumn}>
          <div>
            <span className={styles.subHeading}>
              Entenda a doença
            </span>
            <h2 className={styles.heading}>
              Introdução
            </h2>
          </div>
        </div>
          <div className={styles.divider}>
            <div className={styles.paragraphs}>
              <p>
                A DPOC é uma doença respiratória progressiva que dificulta a passagem do ar pelos pulmões, causando limitação respiratória e comprometendo atividades do dia a dia.
              </p>
              <p>
                Relacionada principalmente ao tabagismo, também pode surgir devido à exposição contínua à fumaça, poeiras e poluição. Fatores genéticos também contribuem para seu desenvolvimento.
              </p>
              <p>
                Embora não tenha cura, o diagnóstico precoce e o tratamento adequado melhoram significativamente a qualidade de vida.
              </p>
            </div>
          

            {/* Coluna da Direita: Bloco de Cards */}
            <div className={styles.cardsColumn}>
              <div className={styles.cardsGrid}>
                {introCardsData.map((card, index) => (
                  <div key={index} className={styles.card}>
                    <span 
                      role="img" 
                      aria-label={card.ariaLabel} 
                      className={styles.cardIcon}
                    >
                      {card.icon}
                    </span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}