import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  faChevronLeft,
  faChevronRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IToolImage } from '@/services/api';
import styles from './tool-gallery.module.scss';

interface ToolGalleryModalProps {
  alt: string;
  currentIndex: number;
  image: IToolImage;
  imageCount: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  toolLabel: string;
}

function ToolGalleryModal({
  alt,
  currentIndex,
  image,
  imageCount,
  onClose,
  onNext,
  onPrevious,
  toolLabel,
}: ToolGalleryModalProps) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && imageCount > 1) onPrevious();
      if (event.key === 'ArrowRight' && imageCount > 1) onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [imageCount, onClose, onNext, onPrevious]);

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const swipeDistance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (imageCount > 1 && Math.abs(swipeDistance) > 40) {
      if (swipeDistance > 0) onPrevious();
      else onNext();
    }
  };

  return createPortal(
    <div
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label={`Фотографии: ${toolLabel}`}
    >
      <button
        className={styles.modal__backdrop}
        type="button"
        onClick={onClose}
        aria-label="Закрыть галерею"
      />
      <div className={styles.modal__content}>
        <button
          className={styles.modal__close}
          type="button"
          onClick={onClose}
          aria-label="Закрыть галерею"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div
          className={styles.modal__image}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => { touchStartX.current = null; }}
        >
          <Image fill priority sizes="100vw" src={image.src} alt={alt} />
        </div>
        {imageCount > 1 && (
          <>
            <button
              className={`${styles.modal__arrow} ${styles.modal__arrow_left}`}
              type="button"
              onClick={onPrevious}
              aria-label="Предыдущая фотография"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className={`${styles.modal__arrow} ${styles.modal__arrow_right}`}
              type="button"
              onClick={onNext}
              aria-label="Следующая фотография"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <span className={styles.modal__counter}>
              {currentIndex + 1}
              {' / '}
              {imageCount}
            </span>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}

export default ToolGalleryModal;
