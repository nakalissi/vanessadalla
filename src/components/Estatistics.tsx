import React from 'react';

export default function Estatistics() {
  return (
    <section id="estatistics" className="clients section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Números</h2>
          <p>
            Atendemos profissionais de todo o Brasil que buscam novas
            oportunidades, desejam mudar de área ou precisam de orientação para
            crescer na carreira. Para empresas de diferentes portes, oferecemos
            soluções estratégicas para contratação ágil, redução do turnover e
            retenção de talentos com alinhamento cultural.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in">
            <h3>230+ clientes satisfeitos</h3>
          </div>
          <div
            className="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in">
            <h3>1500+ pessoas realocadas</h3>
          </div>
          <div
            className="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in">
            <h3>800+ headhunters no ecossistema</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
