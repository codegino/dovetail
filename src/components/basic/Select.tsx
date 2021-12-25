import styled from '@emotion/styled';
import type {FunctionComponent} from 'react';

const Select: FunctionComponent<JSX.IntrinsicElements['select']> = props => {
  return <Element {...props} />;
};

const Element = styled.select({
  width: '100%',
  height: 48,
  paddingLeft: 10,
  border: '1px solid rgba(25, 0, 65, 0.08)',
  borderRadius: 8,
  boxShadow: '0px 4px 4px rgba(25, 0, 65, 0.04)',
  outline: 'none',
  borderRight: '18px solid #FFFFFF',
  backgroundColor: '#FFFFFF',
  color: 'var(--color-primary)',
});

export default Select;
