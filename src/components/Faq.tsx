import React from "react";
import AccordionList from "./AccordionList";

export default function Faq() {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Perguntas Frequentes</h2>
        </div>
        <AccordionList />
      </div>
    </section>
  );
}