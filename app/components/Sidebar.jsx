'use client';

import { useRef } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ selectedSize, onSizeSelect, onFileUpload, prices }) {
  const fileInputRef = useRef(null);

  const handleChooseImages = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.sidebar}>
      <h2>Зурагны хэмжээ</h2>
      
      {!selectedSize ? (
        <div id="size-buttons">
          <button className={styles.sizeButton} onClick={() => onSizeSelect('6x9')}>
            6x9 см <span className={styles.priceTag}>{prices['6x9'].toLocaleString()}₮</span>
          </button>
          <button className={styles.sizeButton} onClick={() => onSizeSelect('9x12')}>
            9x12 см <span className={styles.priceTag}>{prices['9x12'].toLocaleString()}₮</span>
          </button>
          <button className={styles.sizeButton} onClick={() => onSizeSelect('10x15')}>
            10x15 см <span className={styles.priceTag}>{prices['10x15'].toLocaleString()}₮</span>
          </button>
          <button className={styles.sizeButton} onClick={() => onSizeSelect('15x20')}>
            15x20 см <span className={styles.priceTag}>{prices['15x20'].toLocaleString()}₮</span>
          </button>
          <button className={styles.sizeButton} onClick={() => onSizeSelect('20x30')}>
            20x30 см <span className={styles.priceTag}>{prices['20x30'].toLocaleString()}₮</span>
          </button>
        </div>
      ) : (
        <div id="upload-button">
          <button className={styles.chooseImagesBtn} onClick={handleChooseImages}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            Зураг сонгох
          </button>
          <input 
            ref={fileInputRef}
            type="file" 
            className={styles.fileInput} 
            multiple 
            accept="image/*"
            onChange={onFileUpload}
          />
        </div>
      )}
    </div>
  );
}