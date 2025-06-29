import React from "react";
import TestimonialsSwiper from "./TestimonialsSwiper";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Depoimento de Clientes Satisfeitos</h2>
          <p>
            Entregamos 90% de acertividades em contratações em diversos
            cargos para uma empresa no setor de logística e comércio
            Exterior por meio de nossa metodologia personalizada de
            recrutamento com um olhar acertivo e empático.
          </p>
        </div>

        <TestimonialsSwiper />

      </div>
    </section>
  );
}