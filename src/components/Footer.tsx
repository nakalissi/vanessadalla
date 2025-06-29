'use client';
import {useServices} from '../contexts/services';

export default function Footer() {
  const servicesMenu = useServices();
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <img
                src="/assets/images/logo.png"
                alt="Vanessa Dalla"
                width={150}
              />
              <h3>Vanessa Dalla</h3>
              <p>
                <strong>CNPJ:</strong> 55.029.329/0001-77
                <br />
                <br />
                <strong>Celular:</strong> +55 (11) 94456-3567
                <br />
                <strong>Email:</strong>{' '}
                <a href="mailto:bmvagas.dalla@gmail.com">
                  bmvagas.dalla@gmail.com
                </a>
                <br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/#enterprise">Soluções</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/#clients">Clientes</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/#about">Quem Somos</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/#estatistics">Nossos Números</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/#testimonials">Depoimentos</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{' '}
                  <a href="/#faq">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Soluções</h4>
              <ul>
                {servicesMenu.map((service, idx) => (
                  <li key={idx}>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href={service.link}>{service.title}</a>
                  </li>
                ))}
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
          <a
            href="https://api.whatsapp.com/send/?phone=5511944563567&text=Ol%C3%A1%2C+seja+bem+vindo+%C3%A1+BM+VAGAS+DALLA%2C+como+podemos+lhe+ajudar+hoje%3F&type=phone_number&app_absent=0"
            className="facebook"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/bmvagas.dalla"
            className="instagram"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vanessadallarosa"
            className="linkedin"
            target="_blank"
            rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
