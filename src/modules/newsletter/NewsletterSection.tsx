import styled from '@emotion/styled';
import Description from '../../components/typography/Paragraph';
import Heading3 from '../../components/typography/Heading3';
import {mq} from '../../utils/media-query';
import Gap from '../../components/basic/Gap';

const NewsletterSection = () => {
  return (
    <Container>
      <Gap color="dark" />
      <Content>
        <ContentMessage>
          <Heading3>Keen for a heads up on upcoming events?</Heading3>
          <Description>
            Register your interest and we promise you’ll be the first to know
            what we’ve got in store.
          </Description>
        </ContentMessage>
        <FormWrapper>
          <form>Form Here</form>
        </FormWrapper>
      </Content>
      <Gap color="dark" />
    </Container>
  );
};

const FormWrapper = styled.div({
  position: 'relative',
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
