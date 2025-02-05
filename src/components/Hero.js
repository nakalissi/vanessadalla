import React from "react";
function Hero({ children }) {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center mt-10">
            <h1>
              Transformamos trajetórias profissionais e ajudamos empresas a
              encontrar os talentos certos de maneira diferenciada e eficaz.
            </h1>
            <h2>
              Bem-vindo (a) ao site oficial da Vanessa Dalla, especialista em
              recrutamento, seleção e carreira!
            </h2>
          </div>
        </div>
        <div className="text-center">
          <a href="#contact" className="btn-get-started scrollto">
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
