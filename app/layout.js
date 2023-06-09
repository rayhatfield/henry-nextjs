import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
import styles from "./layout.module.css";
import Link from "next/link";

export const metadata = {
  title: "Henry Meds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, styles.container)}>
        <header>
          <h1>
            <Link href="/">
              <span>&lt;-</span> Henry Meds
            </Link>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
