import styles from './thankYouPage.module.css';

export const metadata = {
  title: 'Thank you for your order',
};

export default function ThankYouPage() {
  return (
    <div className={styles.mainContainer}>
      <h1>Thank you for your order</h1>
      <div className={styles.heart}>❤️</div>
      <h1>Getting closer to pay my bills</h1>
      <div className={styles.heart}>💸</div>
      <div>
        <h1>Gracias por todo Jose, good energy!</h1>
        <div className={styles.heart}>👍</div>
      </div>
    </div>
  );
}
