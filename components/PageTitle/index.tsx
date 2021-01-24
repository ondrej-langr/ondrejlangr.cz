import styled from "@emotion/styled";
import { FC, ReactElement } from "react";

const Hone = styled.h2({
    fontSize: "1.3em",
    textTransform: "uppercase",
    marginBottom: 0,
    marginTop: "8em",
    fontWeight: 500,
    opacity: .8,
    "span": {
        color: "var(--color-base)"
    }
})

const Htwo = styled.h1({
    fontSize: "4.8em",
    textTransform: "uppercase",
    marginBottom: 0,
    marginTop: "0.3em",
    lineHeight: "1.2em"
})

const PageTitle: FC = ():ReactElement => {

    return <>
        <section>
            <Hone><span>Ondřej Langr</span> from <span>Himejikostudio</span> presents</Hone>
            <Htwo>Profesionální tvorba webových stránek</Htwo>
        </section>
    </>;
}

export default PageTitle;