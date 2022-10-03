import Hero from "../components/Hero";
import { Container } from "../components/Container";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Card from "../components/Intro";
import Head from "next/head";
import Script from "next/script";

const Index = () => (
  <div>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${`UA-109222024-1`}`}
    />
    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${`UA-109222024-1`}', {
        page_path: window.location.pathname,
        });
    `}
    </Script>

    <Head>
      <title>Ai Ho aka j3ssie</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Hi, my name is Ai Ho (a male name in my country) and on the Internet I’m known as j3ssie. I’m currently working as senior security engineer"
      />
      <meta property="og:title" content="Ai Ho aka j3ssie" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://j3ssie.github.io" />
      <meta
        property="og:image"
        content="https://avatars3.githubusercontent.com/u/23289085?s=460&u=d61e560a054ac1c7df8ad51fcbaa7d8dfd131fcc&v=4"
      />
      <meta
        property="og:description"
        content="A passionate security engineer and creator of Osmedeus, Metabigor, and Jaeles."
      />
      <meta name="twitter:card" content="" />
      <meta name="twitter:site" content="@j3ssiejjj" />
      <meta name="twitter:creator" content="@j3ssiejjj" />
      <link rel="shortcut icon" href="/static/favicon.png" />
    </Head>

    <Container height="auto" padding="2rem">
      <Card />
      <Hero />
      <Main />
      <Footer />
    </Container>
  </div>
);

export default Index;
