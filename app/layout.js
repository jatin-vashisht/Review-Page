import "./globals.css";
import { Roboto } from 'next/font/google'

export const metadata = {
  title: "Review",
  description: "Review Form",
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
