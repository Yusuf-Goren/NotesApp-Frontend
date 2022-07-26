import styles from "../styles/Register.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import APIService from "../components/APIService";
import Router from "next/router";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name == "username") {
      setUserName(event.target.value);
    }
    if (event.target.name == "email") {
      setUserEmail(event.target.value);
    }
    if (event.target.name == "password") {
      setUserPassword(event.target.value);
    }

    console.log(userName, userEmail, userPassword);
  };

  const Register = () => {
    APIService.Register({ userName, userEmail, userPassword })
      .then((response) => {
        if (response.ok) Router.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.formbox}>
          <div className={styles.buttonbox}>
            <div className={styles.btn}></div>
            <button type="button" className={styles.togglebtn}>
              Register
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
          <form id="register" className={styles.inputgroup} action="">
            <input
              onChange={handleChange}
              type="email"
              className={styles.inputfield}
              placeholder="User email"
              name="email"
              value={userEmail}
            />
            <input
              onChange={handleChange}
              type="text"
              className={styles.inputfield}
              placeholder="Username"
              name="username"
              value={userName}
            />
            <input
              onChange={handleChange}
              type="password"
              className={styles.inputfield}
              placeholder="Password"
              name="password"
              value={userPassword}
            />
            <button
              type="button"
              className={styles.submitbtn}
              onClick={Register}
            >
              Register
            </button>
            <h1 className={styles.warning}>
              If you already have a account please log in !!!
            </h1>
            <Link href="/login">
              <a className={styles.link}>Login</a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
