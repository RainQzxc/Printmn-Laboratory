import styles from './OrderComplete.module.css';

export default function OrderComplete() {
  return (
    <div className={styles.orderComplete}>
      <div className={styles.orderCompleteMessage}>
        <div className={styles.successIcon}>✓</div>
        <div className={styles.successTitle}>Захиалга амжилттай!</div>
        <div className={styles.successSubtitle}>
          Таны захиалгыг хүлээн авлаа. Удахгүй боловсруулж эхэлнэ.
        </div>
      </div>
    </div>
  );
}