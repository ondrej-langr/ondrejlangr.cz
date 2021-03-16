import { FC, ReactElement } from "react"
import Image from "next/image"
import FooterContactForm from "./FooterContactform"
import styled from "@emotion/styled"
import Head from "next/head";

const base = {
    maxWidth: "var(--site-maxwi)",
    margin: "auto",
    padding: "0 var(--site-sitespace)"
};

const Header = styled.header({
    ...base
})

const Main = styled.main({
    ...base
})

const Footer = styled.main({
    ...base
})

const PageLayout: FC = ({ children }): ReactElement => {

    return <>
        <Head>
            <link rel="stylesheet" href="https://use.typekit.net/asq3wpq.css" />
            <link rel="icon" type="image/png" href="/logo-basic.png"/>
        </Head>
        <Header role={"header"}>
            <img height={70} width={"auto"} src={"/logo-full.svg"} css={{ marginTop: 10 }} />
        </Header>
        <Main role={"main"}>
            {children}
        </Main>
        <Footer role={"footer"}>
            <FooterContactForm />
            <div>
                <a></a>
            </div>
        </Footer>
        {/*<div css={{ 
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            a: {
                    color: "var(--color-base)"
            },
            flexFlow: "column",
            div: {
                margin: "5px 0"
            },
            zIndex: 20
        }}>
            <div><b>Stránka se intenzivně připravuje.</b></div> <div> V mezičase mi stačí brnknout na  <a href="tel:+420607445251"> +420 607 445 251 </a>  nebo si se mnou psát na mailu  <a href="mailto:hi@ondrejlangr.cz"> hi@ondrejlangr.cz </a></div> 
        </div>*/}
    </>
}

export default PageLayout