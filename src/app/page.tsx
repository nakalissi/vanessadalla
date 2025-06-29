import React from 'react';
import Hero from './../components/Hero';
import Main from './../components/Main';
import About from './../components/About';
import Services from '../components/Services';
import Enterprise from '../components/Enterprise';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Estatistics from '../components/Estatistics';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Main id="main">
        <Enterprise />
        <Clients />
        <About />
        <Estatistics />
        <Testimonials />
        <Faq />
      </Main>
    </>
  );
}
