import Image from 'next/image';
import buttonStyles from '../UI/button/button.module.scss';
import styles from './tool-order.module.scss';
import { ITool } from '@/services/api';
import PriceSelector from '../price-selector/price-selector';

interface ToolOrderProps {
  tool: ITool;
}

function ToolOrder({ tool }: ToolOrderProps) {
  return (
    <section className={styles.order}>
      <div className={styles.order__item}>
        <PriceSelector price={tool.price} zalog={tool.zalog} />
        <a
          className={`${buttonStyles.button} ${buttonStyles.primary} ${styles.phone}`}
          href="tel:+79166773956"
        >
          +7 916 677-39-56
        </a>
      </div>
      <div className={styles.order__item}>
        <Image
          height={600}
          width={600}
          src={tool.image}
          alt={tool.label}
        />
      </div>
    </section>
  );
}

export default ToolOrder;
