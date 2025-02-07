import React from "react";
function Contact({ children }) {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Fale com um especialista</h2>
          <p>
            Estamos prontos para ajudar você ou sua empresa a atingir o próximo
            nível.
          </p>
          <p>
            Pronto para transformar sua carreira ou sua empresa? Entre em
            contato agora mesmo e descubra como podemos ajudar!
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Endereço:</h4>
                <p>São Paulo/SP</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>contato@vanessadalla.com.br</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Ligue:</h4>
                <p>+55 11 9 4456-3567</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row gy-2 gx-md-3">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Assunto"
                    required
                  />
                </div>
                <div className="form-group col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Messagem"
                    required
                  ></textarea>
                </div>
                <div className="my-3 col-12">
                  <div className="loading">Caregando...</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center col-12">
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
