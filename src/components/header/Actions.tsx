import styled from '@emotion/styled';
import React from 'react';
import Button from '../basic/Button';
import Anchor from '../basic/Anchor';

const Actions = () => {
  return (
    <Container>
      <Anchor href="/auth">Login</Anchor>
      <Button>Try Free</Button>
    </Container>
  );
};

const Container = styled.nav({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '33.3vw',
});

export default Actions;
