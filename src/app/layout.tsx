import type {ReactNode} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.scss';
import {ServicesProvider} from '../contexts/services';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>
          BMVagas - Filial Dalla | Assessoria de Recrutamento e Seleção
        </title>
        <meta
          name="description"
          content="Consultoria especializada em recrutamento e carreira. Conectamos talentos às melhores oportunidades, oferecendo coaching de carreira, transição profissional, otimização de currículos e perfis no LinkedIn. Potencialize sua trajetória no mercado de trabalho com estratégias personalizadas!"
        />
        <meta
          name="keywords"
          content="consultoria de recrutamento, seleção de talentos, coaching de carreira, transição profissional, recolocação no mercado, currículo otimizado, LinkedIn profissional, vagas de emprego, desenvolvimento profissional, mercado de trabalho, employer branding, RH estratégico, estratégias de recrutamento, crescimento profissional, headhunting"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="BMVagas - Filial Dalla | Assessoria de Recrutamento e Seleção"
        />
        <meta
          property="og:description"
          content="Consultoria especializada em recrutamento e carreira. Conectamos talentos às melhores oportunidades."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://site.vanessadalla.com.br/" />
        <meta property="og:image" content="/assets/images/logo.png" />
        <link rel="canonical" href="https://site.vanessadalla.com.br/" />
        <link rel="apple-touch-icon" href="/assets/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ServicesProvider>
          <Header />
          {children}
          <Footer />
        </ServicesProvider>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8314542980158334"
          crossOrigin="anonymous"></script>
        <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="/assets/vendor/aos/aos.js"></script>
        <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="/assets/js/main.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TZJT56NL');
            `,
          }}
        />
      </body>
    </html>
  );
}
