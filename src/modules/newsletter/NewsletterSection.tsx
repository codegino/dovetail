import styled from '@emotion/styled';
import React, {useState} from 'react';
import Description from '../../components/typography/Paragraph';
import Heading3 from '../../components/typography/Heading3';
import {mq} from '../../utils/media-query';
import SubscribeForm from './SubscribeForm';
import Image from 'next/image';
import Gap from '../../components/basic/Gap';
import {Parallax} from 'react-scroll-parallax';

const NewsletterSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = ({
    email,
    eventType,
    fullName,
  }: {
    eventType: string;
    fullName: string;
    email: string;
  }) => {
    fetch('/api/submit', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({
        eventType,
        email,
        fullName,
      }),
    })
      .then(async (res: any) => {
        const body = await res.json();
        if (res.status >= 400 && res.status < 600) {
          throw new Error(body.message);
        }
        return body;
      })
      .then(() => {
        setIsSubmitted(true);
        setError('');
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <Container>
      <Gap color="dark" />
      {isSubmitted ? (
        <Content>
          <ContentMessage>
            <Heading3>Welcome to the Dovetail events club!</Heading3>
            <Description>
              Keep and eye out for all the exclusive product and research
              goodness coming your way.
            </Description>
          </ContentMessage>

          <Image
            src="/assets/illustration-success.svg"
            layout="fixed"
            width="544"
            height="436"
            alt="Success"
          />
        </Content>
      ) : (
        <Content>
          <Parallax className="custom-class" y={[-20, 5]}>
            <ContentMessage>
              <Heading3>Keen for a heads up on upcoming events?</Heading3>
              <Description>
                Register your interest and we promise you’ll be the first to
                know what we’ve got in store.
              </Description>
            </ContentMessage>
          </Parallax>
          <FormWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <SubscribeForm onSubmit={handleSubmit} />
          </FormWrapper>
        </Content>
      )}
      <Gap color="dark" />
    </Container>
  );
};

const FormWrapper = styled.div({
  position: 'relative',
});

const ErrorMessage = styled.div({
  color: 'red',
  position: 'absolute',
  left: 20,
  bottom: 60,
});

const Content = styled.article(
  mq({
    display: 'flex',
    justifyContent: ['flex-start', '', '', 'center'],
    flexDirection: ['column', '', '', 'row'],
    alignItems: ['center', '', '', 'flex-start'],
    width: '100%',

    gap: 32,
  }),
);

const ContentMessage = styled.section({
  padding: '0px 16px',
  maxWidth: 480,
  h3: {
    marginTop: 0,
  },
});

const Container = styled.div({
  minHeight: 700,
  width: '100%',
  backgroundColor: 'var(--color-background-dark)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export default NewsletterSection;
