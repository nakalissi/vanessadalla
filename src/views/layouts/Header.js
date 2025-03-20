function Header() {
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
        <a href="/" class="logo">
          <img
            alt="Vanessa Dalla Carreira e Talentos"
            class="img-fluid"
            src="/assets/images/logo.png"
          />
        </a>
        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto" href="/#about">
                Sobre Mim
              </a>
            </li>
            <li class="dropdown">
              <a href="/#">
                <span>Soluções</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li class="dropdown">
                  <a href="/#">
                    <span>Empresariais</span>{" "}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="/#services-companies">Recrutamento e Seleção</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="/#">
                    <span>Profissionais</span>{" "}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="/#services">Orientação de Carreira</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="nav-link scrollto"
                href="https://jobs.recrutei.com.br/vanessa-dalla-carreira-talentos"
                target="_blank"
                rel="noreferrer"
              >
                Mural de Vagas
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="/#clients">
                Clientes
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=5511944563567&amp;text=Ol%C3%A1%2C+seja+bem+vindo+%C3%A1+Vanessa+Dalla%2C+como+podemos+lhe+ajudar+hoje%3F&amp;type=phone_number&amp;app_absent=0"
                class="whatsapp-button getstarted bg-success"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp <i class="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
