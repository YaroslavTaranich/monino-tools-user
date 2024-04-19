import { ReactElement, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactElement | ReactElement[];
}

function Portal({ children }: PortalProps) {
  const containerRef = useRef(document.createElement('div'));

  useEffect(() => {
    const node = containerRef.current;
    document.body.appendChild(node);
    return () => {
      document.body.removeChild(node);
    };
  }, []);
  return createPortal(children, containerRef.current);
}

export default Portal;
