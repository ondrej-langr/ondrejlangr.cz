import styled from '@emotion/styled';
import Head from 'next/head';
import HeadTitle from '../components/HeadTitle'
import PageDescription from '../components/PageDescription'
import PageTitle from '../components/PageTitle'
import TitledSection from '../components/TitledSection'

const P = styled.p({
  fontSize:" 1.1em",
  fontWeight: 500,
  color: "#071522e3",
  maxWidth: "740px"
});

export default function Home() {
  return <>
    <HeadTitle title={"Hlavní stránka"} />
    <Head>
      <meta name={"description"} content="Hledáte správného programátora, který je schopný se nezalekne maličkostí, tak trochu superman? Můžu s hrdostí oznámit, že tady Vaše hledání končí. Jmenuju se Ondřej Langr a odteď jsem Vaše solution na webový development." />
      <meta name="keywords" content="HTML, CSS, JavaScript, Fullstack development, React, Vue, Vuejs, Svelte, Android, Laravel, Redux, Zustand, Top programátor, webový specialista, Webapp, PWA" />
      <meta name="author" content="Ondřej Langr" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div>
      <PageTitle /> 
      <PageDescription />

      <TitledSection
        title={"Technologie"}
        movingTitle={"Technologie"}
      >
        <P>Chceš trošku víc konkrétnosti? Hlavně teďka pracuju s Reactem v NextJS pro fullstack NodeJs, PHPko na backendu pro onbudget solutions. Pro frontend volim Alpinejs když se jedná fakt on budget záležitost. 
                    SASS nebo CSS-in-JS je samozřejmost. Všechno ostatní mám na svém <a href="https://www.linkedin.com/in/langr-ondrej/" target="_blank">Linkedinu</a> tak tam rozhodně mrkni pokud si mě chceš fakt přečíst.
                </P>
      </TitledSection>
      <TitledSection
        title={"Moje cesta"}
        movingTitle={"Cesta"}
      >

      </TitledSection>
      <TitledSection
        title={"Reference"}
        movingTitle={"Reference"}
      >

      </TitledSection>
      <TitledSection
        title={"Investice, Kryptoměny, Financování..."}
        movingTitle={"Investice"}
      >

      </TitledSection>
    </div>
  </>
}
