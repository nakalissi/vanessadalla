'use client';
import React from 'react';
import ServicesList from './ServiceList';
import {useServices} from '../contexts/services';

export default function Enterprise() {
  const services = useServices();
  return (
    <section id="enterprise" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Soluções para Empresas</h2>
          <p>
            Oferecemos soluções exclusivas e personalizadas para cada cliente,
            unindo experiência prática e ferramentas modernas para garantir
            eficiência e impacto. Nosso foco está na criação de conexões
            genuínas entre candidatos e empresas, priorizando a experiência de
            ambos. Combinamos análises precisas com uma execução ágil,
            acelerando processos e entregando resultados com excelência.
          </p>
        </div>

        <div className="row">
          <ServicesList services={services} />
        </div>
      </div>
    </section>
  );
}
