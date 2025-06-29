import React from 'react';

export default function About () {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Quem Somos</h2>
          <p>
            A BM VAGAS é uma franquia de Recrutamento e Seleção que conecta empresas aos melhores profissionais — agora na liderança de Vanessa Dalla, consultora de Carreira & Talentos, com certificação DISC e atuação estratégica em RH.
          </p>
        </div>

        <div className="row content">
          <div className="col-lg-6 col-md-12">
            <p>
              Como franqueada da
              {' '}
              <strong>BM VAGAS</strong>
              , minha missão é promover recrutamentos estratégicos, social e eficientes, unindo talentos certos a empresas que desejam crescer com propósito.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line" />
                Transformar vidas e impulsionar negócios por meio de conexões humanas e profissionais genuínas.
              </li>
              <li>
                <i className="ri-check-double-line" />
                Tecnologia + inteligência artificial para seleção assertiva.
              </li>
              <li>
                <i className="ri-check-double-line" />
                Atendimento humanizado e suporte contínuo.
              </li>
              <li>
                <i className="ri-check-double-line" />
                Garantia de 30 dias.
              </li>
              <li>
                <i className="ri-check-double-line" />
                Modelo de negócio validado, reconhecido pela
                {' '}
                <strong>EXAME</strong>
                {' '}
                como destaque.
              </li>
            </ul>
            <a
              href="https://api.whatsapp.com/send/?phone=5511944563567&amp;text=Ol%C3%A1%2C+seja+bem+vindo+%C3%A1+BM+VAGAS+DALLA%2C+como+podemos+lhe+ajudar+hoje%3F&amp;type=phone_number&amp;app_absent=0"
              target="_blank"
              className="btn-learn-more"
              rel="noreferrer"
            >
              Fale com um especialista
            </a>
          </div>
          <div className="col-lg-6 col-md-12 pt-4 pt-lg-0 text-center">
            <img
              src="/assets/images/vanessa63.jpg"
              alt="Vanessa Dalla"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
