import styles from './checkoutPage.module.css';
import Form from './Form';

export const metadata = {
  title: 'Check out Page',
};

export default function CheckoutPage() {
  return (
    <div className={styles.mainContainer}>
      <h1>CheckoutPage</h1>
      <Form />
    </div>
  );
}

//  Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page
