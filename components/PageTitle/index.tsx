import styled from "@emotion/styled";
import { FC, ReactElement } from "react";

const Hone = styled.h2({
    fontSize: "4.8em",
    textTransform: "uppercase",
    marginBottom: 0,
    marginTop: "2em",
    lineHeight: "1.2em"
})

const Htwo = styled.h1({
   fontSize: "1.3em",
    textTransform: "uppercase",
    marginBottom: 0,
    marginTop: "-0.6em",
    fontWeight: 500,
    opacity: .8,
    color: "var(--color-base)"
})

const PageTitle: FC = ():ReactElement => {

    return <>
        <section>
            <Hone>Ondřej Langr</Hone>
            <Htwo>web developer</Htwo>
        </section>
    </>;
}

export default PageTitle;