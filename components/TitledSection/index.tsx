import styled from "@emotion/styled";
import { FC, ReactElement } from "react";

const Wrapper = styled.section({
    position: "relative",
    marginTop: "4.5em",
    display: "flex",
    flexFlow: "wrap"
}),
SectionTitle = styled.h1({
    fontSize: "3.2em",
    color: "black",
    marginBottom: "-0.5em",
    marginTop: "2px"
}),
Content = styled.div({
    position: "relative",
    zIndex: 2
}),
SectionTitleMovable = styled.div({
    position: "sticky",
    fontSize: "6em",
    color: "var(--color-base)",
    margin: 0,
    opacity: .1,
    zIndex: 1,
    padding: "25px 0px",
    fontWeight: 700,
    top: 0,
    transform: "rotate(90deg) translateY(42px)",
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
SectionTitleMovableWrap = styled.div({
    width: "160px",
    position: "relative"
}),
ContentWrap = styled.div({
    width: "calc(100% - 160px)"
});

const TitledSection: FC<{ title: string, movingTitle?: string }> = ({ title, children, movingTitle, ...rest }): ReactElement => {
     
    return <>
        <Wrapper {...rest}>
            <SectionTitleMovableWrap>
                <SectionTitleMovable>
                    {movingTitle ?? title}
                </SectionTitleMovable>
            </SectionTitleMovableWrap>
            <ContentWrap>
                <SectionTitle>
                    {title}
                </SectionTitle>
                <Content>
                    {children}
                </Content>
            </ContentWrap>
        </Wrapper>
    </>
}

export default TitledSection;