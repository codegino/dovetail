import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
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
