import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';
import {mq} from '../../utils/media-query';
import Link from 'next/link';

const LogoContainer = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <Logo>
          <Image
            priority
            src="/assets/logo-dovetail.svg"
            layout="fixed"
            height={32}
            width={128}
            alt="Dovetail"
          />
        </Logo>
      </Link>
      <HiringIndicator>We&lsquo;re Hiring</HiringIndicator>
    </Container>
  );
};

const Logo = styled.div({
  cursor: 'pointer',
});

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: 0,
  width: '33.3vw',
});

const HiringIndicator = styled.div(
  mq({
    backgroundColor: '#EFD4AA',
    borderRadius: 20,
    padding: '4px 8px',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '18px',
    fontFamily: 'Poppins',
    minWidth: 94,
    marginLeft: 21,
    display: ['none', 'inline-block'],
    verticalAlign: 'middle',
  }),
);

export default LogoContainer;
