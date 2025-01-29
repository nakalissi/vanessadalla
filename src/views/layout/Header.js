import React from "react";

function Header() {
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

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#about">
                Sobre
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#services">
                Serviços
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/#pricing">
                Pricing
              </a>
            </li>
            <li className="dropdown">
              <a href="/#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
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
                    <li>
                      <a href="/#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="/#">Deep Drop Down 5</a>
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
              <a className="nav-link scrollto" href="/#contact">
                Contato
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="/#contact">
                Ligue (11) 9 9990 0140
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
