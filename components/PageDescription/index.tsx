import styled from "@emotion/styled";
import { FC, ReactElement } from "react";
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

    return <>
        <Wrap>
            <Text>
                <P>Ahoj! Jmenuju se Ondřej Langr a miluju programování, dobrý kafčo a jídlo. </P>
                <P>Pro tohle tu asi nejsi, co? Tak teda k věci: jsem web developer, který se specializuje na vytváření webových aplikací všeho druhu. Ať už je to cokoliv, tak u mě si můžeš být jistý, že to zvládnu. </P>
            </Text>
            <Text>
                <P>Selektivně vybírám nejlepší a nejefektivnější řešení na diskutované problémy a pracuju na tom, aby projekt dosahoval nejlepších výsledků.</P>
                <P>Pojďme se tedy spolu lépe poznat a tvořit budoucnost :) </P>
            </Text>
        </Wrap>
    </>
}

export default PageDescription;