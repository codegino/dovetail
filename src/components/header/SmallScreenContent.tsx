import {useState} from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import {mq} from '../../utils/media-query';
import Button from '../basic/Button';

const SmallScreenSidebar = dynamic(() => import('./SmallScreenSidebar'), {
  ssr: false,
});

export default function SmallScreenContent() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Menu onClick={openSidebar}>Menu</Menu>
      {isOpen && <SmallScreenSidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

const Menu = styled(Button)(
  mq({
    display: ['block', , , 'none'],
  }),
);
