'use client';

import { useState } from 'react';
import Image from 'next/image';
import OrderForm from '../forms/order-form/order-form';
import { Button, Popup } from '../UI';
import styles from './tool-order.module.scss';
import { ITool } from '@/services/api';
import PriceSelector from '../price-selector/price-selector';

interface ToolOrderProps {
  tool: ITool;
}

function ToolOrder({ tool }: ToolOrderProps) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className={styles.order}>
      <div className={styles.order__item}>
        <PriceSelector price={tool.price} zalog={tool.zalog} />
        <Button onClick={() => setShowPopup(true)}>Взять в аренду</Button>
      </div>
      <div className={styles.order__item}>
        <Image
          height={600}
          width={600}
          src={tool.image}
          alt={tool.label}
        />
      </div>
      <Popup open={showPopup} onClose={() => setShowPopup(false)}>
        <OrderForm tool={tool} />
      </Popup>
    </section>
  );
}

export default ToolOrder;
