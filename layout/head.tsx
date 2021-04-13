import { FC, ReactElement } from "react";
import Head from "next/head";
import config from "../config";

const PageLayoutHead: FC = (): ReactElement => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/asq3wpq.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={config.site.description} />
        <meta name="keywords" content={config.site.keywords} />
        <meta name="author" content={config.site.author} />

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/webmanifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#131113" />
        <meta name="theme-color" content="#5c04cc" />
      </Head>
    </>
  );
};

export default PageLayoutHead;
