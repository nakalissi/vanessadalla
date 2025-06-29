import React from 'react';
import Hero from './../../components/Hero';
import Main from './../../components/Main';
import Services from '../../components/Services';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Main id="main">
        <Services />
      </Main>
    </>
  );
}
