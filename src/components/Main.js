import React from "react";

import Contact from "./Contact";
import About from "./About";

function Main() {
  return (
    <>
      <main id="main">
        <About />

        {/* <section id="about" className="about-video">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 video-box align-self-baseline position-relative"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src="assets/images/image5.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div
              className="col-lg-6 pt-3 pt-lg-0 content"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3>Proposta de valor</h3>
              <p className="fst-italic">
                Na Solution2.me, oferecemos muito mais que reparos de celulares;
                gerenciamos integralmente seus dispositivos móveis com um
                serviço abrangente que inclui controle de estoque, sanitização
                de dados e recompra de aparelhos usados, tudo isso com a
                garantia de peças originais e técnicos especializados.
              </p>
              <ul>
                <li>
                  <i className="bx bx-check-double"></i> Garantia de 3 meses
                  para reparos
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Satisfação garantida ou
                  seu dinheiro de volta
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Segurança e
                  confidencialidade dos dados.
                </li>
              </ul>
              <p>
                <a href="/#contact" className="btn-get-started scrollto">
                  Solicite um orçamento gratuito
                </a>
              </p>
            </div>
          </div>
        </div>
      </section> */}

        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Serviços pra Profissionais</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-green">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                      ></path>
                    </svg>
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="/">Conquiste Sua Vaga dos Sonhos</a>
                  </h4>
                  <p>
                    Planejamento estratégico de carreira com foco em resultados
                    rápidos.
                  </p>
                  <p>
                    Dicas práticas para transições de área e reinserção no
                    mercado.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box iconbox-green">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                      ></path>
                    </svg>
                    <i className="bx bx-file"></i>
                  </div>
                  <h4>
                    <a href="/">Otimização de Currículo e LinkedIn</a>
                  </h4>
                  <p>Perfis otimizados que atraem recrutadores com rapidez.</p>
                  <p>
                    Currículos personalizados, claros e altamente impactantes.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box iconbox-green">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                      ></path>
                    </svg>
                    <i className="bx bx-like"></i>
                  </div>
                  <h4>
                    <a href="/">
                      Esteja Pronto para Impressionar em Sua Próxima Entrevista
                    </a>
                  </h4>
                  <p>
                    Simulações realistas e feedbacks detalhados para maximizar
                    desempenho.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-green">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                      ></path>
                    </svg>
                    <i className="bx bx-refresh"></i>
                  </div>
                  <h4>
                    <a href="/">Orientação de Carreira</a>
                  </h4>
                  <p>
                    Desenvolvimento de autoconhecimento e alinhamento com
                    objetivos profissionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services-companies" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Serviços para Empresas</h2>
              <p>
                Oferecemos soluções exclusivas e personalizadas para cada
                cliente, unindo experiência prática e ferramentas modernas para
                garantir eficiência e impacto. Nosso foco está na criação de
                conexões genuínas entre candidatos e empresas, priorizando a
                experiência de ambos. Combinamos análises precisas com uma
                execução ágil, acelerando processos e entregando resultados com
                excelência.
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box iconbox-green">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                      ></path>
                    </svg>
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="/">Recrutamento e Seleção personalizado</a>
                  </h4>
                  <p>
                    Processos personalizados para encontrar talentos alinhados à
                    cultura organizacional.
                  </p>
                  <p>
                    Estratégias que garantem redução do turnover e alto
                    engajamento.
                  </p>
                  <p>
                    Com objetivo de aliar velocidade a qualidade do processo
                    seletivo, utilizamos ferramentas de inteligência artificial
                    e avaliação comportamental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients">
          <div className="container">
            <div className="section-title">
              <h2>Clientes que Atendemos</h2>
              <p>
                Atendemos profissionais de todo o Brasil que buscam novas
                oportunidades, desejam mudar de área ou precisam de orientação
                para crescer na carreira. Para empresas de diferentes portes,
                oferecemos soluções estratégicas para contratação ágil, redução
                do turnover e retenção de talentos com alinhamento cultural.
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/clients/biomedical.webp"
                  className="img-fluid"
                  alt="Bio Medical"
                />
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/clients/dsv.svg"
                  className="img-fluid"
                  alt="DSV Logística"
                />
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/clients/comexport.png"
                  className="img-fluid"
                  alt="Comexport"
                />
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/clients/laborpack.png"
                  className="img-fluid"
                  alt="Laborpack"
                />
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/clients/ra7.jpg"
                  className="img-fluid"
                  alt="RA7 Contabilidade"
                />
              </div>
              <div
                className="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/clients/starbucks.svg"
                  className="img-fluid"
                  alt="Starbucks"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Depoimento de Clientes Satisfeitos</h2>
              <p>
                Entregamos 90% de acertividades em contratações em diversos
                cargos para uma empresa no setor de logística e comércio
                Exterior por meio de nossa metodologia personalizada de
                recrutamento com um olhar acertivo e empático.
              </p>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Trabalhei com a Vanessa Dalla durante minha recolocação
                      profissional e posso afirmar que ela é uma profissional
                      excepcional. Sua capacidade de entender minhas
                      necessidades e me oferecer soluções personalizadas foi
                      fundamental para o meu sucesso. Recomendo seus serviços a
                      qualquer pessoa que busca uma recolocação profissional de
                      qualidade.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/images/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Eric Kanashiro Z.</h3>
                    <h4>Gerente de Logística</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>A
                      Vanessa foi uma pessoa sensacional em meu processo
                      seletivo. Sempre muito atenciosa, cumprindo os prazos
                      estipulados de retorno, fez perguntas estratégicas e
                      condizentes com minha experiência profissional. Só tenho a
                      agradecer. 😊
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/images/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Bruna Evangelista</h3>
                    <h4>Customer Success</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Entrevista é sempre desafiadora, mas posso afirmar que foi
                      uma das melhores que já fiz!!! Vanessa você tem a empatia
                      com o entrevistado e que deixa o bate papo mais leve e
                      mais encorajador!!! Continue desse jeito, que dessa forma
                      irá ajudar a todos que tiverem o privilégio de ser
                      entrevistado por você!!! Só tenho agradecer
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/images/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Cleide Serra Coelho</h3>
                    <h4>Financeiro</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Tive o prazer de fazer consultoria de currículo com a
                      Vanessa. Ela me apresentou técnicas de como encontrar
                      palavras-chave de acordo com o meu objetivo, como
                      estruturar de maneira a chamar atenção dos recrutadores,
                      destacando minhas principais habilidades ao longo de minha
                      experiência profissional, além de dicas de entrevista e de
                      LinkedIn! Recomendo muito o trabalho desta excelente
                      profissional.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/images/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Larissa Delalibera</h3>
                    <h4>Master Data Management</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>A
                      Vanessa é super competente, super ouvinte, fornece ótimos
                      insights de carreira que transforma o nosso olhar em
                      relação ao mercado, ela me apoiou num momento sensível da
                      minha correira e deu super certo, obrigado Vanessa!
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/images/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Ricardo Alves da Silva</h3>
                    <h4>Gerente de Sistemas Grupo Amil</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Perguntas Frequentes</h2>
            </div>

            <div className="faq-list">
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    href="/#faq-list-2"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    Quanto tempo dura o processo de recrutamento?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      O tempo médio de um processo de recrutamento pode variar
                      de acordo com a complexidade da vaga, o nível hierárquico
                      e a disponibilidade de candidatos. o prazo médio costuma
                      ser de 15 a 45 dias . Porém, com nossa metodologia ágil e
                      uso de ferramentas modernas, como inteligência artificial
                      e avaliação comportamental, buscamos reduzir esse prazo,
                      mantendo a qualidade e eficiência na entrega dos melhores.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    href="/#faq-list-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Atendem apenas empresas de grande porte?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Sim, atendemos empresas de todos os tamanhos e segmentos.
                      No entanto, nossa principal expertise é no ramo de
                      logística e comércio exterior, onde desenvolvemos soluções
                      específicas para atender às necessidades complexas desses
                      setores. Utilizamos nossa experiência para garantir
                      processos eficientes e alinhados às melhores práticas de
                      mercado, sempre com agilidade e qualidade no recrutamento
                      e seleção.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default Main;
