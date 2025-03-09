'use client';

import { useEffect } from 'react';
import styles from './ImageViewer.module.css';

export default function ImageViewer({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(styles.imageViewer)) {
      onClose();
    }
  };

  return (
    <div className={styles.imageViewer} onClick={handleBackdropClick}>
      <div className={styles.imageViewerContent}>
        <img src={image} className={styles.imageViewerImg} alt="Expanded image" />
        <button className={styles.imageViewerClose} onClick={onClose}>✕</button>
      </div>
    </div>
  );
}