import styled from '@emotion/styled';
import type {FunctionComponent} from 'react';
import Image from 'next/image';
import Heading5 from '../../components/typography/Heading5';
import type {DTEvent} from './data';

const EventDetails: FunctionComponent<DTEvent> = ({imgUrl, title, label}) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={imgUrl}
          layout="responsive"
          width={352}
          height={220}
          alt="News"
        />
      </ImageContainer>
      <Heading5>{title}</Heading5>
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.section({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 352,
});

const Label = styled.div({
  fontFamily: 'Manrope',
  fontWeight: 600,
  fontSize: 12,
  lineHeight: '16px',
});

const ImageContainer = styled.div({
  borderRadius: 10,
  overflow: 'hidden',
  maxWidth: 352,
  minWidth: 352,
  height: 220,
});

export default EventDetails;
