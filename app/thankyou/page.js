import styles from './thankYouPage.module.css';

export const metadata = {
  title: 'Thank you for your order',
};

export default function ThankYouPage() {
  return (
    <div className={styles.mainContainer}>
      <h1>Thank you for your order</h1>
      <div className={styles.heart}>❤️</div>
    </div>
  );
}
