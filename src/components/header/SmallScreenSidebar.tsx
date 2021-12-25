import type {MouseEvent, FunctionComponent} from 'react';
import styled from '@emotion/styled';
import {mq} from '../../utils/media-query';
import Button from '../basic/Button';
import Footer from '../footer/Footer';
import Heading5 from '../typography/Heading5';
import Actions from './Actions';
import LogoContainer from './LogoContainer';
import Navigation from './Navigation';

const SmallScreenSidebar: FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({setIsOpen}) => {
  const sidebarClose = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <Container>
      <Header>
        <LogoContainer />
        <CloseButton onClick={sidebarClose}>X</CloseButton>
      </Header>
      <Content
        onClick={e => e.stopPropagation()}
        role="presentation"
        className="sidebar-content"
      >
        <NavigationsWrapper>
          <Heading5>Links</Heading5>
          <Navigation />
        </NavigationsWrapper>
        <ActionsWrapper>
          <Actions />
        </ActionsWrapper>
        <Footer />
      </Content>
    </Container>
  );
};

const CloseButton = styled(Button)({
  borderRadius: '50%',
  height: 40,
  width: 40,
});

const NavigationsWrapper = styled.div({
  h5: {
    marginLeft: 32,
    marginBottom: 0,
  },
  marginBottom: 16,
});

const ActionsWrapper = styled.div({
  paddingLeft: 24,
});

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
});

const Header = styled.header({
  padding: '24px 49px 0 34px',
  display: 'flex',
  justifyContent: 'space-between',
});

const Container = styled.div(
  mq({
    flexDirection: 'column',
    position: 'fixed',
    height: '100vh',
    minWidth: '100vw',
    zIndex: 10,
    backgroundColor: 'var(--color-background-dark)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: ['flex', , , 'none'],
  }),
);

export default SmallScreenSidebar;
