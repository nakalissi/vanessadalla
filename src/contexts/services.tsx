'use client';
import React, {createContext, useContext, ReactNode} from 'react';

type Service = {
  icon: string;
  title: string;
  link: string;
  description: string;
};

const services: Service[] = [
  {
    icon: 'bx bx-group',
    title: 'Recrutamento e Seleção',
    link: '#recrutamento-selecao',
    description: 'Serviços completos, desde triagem até contratação.',
  },
  {
    icon: 'bx bx-spreadsheet',
    title: 'Divulgação de Vagas & Recepção de Currículos',
    link: '#divulgacao-vagas',
    description:
      'Gestão eficiente de currículos e contato direto com candidatos.',
  },
  {
    icon: 'bx bx-chalkboard',
    title: 'Mentoria, Treinamentos & Coaching',
    link: '#mentoria-treinamentos',
    description:
      'Desenvolvimento pessoal e profissional para candidatos e headhunters.',
  },
  {
    icon: 'bx bxs-school',
    title: 'Programa de Estágio',
    link: '#programa-de-estagio',
    description: 'Parcerias com empresas para recrutamento de estagiários.',
  },
  {
    icon: 'bx bx-briefcase-alt',
    title: 'Mão de Obra Temporária & Terceirização',
    link: '#mao-de-obra',
    description: 'Mão de Obra Temporária & Terceirização.',
  },
  {
    icon: 'bx bx-user-voice',
    title: 'Seja Head Hunter - Trabalhe com RH onde quiser',
    link: '#head-hunter',
    description:
      'Seja um HeadHunter 6.0, com trabalho remoto, alta rentabilidade e certificação exclusiva — capacite-se com Vanessa para conduzir processos seletivos de forma estratégica.',
  },
];

const ServicesContext = createContext<Service[]>(services);

export function ServicesProvider({children}: {children: ReactNode}) {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  return useContext(ServicesContext);
}
