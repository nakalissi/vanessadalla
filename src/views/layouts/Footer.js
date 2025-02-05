import React from "react";
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <img src="assets/images/logo.png" alt="Vanessa Dalla" />
              <h3>Vanessa Dalla</h3>
              <p>
                <strong>CNPJ:</strong> 55.029.329/0001-77
                <br />
                <br />
                <strong>Celular:</strong> +55 11 9 4456-3567
                <br />
                <strong>Email:</strong> contato@vanessadalla.com.br
                <br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#about">Sobre Mim</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#services">Serviços</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#clients">Clientes</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/products">Produtos</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#contact">Contato</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Serviços para Empresas</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#">Recrutamento e Seleção Personalizado</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Serviços Profissionais</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#">Conquiste sua Vaga dos Sonhos</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#">Otimização de Currículo e Linkedin</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/#">Orientação de Carreira</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">&copy; Copyright. All Rights Reserved</div>
          <div className="credits">Designed by nkweb</div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="/#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/vanessadallaconsultora"
            className="instagram"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vanessadallarosa"
            className="linkedin"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
