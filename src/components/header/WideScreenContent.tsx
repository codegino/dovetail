import styled from '@emotion/styled';
import React from 'react';
import Actions from './Actions';
import Navigation from './Navigation';

const WideScreenContent = () => {
  return (
    <Container>
      <CenteredNavigation>
        <Navigation />
      </CenteredNavigation>
      <Actions />
    </Container>
  );
};

const CenteredNavigation = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '33.3vw',
});

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  flex: 1,
});

export default WideScreenContent;
