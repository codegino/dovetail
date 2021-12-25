import styled from '@emotion/styled';
import React from 'react';
import SmallScreenContent from './SmallScreenContent';
import WideScreenContent from './WideScreenContent';
import LogoContainer from './LogoContainer';
import {mq} from '../../utils/media-query';

const Header = () => {
  return (
    <Container>
      <LogoContainer />
      <WideScreenContent />
      <SmallScreenContent />
    </Container>
  );
};

const Container = styled.section(
  mq({
    height: '88px',
    padding: ['20px 14px', '20px 34px'],
    backgroundColor: 'var(--color-background-dark)',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  }),
);

export default Header;
