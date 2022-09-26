import LastView from "components/LastView";
import { Routes } from "constants/Routes";
import Head from "next/head";
import React from "react";
import Content from "./Content";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Nextpress Retrocket Assignment' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header logoName='Nextpress' routes={Routes} />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
