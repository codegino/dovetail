import styled from '@emotion/styled';
import React from 'react';
import {mq} from '../../utils/media-query';
import Gap from '../basic/Gap';
import {productSitemap} from './sitemap-links';
import SiteMap from './Sitemap';
const Footer = () => {
  return (
    <Container>
      <Gap color="dark" />
      <Content>
        <SiteMap title={productSitemap.title} links={productSitemap.links} />
        <SiteMap title={productSitemap.title} links={productSitemap.links} />
        <SiteMap title={productSitemap.title} links={productSitemap.links} />
        <SiteMap title={productSitemap.title} links={productSitemap.links} />
        <SiteMap title={productSitemap.title} links={productSitemap.links} />
        <SiteMap title={productSitemap.title} links={productSitemap.links} />
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
