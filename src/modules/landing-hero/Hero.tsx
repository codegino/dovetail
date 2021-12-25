import styled from '@emotion/styled';
import React from 'react';

import {mq} from '../../utils/media-query';

const Hero = () => {
  return (
    <Container>
      <Content>
        <div>Hello</div>
      </Content>
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
