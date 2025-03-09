import styles from './ImageCard.module.css';

export default function ImageCard({ image, onDelete, onQuantityChange, onExpand }) {
  return (
    <div className={styles.imageCard}>
      <img src={image.src} alt="Selected photo" />
      
      <div className={styles.cardButtons}>
        <button 
          className={`${styles.cardButton} ${styles.expandButton}`}
          onClick={onExpand}
          title="Зургийг томруулах"
        >
          ⛶
        </button>
        <button 
          className={`${styles.cardButton} ${styles.deleteButton}`}
          onClick={onDelete}
          title="Зургийг устгах"
        >
          ✕
        </button>
      </div>
      
      <div className={styles.imageInfo}>
        <div className={styles.imageSize}>
          <span>Хэмжээ:</span>
          <span className={styles.sizeBadge}>{image.size} см</span>
        </div>
        
   
        
        <div className={styles.quantityControl}>
          <button 
            className={styles.quantityButton}
            onClick={() => onQuantityChange(image.quantity - 1)}
          >
            -
          </button>
          <span className={styles.quantityDisplay}>{image.quantity}</span>
          <button 
            className={styles.quantityButton}
            onClick={() => onQuantityChange(image.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}