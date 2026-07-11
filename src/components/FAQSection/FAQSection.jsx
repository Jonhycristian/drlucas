import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona a consulta domiciliar para pets?",
      answer: "Levamos todos os equipamentos necessários para realizar um exame clínico completo na sua casa. Isso reduz o estresse do animal, que não precisa se deslocar, e traz mais comodidade para você. Ideal para vacinação, consultas de rotina e avaliações gerais."
    },
    {
      question: "Quais cidades da região você atende?",
      answer: "O atendimento principal é em Bragança Paulista - SP, mas também atendo cidades vizinhas na região bragantina, tanto para clínicas de pequenos quanto para propriedades de grandes animais. Entre em contato para verificar a disponibilidade de deslocamento."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos pagamentos via PIX, cartões de crédito e débito, e dinheiro. Para planos de acompanhamento contínuo em propriedades rurais, podemos negociar pacotes mensais."
    },
    {
      question: "Você atende como veterinário 24 horas em Bragança Paulista?",
      answer: "Sim, ofereço suporte de urgência e emergência veterinária 24 horas em Bragança Paulista e região, mediante disponibilidade. Caso seja uma situação crítica com seu pet ou animal de grande porte, entre em contato imediatamente pelo WhatsApp ou ligação."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="duvidas">
      <div className={`container ${styles.container}`}>
        <h2 className="section-title">Dúvidas Frequentes</h2>
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className={styles.icon} />
                ) : (
                  <ChevronDown className={styles.icon} />
                )}
              </button>
              <div 
                className={styles.answerWrapper}
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
