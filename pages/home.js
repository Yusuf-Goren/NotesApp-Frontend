import Link from "next/link";
import styles from "../styles/Home.module.css";
import Router from "next/router";

export default function Home() {
  Router.push("/register");
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
