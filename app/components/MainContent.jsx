'use client';

import styles from './MainContent.module.css';
import ImageCard from './ImageCard';
import EmptyState from './EmptyState';

export default function MainContent({ 
  images, 
  onDeleteImage, 
  onQuantityChange, 
  totalPrice, 
  onPayment,
  onExpandImage
}) {
  return (
    <div className={styles.mainContent}>
      <div className={styles.contentHeader}>
        <div className={styles.contentTitle}>Таны сонгосон зургууд</div>
      </div>
      
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <ImageCard 
            key={index}
            image={image}
            onDelete={() => onDeleteImage(index)}
            onQuantityChange={(newQuantity) => onQuantityChange(index, newQuantity)}
            onExpand={() => onExpandImage(image.src)}
          />
        ))}
      </div>
      
      {images.length === 0 && <EmptyState />}
      
      <div className={styles.totalSection}>
        <div className={styles.totalDetails}>
          <div className={styles.totalLabel}>Нийт төлбөр</div>
          <div className={styles.totalPrice}><span>{totalPrice.toLocaleString()}</span>₮</div>
        </div>
        <button className={styles.payButton} onClick={onPayment}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          Төлбөр хийх
        </button>
      </div>
    </div>
  );
}