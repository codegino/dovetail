import styled from '@emotion/styled';
import type {FunctionComponent} from 'react';
import {mq} from '../../utils/media-query';

// This is an alternative to padding in every section
const Gap: FunctionComponent<
  JSX.IntrinsicElements['div'] & {
    color: 'light' | 'dark' | string;
    height?: number;
  }
> = ({color, height, ...props}) => {
  const backgroundColor =
    color === 'light'
      ? 'var(--color-background)'
      : color === 'dark'
      ? 'var(--color-background)-dark'
      : color;

  return <Element color={backgroundColor} height={height ?? 128} {...props} />;
};

const Element = styled.div<{color: string; height: number}>(props =>
  mq({
    height: [props.height / 3, props.height / 2, props.height],
    width: '100%',
    position: 'relative',
    zIndex: -1,
    backgroundColor: props.color,
  }),
);

export default Gap;
