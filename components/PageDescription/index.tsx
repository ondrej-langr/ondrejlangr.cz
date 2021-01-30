import styled from "@emotion/styled";
import { FC, ReactElement } from "react";
import Button from "../Button";
import TitledSection from "../TitledSection";
import {useRouter} from "next/router"

const P = styled.p({
    fontSize:" 1.1em",
    fontWeight: 500,
    color: "#071522e3",
})

const Text = styled.div({
    margin: "6.5em 0 3.5em"
})


const PageDescription: FC = (): ReactElement => {
    const {push} = useRouter();

    return <>
        <TitledSection title={"O mně"}>
            <Text>
                <P>Ahoj! Jsme webový developer který se specializuje na vytváření profesionálních webových aplikací/stránek podle nejlepších technologií. Takže ať už je to cokoliv tak u mě si můžete být jistí, že to zvládnu :) </P>
                <P>Selektivně vybírám nejlepší a nejefektivnější řešení na dané problémy a pracuju na tom, aby projekt dosahoval nejlepších výsledků.</P>
                <P>Pojďme tedy spolu vybrat řešení právě pro Vás :) </P>
            </Text>
            <Button 
                onClick={() => push({
                    href: "/",
                    hash: "form_anchor"
                })}
            >Chci napsat!</Button>
        </TitledSection>
    </>
}

export default PageDescription;