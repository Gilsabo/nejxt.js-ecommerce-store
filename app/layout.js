import './globals.css';
import { Inter } from 'next/font/google';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
