import styled from '@emotion/styled';
import type {FunctionComponent} from 'react';
import Heading6 from '../typography/Heading6';
import {SiteMapGroup} from './sitemap-links';

const SiteMap: FunctionComponent<SiteMapGroup> = ({title, links}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <nav>
        {links.map(({label, href}) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
    </Container>
  );
};

const Title = styled(Heading6)({
  position: 'relative',
  '&::after': {
    content: `""`,
    position: 'absolute',
    bottom: -8,
    left: 0,
    height: 2,
    width: 94,
    backgroundColor: '#230078',
  },
  marginBottom: 33,
});

const Container = styled.section({
  '& > nav': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 12,
  },
});

const Link = styled.a({
  fontWeight: 500,
  fontFamily: 'Poppins',
  fontSize: 16,
  lineHeight: '24px',
  textDecoration: 'none',
  maxWidth: 160,
});

export default SiteMap;
