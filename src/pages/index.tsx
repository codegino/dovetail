import styled from '@emotion/styled';
import type {NextPage} from 'next';
import Head from 'next/head';
import Anchor from '../components/basic/Anchor';
import Heading1 from '../components/typography/Heading1';
import Heading2 from '../components/typography/Heading2';
import Heading3 from '../components/typography/Heading3';
import Heading5 from '../components/typography/Heading5';
import Heading6 from '../components/typography/Heading6';
import Paragraph from '../components/typography/Paragraph';
import CurrentNewsSection from '../modules/current-news/CurrentNewsSection';
import EventsSection from '../modules/events/EventsSection';
import Hero from '../modules/landing-hero/Hero';
import NewsletterSection from '../modules/newsletter/NewsletterSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Hero />
        <CurrentNewsSection />
        <EventsSection />
        <NewsletterSection />
        <Heading1>heading 1</Heading1>
        <Heading2>heading 2</Heading2>
        <Heading3>heading 3</Heading3>
        <Heading5>heading 5</Heading5>
        <Heading6>heading 6</Heading6>
        <Paragraph>paragraph</Paragraph>
        <Anchor href="/test">Test</Anchor>
        Welcome, please insert the landing page you‘re building here. Good luck!
      </PageContainer>
    </>
  );
};

export default Home;

const PageContainer = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '20px',
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
});
