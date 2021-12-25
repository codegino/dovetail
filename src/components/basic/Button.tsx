import type {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const Button: FunctionComponent<JSX.IntrinsicElements['button']> = ({
  onClick = () => alert('Not implemented'),
  ...props
}) => {
  return <Element type="button" {...props} onClick={onClick} />;
};

const Element = styled.button({
  color: '#FFFFFF',
  backgroundColor: 'var(--color-primary)',
  height: '40px',
  minWidth: 'fit-content',
  padding: '8px 16px',
  borderRadius: '20px',
  textAlign: 'center',
  fontFamily: 'Manrope',
  lineHeight: '24px',
  fontWeight: 700,
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
});

export default Button;
