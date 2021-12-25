import styled from '@emotion/styled';
import React from 'react';
import Gap from '../../components/basic/Gap';

const CurrentNewsSection = () => {
  return (
    <Container>
      <Gap color="light" />
      <h1>Test</h1>
      <Gap color="light" />
    </Container>
  );
};

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
