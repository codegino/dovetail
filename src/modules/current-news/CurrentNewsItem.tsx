import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import Description from '../../components/typography/Paragraph';
import Image from 'next/image';
import {mq} from '../../utils/media-query';
import Button from '../../components/basic/Button';
import Heading3 from '../../components/typography/Heading3';
import {Parallax} from 'react-scroll-parallax';

const CurrentNewsItem: FunctionComponent<{
  imgUrl: string;
  title: string;
  description: string;
  ctaText: string;
}> = ({imgUrl, title, description, ctaText}) => {
  return (
    <Container>
      <Parallax className="custom-class" x={[-5, 5]}>
        <ImageContainer>
          <Image
            src={imgUrl}
            layout="responsive"
            width={544}
            height={340}
            alt="News"
          />
        </ImageContainer>
      </Parallax>
      <Parallax className="custom-class" x={[10, -10]} y={[-5, 5]}>
        <Content>
          <DynamicHeading>{title}</DynamicHeading>
          <Description>{description}</Description>
          <CtaButton>{ctaText}</CtaButton>
        </Content>
      </Parallax>
    </Container>
  );
};

const DynamicHeading = styled(Heading3)(
  mq({
    marginTop: [, , , 0],
  }),
);

const CtaButton = styled(Button)({
  width: 153,
  marginTop: 24,
});

const Content = styled.section(
  mq({
    maxWidth: [300, , , 480],
    minWidth: [300, , , 480],
    textAlign: 'left',
  }),
);

const ImageContainer = styled.div(
  mq({
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'red',
    maxWidth: [340, 410, 450, 544],
    minWidth: [340, 410, 450, 544],
    height: [200, 240, , 340],
  }),
);

const Container = styled.article(
  mq({
    display: 'flex',
    columnGap: '96px',
    '&:nth-of-type(odd)': {
      flexDirection: ['column', , , 'row'],
    },
    '&:nth-of-type(even)': {
      flexDirection: ['column', , , 'row-reverse'],
    },
  }),
);

export default CurrentNewsItem;
