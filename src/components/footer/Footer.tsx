import styled from '@emotion/styled';
import React from 'react';
import {mq} from '../../utils/media-query';
import Gap from '../basic/Gap';
const Footer = () => {
  return (
    <Container>
      <Gap color="dark" />
      <Content>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </Content>
      <Gap color="dark" />
    </Container>
  );
};

const Content = styled.footer(
  mq({
    display: 'grid',
    gap: 32,
    maxWidth: 1248,
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      ,
      'repeat(3, 1fr)',
      ,
      'repeat(6, 1fr)',
    ],
  }),
);

const Container = styled.footer({
  width: '100%',
  backgroundColor: 'var(--color-background-dark)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export default Footer;
