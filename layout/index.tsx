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
            <img height={40} width={"auto"} src={"/logo-full.svg"} css={{ marginLeft: -12 }} />
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
    </>
}

export default PageLayout