import styled from '@emotion/styled';
import React from 'react';
import Gap from '../../components/basic/Gap';

const EventsSection = () => {
  return (
    <Container>
      <EventsHeader>Header</EventsHeader>
      Content
      <Gap color="light" />
      <Wave />
    </Container>
  );
};

const Wave = styled.div({
  maskImage: 'url(/assets/wave.svg)',
  maskSize: 'cover',
  backgroundColor: ' var(--color-background)',
  height: 32,
  width: '100%',
  position: 'absolute',
  bottom: -32,
  left: 0,
  right: 0,
});

const EventsHeader = styled.section({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 736,
});

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  backgroundColor: ' var(--color-background)',
  borderBottom: '32px solid var(--color-background-dark)',
});

export default EventsSection;
