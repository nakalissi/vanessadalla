import React from "react";
function Hero() {
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

        <div className="row icon-boxes">
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="ri-money-dollar-circle-line"></i>
              </div>
              <h4 className="title">
                <a href="/">Reduza custos</a>
              </h4>
              <p className="description">
                Aumente a vida útil de seus celulares e evite compras
                desnecessárias.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="ri-stack-line"></i>
              </div>
              <h4 class="title">
                <a href="/">Aumente a produtividade</a>
              </h4>
              <p class="description">
                Evite tempo de inatividade com reparos rápidos e eficientes.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="ri-lock-line"></i>
              </div>
              <h4 class="title">
                <a href="/">Proteja seus dados</a>
              </h4>
              <p class="description">
                Garanta a segurança e confidencialidade das informações
                corporativas.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="ri-fingerprint-line"></i>
              </div>
              <h4 class="title">
                <a href="/">Simplifique sua gestão</a>
              </h4>
              <p class="description">
                Tenha tudo em um só lugar com relatórios completos e
                personalizados.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="ri-thumb-up-line"></i>
              </div>
              <h4 class="title">
                <a href="/">Fique em conformidade</a>
              </h4>
              <p class="description">
                {" "}
                Cumpra com as normas e regulamentações de segurança de dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
