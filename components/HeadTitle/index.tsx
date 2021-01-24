import Head from "next/head";
import { FC, ReactElement } from "react";
import { SEOpageTitle } from "../../utils";

const HeadTitle: FC<{ title: string }> = ({ title }): ReactElement => <>
    <Head>
        <title>{SEOpageTitle(title)}</title>
    </Head>
</>

export default HeadTitle;