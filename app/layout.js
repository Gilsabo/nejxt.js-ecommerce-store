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
  description: 'Graphic designer and artist',
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
          <div className={styles.containterTitle}>
            <Link className={styles.title} href="/">
              <h1>Sarah Kirchweger</h1>
            </Link>
            <p className={styles.title}>Graphic designer and painter</p>
          </div>
          <nav className={styles.navigationLinks}>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/family">Family</Link>
            <Link href="/illustrations">Illustrations</Link>
            <Link href="/landscapes">Landscapes</Link>
            <Link href="/pets">Pets</Link>
            <Link href="/wildLife">Wild life</Link>
            {/* <Link href="/cart">Shopping cart</Link> */}
            <header data-test-id="cart-link">
              <Link
                className={styles.backpackCart}
                data-test-id="cart-link"
                href="/cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                {numberOfItems > 0 && (
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
