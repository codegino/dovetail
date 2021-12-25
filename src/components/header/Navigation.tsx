import styled from '@emotion/styled';
import React from 'react';
import {mq} from '../../utils/media-query';
import Anchor from '../basic/Anchor';

const Navigation = () => {
  return (
    <Container>
      <Ul>
        {links.map(link => {
          return (
            <Li key={link.href}>
              <Anchor href={link.href}>{link.label}</Anchor>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
};

const Container = styled.nav({
  display: 'flex',
});

const Ul = styled.ul(
  mq({
    display: 'flex',
    flexDirection: ['column', , 'row'],
  }),
);

const Li = styled.li({
  listStyle: 'none',
});

const links = [
  {
    label: 'Product',
    href: '/product',
  },
  {
    label: 'Learn',
    href: '/learn',
  },
  {
    label: 'Customers',
    href: '/customers',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];

export default Navigation;
