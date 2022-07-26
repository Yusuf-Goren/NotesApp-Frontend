import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <Link href="/login">
          <a className={styles.link}>Login</a>
        </Link>
        <Link href="/register">
          <a className={styles.link}>Register</a>
        </Link>
      </div>
    </div>
  );
}
