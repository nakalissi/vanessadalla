'use client';
import Link from 'next/link';
import {useServices} from '../contexts/services';

export default function Header() {
  const servicesMenu = useServices();
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/" className="logo">
          <img
            alt="BM Vagas - Filial Dalla"
            className="img-fluid"
            src="/assets/images/logo.png"
            width={150}
          />
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li className="dropdown">
              <a href="#">
                <span>Soluções</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                {servicesMenu.map((service, idx) => (
                  <li key={idx}>
                    <a
                      href={service.link}
                      key={idx}
                      className="nav-link scrollto">
                      <span>{service.title}</span>{' '}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="https://jobs.recrutei.com.br/bm-vagas"
                target="_blank"
                rel="noreferrer">
                Mural de Vagas
              </a>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#clients">
                Clientes
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#about">
                Quem somos
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/#faq">
                FAQ
              </Link>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=5511944563567&amp;text=Ol%C3%A1%2C+seja+bem+vindo+%C3%A1+BM+VAGAS+DALLA%2C+como+podemos+lhe+ajudar+hoje%3F&amp;type=phone_number&amp;app_absent=0"
                className="whatsapp-button getstarted bg-success"
                target="_blank"
                rel="noreferrer">
                Whatsapp <i className="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
