import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';
import Heading2 from '../../components/typography/Heading2';
import Description from '../../components/typography/Paragraph';
import EventDetails from './EventDetails';
import {mq} from '../../utils/media-query';
import {Parallax} from 'react-scroll-parallax';
import Gap from '../../components/basic/Gap';
import {events} from './data';

const EventsSection = () => {
  return (
    <Container>
      <EventsHeader>
        <Parallax className="custom-class" y={[-100, 50]}>
          <Image
            src="/assets/illustration-spot.svg"
            layout="fixed"
            alt="illustration spot"
            height={100}
            width={180}
          />
        </Parallax>
        <Parallax className="custom-class" y={[-5, 15]}>
          <Heading2>Events repository</Heading2>
        </Parallax>
        <Parallax className="custom-class" y={[5, -5]}>
          <Description style={{textAlign: 'center'}}>
            Missed an event because you were too busy partying or just want to
            relive the hype? Watch our past events and get them feels.
          </Description>
        </Parallax>
      </EventsHeader>
      <EventsContent>
        {events.map((event, i) => (
          <Parallax
            className="custom-class"
            y={i % 2 === 0 ? [-10, 10] : [10, -10]}
            key={i}
          >
            <EventDetails
              imgUrl={event.imgUrl}
              label={event.label}
              title={event.title}
            />
          </Parallax>
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
