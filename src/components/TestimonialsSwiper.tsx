'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';

export default function TestimonialsSwiper() {
  const testimonials = [
    {
      text: 'Vanessa é uma profissional excelente! Nos auxiliou na busca de um profissional chave para nossa empresa. Contribuiu com seu conhecimento vasto em seleção e recrutamento. Desde o desenho da vaga e perfil do candidato, análises, conclusão e processo de contratação. Sua percepção, sutileza e educação foram determinantes para identificar profissionais que tivessem sinergia com a cultura da empresa e competências para a vaga em questão. Estamos muito satisfeitos e em breve Vanessa nos auxiliará em novas vagas. Desejo muito sucesso a você, Vanessa! A Laborpack é grata por esta parceira!',
      name: 'Ingrid Poppe',
      position: 'Diretora Geral',
    },
    {
      text: 'A Vanessa foi uma pessoa sensacional em meu processo seletivo. Sempre muito atenciosa, cumprindo os prazos estipulados de retorno, fez perguntas estratégicas e condizentes com minha experiência profissional. Só tenho a agradecer. 😊',
      name: 'Bruna Evangelista',
      position: 'Customer Success',
    },
    {
      text: 'Entrevista é sempre desafiadora, mas posso afirmar que foi uma das melhores que já fiz!!! Vanessa você tem a empatia com o entrevistado e que deixa o bate papo mais leve e mais encorajador!!! Continue desse jeito, que dessa forma irá ajudar a todos que tiverem o privilégio de ser entrevistado por você!!! Só tenho agradecer',
      name: 'Cleide Serra Coelho',
      position: 'Financeiro',
    },
    {
      text: 'Tive o prazer de fazer consultoria de currículo com a Vanessa. Ela me apresentou técnicas de como encontrar palavras-chave de acordo com o meu objetivo, como estruturar de maneira a chamar atenção dos recrutadores, destacando minhas principais habilidades ao longo de minha experiência profissional, além de dicas de entrevista e de LinkedIn! Recomendo muito o trabalho desta excelente profissional.',
      name: 'Larissa Delalibera',
      position: 'Master Data Management',
    },
    {
      text: 'A Vanessa é super competente, super ouvinte, fornece ótimos insights de carreira que transforma o nosso olhar em relação ao mercado, ela me apoiou num momento sensível da minha correira e deu super certo, obrigado Vanessa!',
      name: 'Ricardo Alves da Silva',
      position: 'Gerente de Sistemas Grupo Amil',
    },
  ];
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="testimonials-swiper">
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              {testimonial.text}
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.position}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
