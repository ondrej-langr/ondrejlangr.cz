import { FC, ReactElement } from "react";
import Head from "next/head";
import config from "../config";

const PageLayoutHead: FC = (): ReactElement => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/asq3wpq.css" />
        <link rel="icon" type="image/png" href="/logo-basic.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={config.site.description} />
        <meta name="keywords" content={config.site.keywords} />
        <meta name="author" content={config.site.author} />
      </Head>
    </>
  );
};

export default PageLayoutHead;
