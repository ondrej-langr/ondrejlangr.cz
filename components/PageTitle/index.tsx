import { FC, ReactElement } from "react";

const PageTitle: FC = ():ReactElement => {

    return <>
        <section>
            <h1 className="text-7xl uppercase mb-0 mt-8 leading-5">Ondřej Langr</h1>
            <h2 className="text-xl uppercase -mb-2 font-medium opacity-80">web developer</h2>
        </section>
    </>;
}

export default PageTitle;