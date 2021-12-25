import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import Anchor from "../components/basic/Anchor";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Anchor href="/test">Test</Anchor>
        Welcome, please insert the landing page you‘re building here. Good luck!
      </PageContainer>
    </>
  );
};

export default Home;

const PageContainer = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  fontSize: "20px",
  height: "100vh",
  justifyContent: "center",
  minHeight: "100vh",
});
