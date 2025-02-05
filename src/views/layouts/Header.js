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
                <span>Serviços</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="/#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="/#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="/#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">Drop Down 2</a>
                </li>
                <li>
                  <a href="/#">Drop Down 3</a>
                </li>
                <li>
                  <a href="/#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#clients">
                Clientes
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/products">
                Produtos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#contact">
                Contato
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="/#contact">
                Ligue +55 11 9 4456-3567
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5511948691403&text=Ol%C3%A1%2C+seja+bem+vindo+%C3%A1+Tijob%2C+como+podemos+lhe+ajudar+hoje%3F&type=phone_number&app_absent=0"
                class="whatsapp-button getstarted scrollto"
                target="_blank"
              >
                Manda um <i class="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={() => setMobile((isMobile = !isMobile))}
          ></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
