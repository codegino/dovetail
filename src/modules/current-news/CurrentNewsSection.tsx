import styled from '@emotion/styled';
import React from 'react';
import Gap from '../../components/basic/Gap';
import CurrentNewsItem from './CurrentNewsItem';

const CurrentNewsSection = () => {
  return (
    <Container>
      <Gap color="light" />
      {news.map((item, i) => (
        <CurrentNewsItem key={i} {...item} />
      ))}
      <Gap color="light" />
    </Container>
  );
};

const news = [
  {
    title: 'Learn all of the juicy basics with Alex',
    imgUrl: '/assets/img-demo-with-alex.png',
    description:
      'Join the man himself and journey through how to use Dovetail as a powerful research analysis tool, research repository, and participant management panel. Sick.',
    ctaText: 'Save me a seat',
  },
  {
    title: 'Sink your teeth into our hot new features',
    imgUrl: '/assets/img-new-features.jpg',
    description:
      'Brought to you by our very own Professer Kai, in this session you’ll learn about the latest and greatest in product as well salivate over our upcoming drops.',
    ctaText: 'Give me some',
  },
];

const Container = styled.div({
  minHeight: '100vh',
  width: '100%',
  backgroundColor: ' var(--color-background)',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 64,
  alignItems: 'center',
});

export default CurrentNewsSection;
