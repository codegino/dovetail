import {useState} from 'react';
import styled from '@emotion/styled';
import {mq} from '../../utils/media-query';
import Button from '../basic/Button';

export default function SmallScreenContent() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Menu onClick={openSidebar}>Menu</Menu>
    </div>
  );
}

const Menu = styled(Button)(
  mq({
    display: ['block', , , 'none'],
  }),
);
