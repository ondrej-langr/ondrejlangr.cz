import styled from "@emotion/styled";
import { FC, ReactElement } from "react";
import Button from "../Button";
import TitledSection from "../TitledSection";

const P = styled.p({
    fontSize:" 1.1em",
    fontWeight: 500,
    color: "#071522e3",
})

const Text = styled.div({
    margin: "6.5em 0 3.5em"
})


const PageDescription: FC = (): ReactElement => {
    return <>
        <TitledSection title={"O mně"}>
            <Text>
                <P>Ahoj! Jsme programátor který se specializuje na vytváření profesionálních webových aplikací/stránek podle nejnovějších a nejlepších technologií. Takže ať už je to cokoliv tak u mě si můžete být jistí, že to zvládnu :) </P>
                <P>Selektivně vybírám nejlepší a nejefektivnější řešení na dané problémy a pracuju na tom, aby projekt dosahoval nejlepších výsledků.</P>
                <P>Pojďme tedy spolu vybrat řešení právě pro Vás :) </P>
            </Text>
            <Button>Chci napsat!</Button>
        </TitledSection>
    </>
}

export default PageDescription;