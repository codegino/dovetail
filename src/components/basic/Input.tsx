import styled from '@emotion/styled';
import type {FunctionComponent} from 'react';

const Input: FunctionComponent<JSX.IntrinsicElements['input']> = props => {
  return <Element {...props} />;
};

const Element = styled.input({
  width: '100%',
  height: 48,
  paddingLeft: 18,
  border: '1px solid rgba(25, 0, 65, 0.08)',
  borderRadius: 8,
  boxShadow: '0px 4px 4px rgba(25, 0, 65, 0.04)',
  outline: 'none',
  color: 'var(--color-primary)',
  '&::placeholder': {
    color: '#23007899',
  },
});

export default Input;
