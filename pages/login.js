import styles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import APIService from "../components/APIService";
import Cookies from "js-cookie";
import Router from "next/router";

export default function Login({ token }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  if (token) {
    Router.push("/notelist");
  }

  const handleChange = (event) => {
    if (event.target.name == "email") {
      setUserEmail(event.target.value);
    }
    if (event.target.name == "password") {
      setUserPassword(event.target.value);
    }
  };

  const Submit = () => {
    APIService.Login({ userEmail, userPassword })
      .then((resp) => Cookies.set("token", resp.token))
      .then(Router.push("/notelist"))
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.hero}>
      <div className={styles.formbox}>
        <div className={styles.buttonbox}>
          <div className={styles.btn}></div>
          <button type="button" className={styles.togglebtn}>
            Login
          </button>
        </div>
        <div className={styles.socialicons}>
          <Image
            className={styles.socialiconsImg}
            src="/fb.png"
            width="30px"
            height="30px"
          />
          <Image
            className={styles.socialiconsImg}
            src="/tw.png"
            width="30px"
            height="30px"
          />
          <Image
            className={styles.socialiconsImg}
            src="/gp.png"
            width="30px"
            height="30px"
          />
        </div>
        <form id="login" className={styles.inputgroup} action="">
          <input
            type="email"
            className={styles.inputfield}
            placeholder="User email"
            name="email"
            value={userEmail}
            onChange={handleChange}
          />
          <input
            type="password"
            className={styles.inputfield}
            placeholder="Password"
            name="password"
            value={userPassword}
            onChange={handleChange}
          />
          <button type="button" className={styles.submitbtn} onClick={Submit}>
            Log in
          </button>
          <h1 className={styles.warning}>
            If you dont have a account please sign up!!
          </h1>
          <Link href="/register">
            <a className={styles.link}>Register</a>
          </Link>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, params, query }) {
  const api_token = req.cookies.token;

  return {
    props: {
      token: api_token,
    },
  };
}
