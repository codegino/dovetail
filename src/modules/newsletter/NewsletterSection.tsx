import styled from '@emotion/styled';
import Gap from '../../components/basic/Gap';

const NewsletterSection = () => {
  return (
    <Container>
      <Gap color="dark" />
      TEST
      <Gap color="dark" />
    </Container>
  );
};

const Container = styled.div({
  width: '100%',
  backgroundColor: 'var(--color-background-dark)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export default NewsletterSection;
