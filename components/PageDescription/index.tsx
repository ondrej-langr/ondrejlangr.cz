import styled from "@emotion/styled";
import { FC, ReactElement } from "react";
import Button from "../Button";
import TitledSection from "../TitledSection";
import {useRouter} from "next/router"

const P = styled.p({
    fontSize:" 1.1em",
    fontWeight: 500,
    color: "#071522e3",
}),
Wrap = styled.section({
    margin: "4em -15px 3.5em",
    display: 'flex',
}),
Text = styled.div({
    flexBasis: "50%",
    padding: "0 15px"
});


const PageDescription: FC = (): ReactElement => {
    const {push} = useRouter();

    return <>
        <Wrap>
            <Text>
                <P>Ahoj! Jmenuju se Ondřej Langr a miluju programování, dobrý kafčo a jídlo. </P>
                <P>Pro tohle tu asi nejsi, co? Takže k věci: jsme web developer který se specializuje na vytváření webových aplikací/stránek všeho druhu. Ať už je to cokoliv tak u mě si můžeš být jistí, že to zvládnu :) </P>
                <P>Selektivně vybírám nejlepší a nejefektivnější řešení na dané problémy a pracuju na tom, aby projekt dosahoval nejlepších výsledků.</P>
            </Text>
            <Text>
                <P>Chceš trošku víc konkrétnosti? Hlavně teďka pracuju s Reactem v NextJS pro fullstack NodeJs, PHPko na backendu pro onbudget solutions. Pro frontend volim Alpinejs když se jedná fakt on budget záležitost. 
                    SASS nebo CSS-in-JS je samozřejmost. Všechno ostatní mám na svém <a href="https://www.linkedin.com/in/langr-ondrej/" target="_blank">Linkedinu</a> tak tam rozhodně mrkni pokud si mě chceš fakt přečíst.
                </P>
                <P>Pojďme se tedy spolu lépe poznat a tvořit budoucnost :) </P>
            </Text>
        </Wrap>
    </>
}

export default PageDescription;