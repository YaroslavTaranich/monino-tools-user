'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IToolImage } from '@/services/api';
import ToolGalleryModal from './tool-gallery-modal';
import styles from './tool-gallery.module.scss';

interface ToolGalleryProps {
  images: IToolImage[];
  toolLabel: string;
}

function ToolGallery({ images, toolLabel }: ToolGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectPrevious = useCallback(() => {
    setSelectedIndex(
      (current) => (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const selectNext = useCallback(() => {
    setSelectedIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  if (!images.length) return null;

  const selectedImage = images[selectedIndex];
  const selectedAlt = selectedImage.alt
    || `${toolLabel}, фотография ${selectedIndex + 1}`;
  const imageCountLabel = `${images.length} фото`;

  return (
    <section className={styles.gallery} aria-labelledby="tool-gallery-title">
      <div className={styles.gallery__header}>
        <h2 id="tool-gallery-title" className={styles.gallery__title}>
          Фотографии
        </h2>
        {images.length > 1 && (
          <span className={styles.gallery__count}>{imageCountLabel}</span>
        )}
      </div>
      <button
        className={styles.gallery__main}
        type="button"
        onClick={() => setIsModalOpen(true)}
        aria-label={`Открыть фотографию: ${selectedAlt}`}
      >
        <Image
          fill
          sizes="(max-width: 650px) 100vw, 900px"
          src={selectedImage.src}
          alt={selectedAlt}
        />
        <span className={styles.gallery__expand}>
          <FontAwesomeIcon icon={faExpand} />
          Открыть
        </span>
      </button>
      {images.length > 1 && (
        <div
          className={styles.gallery__thumbnails}
          aria-label="Выбор фотографии"
        >
          {images.map((image, index) => (
            <button
              className={`${styles.gallery__thumbnail} ${
                index === selectedIndex ? styles.gallery__thumbnail_active : ''
              }`}
              type="button"
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Показать фотографию ${index + 1}`}
              aria-pressed={index === selectedIndex}
            >
              <Image
                fill
                sizes="100px"
                src={image.src}
                alt={image.alt || `${toolLabel}, миниатюра ${index + 1}`}
              />
            </button>
          ))}
        </div>
      )}
      {isModalOpen && (
        <ToolGalleryModal
          alt={selectedAlt}
          currentIndex={selectedIndex}
          image={selectedImage}
          imageCount={images.length}
          onClose={closeModal}
          onNext={selectNext}
          onPrevious={selectPrevious}
          toolLabel={toolLabel}
        />
      )}
    </section>
  );
}

export default ToolGallery;
