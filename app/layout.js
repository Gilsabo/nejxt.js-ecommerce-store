import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <div>
          <div>
            <h1>Sarah Kirchweger</h1>
            <p>Graphic designer</p>
          </div>
          <nav>
            <Link href="/">Home</Link>
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
