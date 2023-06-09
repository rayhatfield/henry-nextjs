import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/schedule">
          <h2>
            Clients <span>-&gt;</span>
          </h2>
          <p>Schedule an appointment </p>
        </Link>

        <Link href="/provider/availability">
          <h2>
            Providers <span>-&gt;</span>
          </h2>
          <p>Schedule your availability</p>
        </Link>
      </div>
    </main>
  );
}
