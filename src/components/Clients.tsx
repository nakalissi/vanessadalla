import React from 'react';

export default function Clients() {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Clientes que Atendemos</h2>
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
            className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in">
            <img
              src="assets/images/clients/biomedical.webp"
              className="img-fluid"
              alt="Bio Medical"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in">
            <img
              src="assets/images/clients/dsv.svg"
              className="img-fluid"
              alt="DSV Logística"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in">
            <img
              src="assets/images/clients/comexport.png"
              className="img-fluid"
              alt="Comexport"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in">
            <img
              src="assets/images/clients/laborpack.png"
              className="img-fluid"
              alt="Laborpack"
            />
          </div>
          <div
            className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-in">
            <img
              src="assets/images/clients/starbucks.svg"
              className="img-fluid"
              alt="Starbucks"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
