import { FC, ReactElement } from "react";

const 
    P:FC = ({children}): ReactElement => <p className="text-lg font-medium text-blue-200">{children}</p>,
    Wrap:FC = ({children}): ReactElement => <section className="mt-16 -mb-4 mx-14 flex">{children}</section>,
    Text:FC = ({children}): ReactElement => <div className="basis flex-none w-1/2 px-4">{children}</div>

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