import ClearButton from './ClearButton';
import styles from './form.module.css';

export default function Form() {
  return (
    <form className={styles.form}>
      <label>
        First name
        <input data-test-id="checkout-first-name" required />
      </label>
      <label>
        Last name
        <input data-test-id="checkout-last-name" required />
      </label>
      <label>
        E-mail <input type="email" data-test-id="checkout-email" required />
      </label>
      <label>
        Address <input data-test-id="checkout-address" required />
      </label>
      <label>
        City <input data-test-id="checkout-city" required />
      </label>
      <label>
        Postal code
        <input type="number" data-test-id="checkout-postal-code" required />
      </label>
      <label>
        Country <input data-test-id="checkout-country" required />
      </label>
      <label>
        Credit card <input type="number" data-test-id="checkout-credit-card" />
      </label>
      <label>
        Expiration date
        <input data-test-id="checkout-expiration-date" required />
      </label>
      <label>
        Security code
        <input type="number" data-test-id="checkout-security-code" required />
      </label>
      <ClearButton />
    </form>
  );
}
