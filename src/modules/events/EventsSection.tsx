import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';
import Heading2 from '../../components/typography/Heading2';
import Description from '../../components/typography/Paragraph';
import {mq} from '../../utils/media-query';
import Gap from '../../components/basic/Gap';
import {events} from './data';
import EventDetails from './EventsDetails';

const EventsSection = () => {
  return (
    <Container>
      <EventsHeader>
        <Image
          src="/assets/illustration-spot.svg"
          layout="fixed"
          alt="illustration spot"
          height={100}
          width={180}
        />
        <Heading2>Events repository</Heading2>
        <Description style={{textAlign: 'center'}}>
          Missed an event because you were too busy partying or just want to
          relive the hype? Watch our past events and get them feels.
        </Description>
      </EventsHeader>
      <EventsContent>
        {events.map((event, i) => (
          <EventDetails
            key={i}
            imgUrl={event.imgUrl}
            label={event.label}
            title={event.title}
          />
        ))}
      </EventsContent>
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

const EventsContent = styled.div(
  mq({
    display: 'flex',
    flexDirection: ['column', '', '', 'row'],
    gap: 32,
    marginTop: 80,
  }),
);

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
