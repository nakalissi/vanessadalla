import { useState } from "react";

function Header() {
  let [isMobile, setMobile] = useState(false);
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo">
          <img
            src="/assets/images/logo.png"
            alt="Vanessa Dalla Carreira e Talentos"
            className="img-fluid"
          />
        </a>

        <nav
          id="navbar"
          className={isMobile ? "navbar navbar-mobile" : "navbar"}
        >
          <ul>
            <li>
              <a className="nav-link scrollto" href="/#about">
                Sobre Mim
              </a>
            </li>
            <li className="dropdown">
              <a href="/#">
                <span>Soluções</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li className="dropdown">
                  <a href="/#">
                    <span>Empresariais</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="/">Recrutamento e Seleção</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="/#">
                    <span>Profissionais</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="/professionals">Orientação de Carreira</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#clients">
                Clientes
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=5511944563567&text=Ol%C3%A1%2C+seja+bem+vindo+%C3%A1+Tijob%2C+como+podemos+lhe+ajudar+hoje%3F&type=phone_number&app_absent=0"
                className="whatsapp-button getstarted bg-success"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp <i className="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
          <i
            className={
              isMobile
                ? "bi bi-x-lg mobile-nav-toggle"
                : "bi bi-list mobile-nav-toggle"
            }
            onClick={() => setMobile((isMobile = !isMobile))}
          ></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
