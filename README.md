# Vanessa Dalla – Recrutamento e Carreira 💼

Este é o website oficial da empresa **Vanessa Dalla Recrutamento e Carreira**, desenvolvido com **Next.js** para oferecer alto desempenho, SEO otimizado e uma experiência fluida em dispositivos móveis e desktop.



## 🔍 Sobre o Projeto

O site tem como objetivo principal apresentar os serviços da consultora Vanessa Dalla, com foco em **Recrutamento Especializado**, **Consultoria de Carreira**, **Depoimentos de Clientes** e geração de leads qualificados. A aplicação é moderna, responsiva e otimizada para buscadores como Google e Bing.



## 🚀 Tecnologias Utilizadas

- **Next.js** – Framework React com SSR/SSG para SEO e performance
- **React.js** – Biblioteca de componentes para interfaces modernas
- **TypeScript** – Tipagem estática para maior confiabilidade
- **Swiper.js** – Carrosséis modernos com navegação fluida
- **CSS Modules / Global CSS** – Estilização modular e global
- **GitHub Actions** – Deploy e CI/CD automatizados
- **Imagem otimizada** – Estratégias para carregamento rápido e lazy-loading



## 🧱 Estrutura do Projeto

```
vanessadalla/
├── .github/                 # CI/CD com GitHub Actions
│   └── workflows/
│       └── node.js.yml
├── docs/
│   └── design-tokens.md    # Guia de tokens de design e identidade visual
├── public/
│   ├── manifest.json       # Configuração para PWA
│   ├── favicon.ico         # Ícone do site
│   └── assets/
│       ├── css/
│       │   └── style.css
│       ├── images/
│       │   ├── logo.png, imagens promocionais, etc.
│       │   └── clients/    # Logos de clientes atendidos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/
│   │   ├── _app.tsx        # Inicialização global
│   │   ├── _document.tsx   # HTML customizado
│   │   └── index.tsx       # Página inicial
│   └── styles/
│       └── globals.css     # Estilos globais
├── next.config.js          # Configurações do Next.js
├── tsconfig.json           # Configuração TypeScript
└── package.json            # Scripts e dependências
```



## 🖥️ Executando Localmente

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/nakalissi/vanessadalla.git
cd vanessadalla
```

2. Instale as dependências:

```bash
npm install
# ou yarn
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou yarn dev
```

4. Acesse o navegador em:

```
http://localhost:3000
```



## ⚙️ Scripts

```bash
npm run dev       # Inicia ambiente de desenvolvimento
npm run build     # Compila aplicação para produção
npm start         # Executa aplicação compilada
npm run lint      # Executa verificação de lint
```



## 🌐 Deploy

O projeto pode ser facilmente hospedado nas seguintes plataformas:

- **[Vercel](https://vercel.com)** – Deploy contínuo integrado com GitHub
- **Netlify** – Suporte a SSR/SSG com configurações simples
- **AWS Amplify** – Para escalabilidade empresarial



## 📜 Licença

Distribuído sob licença **MIT**. Veja `LICENSE` para mais detalhes.



## 📬 Contato

- Site: [site.vanessadalla.com.br](https://site.vanessadalla.com.br)
- Instagram: [@vanessadallaconsultoria](https://instagram.com/vanessadallaconsultoria)
- Desenvolvido por: [@nakalissi](https://github.com/nakalissi)



> **Nota**: Este projeto é parte da presença digital da empresa Vanessa Dalla Recrutamento e Carreira. Para uso comercial, entre em contato com o autor.
