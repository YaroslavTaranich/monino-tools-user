'use client';

import { ReactElement } from 'react';
import { useMount } from '../../../hooks/use-mount';
import Portal from './portal';
import Layout from './layout';
import { ANIMATION_TIME } from './const';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement | ReactElement[];
}

function Popup({ open, onClose, children }: PopupProps) {
  const mounted = useMount(open, ANIMATION_TIME);

  if (!mounted) return null;

  return (
    <Portal>
      <Layout open={open} onClose={onClose}>
        {children}
      </Layout>
    </Portal>
  );
}

export default Popup;
