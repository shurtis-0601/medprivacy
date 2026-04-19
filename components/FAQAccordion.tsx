"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { FAQ_ITEMS } from "@/lib/faqs";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="faq">
      <div className="container">
        <FadeIn className="faq-header">
          <div className="section-label">FAQ</div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before getting started.</p>
        </FadeIn>
        <FadeIn className="faq-grid">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq-item" key={item.question}>
                <button
                  type="button"
                  className={`faq-q${isOpen ? " open" : ""}`}
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  {item.question}
                  <span className="faq-arrow">▼</span>
                </button>
                <div className={`faq-a${isOpen ? " open" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
