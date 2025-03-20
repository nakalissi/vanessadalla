import React from "react";
function Contact({ children }) {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Sobre Mim</h2>
          <p>
            Sou Vanessa Dalla, consultora de carreira e headhunter, com vasta
            experiência em ajudar profissionais a alcançarem seus sonhos e
            empresas a encontrarem soluções estratégicas em recrutamento e
            seleção.
          </p>
        </div>

        <div className="row content">
          <div className="col-lg-6 col-md-12">
            <p>
              Meu compromisso é criar conexões autênticas, sempre com
              transparência, empatia e um olhar acolhedor.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Conectar organizações
                aos profissionais ideais, que não apenas impulsionem resultados,
                mas também contribuam para um ambiente de trabalho harmonioso e
                inspirador.
              </li>
              <li>
                <i className="ri-check-double-line"></i> Capacitar pessoas a
                encontrarem o emprego dos seus sonhos, onde possam crescer, se
                desenvolver e receber o devido reconhecimento por suas
                contribuições.
              </li>
              <li>
                <i className="ri-check-double-line"></i> Ser referência em
                consultoria de carreira e recrutamento personalizado no Brasil.
                Valores: Empatia, transparência, excelência e impacto positivo.
              </li>
            </ul>
            <a
              href="https://api.whatsapp.com/send/?phone=5511944563567&amp;text=Ol%C3%A1%2C+seja+bem+vindo+%C3%A1+Vanessa+Dalla%2C+como+podemos+lhe+ajudar+hoje%3F&amp;type=phone_number&amp;app_absent=0"
              target="_blank"
              className="btn-learn-more"
              rel="noreferrer"
            >
              Solicite um orçamento gratuíto
            </a>
          </div>
          <div className="col-lg-6 col-md-12 pt-4 pt-lg-0 text-center">
            <img
              src="/assets/images/vanessa-dalla.jpg"
              alt="Vanessa Dalla"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
