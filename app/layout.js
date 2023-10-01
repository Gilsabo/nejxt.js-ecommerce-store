import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'SKartista | Sarah Kirchweger ',
    template: '%s | Sarah Kirchweger ',
  },
  description: 'Graphic designer and painter',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Sarah Kirchweger</h1>
        <p>Graphic designer</p>
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
        </nav>
        {children}
      </body>
    </html>
  );
}
