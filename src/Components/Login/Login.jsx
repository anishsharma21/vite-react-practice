import styles from "./Login.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <form action="">
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
