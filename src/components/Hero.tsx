import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center mt-10">
            <h1>Quer contratar com agilidade ou conquistar uma nova vaga?</h1>
            <h2>
              A franquia BM VAGAS, com o toque pessoal de Vanessa Dalla te ajuda
              nessa jornada.
            </h2>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://jobs.recrutei.com.br/bm-vagas"
            className="btn-get-started scrollto me-3"
            target="_blank">
            Profisional
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5511944563567&amp;text=Ol%C3%A1%2C+seja+bem+vindo+%C3%A1+BM+VAGAS+DALLA%2C+como+podemos+lhe+ajudar+hoje%3F&amp;type=phone_number&amp;app_absent=0"
            className="btn-get-started scrollto">
            Empresa
          </a>
        </div>
      </div>
    </section>
  );
}
