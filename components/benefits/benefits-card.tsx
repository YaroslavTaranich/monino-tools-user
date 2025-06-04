import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from './benefits.module.scss';

interface BenefitsCardProp {
  title: string;
  text: string;
  icon: IconDefinition;
  link: null | string;
}

function BenefitsCard({
  title, text, icon, link,
}: BenefitsCardProp) {
  return (
    <li className={styles.card}>
      <FontAwesomeIcon icon={icon} className={styles.card__icon} />
      <h4 className={styles.card__title}>{title}</h4>
      <p className={styles.card__text}>{text}</p>
      {link && <Link href={link} className={styles.card__link}>О доставке</Link>}
    </li>
  );
}

export default BenefitsCard;
