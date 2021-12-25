import styled from '@emotion/styled';
import React from 'react';
import Button from '../../components/basic/Button';
import Description from '../../components/typography/Paragraph';
import Heading1 from '../../components/typography/Heading1';
import Image from 'next/image';
import {Parallax} from 'react-scroll-parallax';

import {mq} from '../../utils/media-query';
import Gap from '../../components/basic/Gap';

const Hero = () => {
  return (
    <Container>
      <Gap color="dark" />
      <Content>
        <HeroCaption>
          <Heading1>Time to get your research game lit</Heading1>
          <Description>
            Bringing you an intoxicating slew of hot product events form jamming
            with industry experts to live demo Q&As. Get excited!
          </Description>
          <Parallax className="custom-class" y={[-55, 0]} x={[-5, 5]}>
            <Button
              style={{
                width: '198px',
                marginTop: '56px',
              }}
            >
              Give me a heads up
            </Button>
          </Parallax>
        </HeroCaption>
        <Parallax className="custom-class" y={[-10, 10]}>
          <HeroIllustration>
            <Image
              priority
              src="/assets/illustration-hero.svg"
              layout="responsive"
              height={920}
              width={690}
              objectFit="cover"
              className="illustration-hero"
              alt="illustration hero"
            />
          </HeroIllustration>
        </Parallax>
      </Content>
      <Gap color="dark" />
      <Wave />
    </Container>
  );
};

const Content = styled.div(
  mq({
    display: 'flex',
    flexDirection: ['column', , , 'row'],
    justifyContent: ['flex-start', , , 'center'],
    alignItems: ['center', , , 'flex-start'],
    position: 'relative',
    padding: '0 5%',
    height: [900, , , 600],
  }),
);

const HeroCaption = styled.div(
  mq({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: [330, 450, , , 564],
    minWidth: [330, 450, , , 564],
  }),
);

const HeroIllustration = styled.div(
  mq({
    height: [500, , 550, 700],
    width: [400, 450, 510, 670],
    minWidth: [400, 450, 510, 670],
    '.illustration-hero': {
      top: ['-25% !important', , , '-35% !important'],
    },
  }),
);

const Container = styled.section({
  backgroundColor: 'var(--color-background-dark)',
  width: '100%',
  position: 'relative',
  borderBottom: '32px solid var(--color-background)',
});

const Wave = styled.div({
  backgroundImage: 'url(/assets/wave.svg)',
  backgroundSize: 'cover',
  height: 32,
  width: '100%',
  position: 'absolute',
  bottom: -32,
  left: 0,
  right: 0,
});

export default Hero;
