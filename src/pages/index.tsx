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
