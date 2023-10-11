import './globals.css';
import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import styles from './layout.module.css';

export const metadata = {
  title: {
    default: 'SKartista | Sarah Kirchweger ',
    template: '%s | Sarah Kirchweger ',
  },
  description: 'Graphic designer and painter',
};

export default function RootLayout({ children }) {
  const cartCookie = getCookie('cart');
  const cart = parseJson(cartCookie);
  console.log('cartcookie layout', cart);

  const numberOfItems = cart?.reduce((accumulator, preValue) => {
    return accumulator + preValue.quantity;
  }, 0);

  return (
    <html lang="en">
      <body>
        <div className={styles.navContainer}>
          <div>
            <Link href="/">
              <h1>Sarah Kirchweger</h1>
            </Link>
            <p>Graphic designer</p>
          </div>
          <nav className={styles.navigationLinks}>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/family">Family</Link>
            <Link href="/illustrations">Illustrations</Link>
            <Link href="/landscapes">Landscapes</Link>
            <Link href="/pets">Pets</Link>
            <Link href="/wildLife">Wild life</Link>
            <Link href="/cart">Shopping cart</Link>
            <header data-test-id="cart-link">
              <Link data-test-id="cart-link" href="/cart">
                Items:
                {numberOfItems ?? (
                  <span data-test-id="cart-count">{numberOfItems}</span>
                )}
              </Link>
            </header>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
