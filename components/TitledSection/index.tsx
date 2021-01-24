import styled from "@emotion/styled";
import { FC, ReactElement } from "react";

const Wrapper = styled.section({
    position: "relative",
    marginTop: "7.5em"
}),
SectionTitle = styled.h1({
    position: "absolute",
    fontSize: "6em",
    color: "var(--color-base)",
    bottom: -35,
    margin: 0,
    left: -55,
    opacity: .1,
    zIndex: 1,
    padding: "0 20px",
    "&::after": {
        content: "''",
        height: 10,
        width: "100%",
        top: "calc(50% - 5px)",
        left: 0,
        background: "white",
        position: "absolute"
    }
}),
Content = styled.div({
    position: "relative",
    zIndex: 2
})

const TitledSection: FC<{ title: string }> = ({ title, children, ...rest }): ReactElement => {
     
    return <>
        <Wrapper {...rest}>
            <Content>
                {children}
            </Content>
            <SectionTitle>
                {title}
            </SectionTitle>
        </Wrapper>
    </>
}

export default TitledSection;