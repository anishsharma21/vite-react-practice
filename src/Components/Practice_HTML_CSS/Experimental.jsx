import styles from "./Experimental.module.css";
import avatar from "../../assets/avatar.jpg";

export default function Experimental() {
  return (
    <>
      <div className={styles.profiles}>
        <div className={styles.profile}>
          <img src={avatar} alt="profile image" />
          <h2>Shwarma</h2>
        </div>
        <div className={styles.profile}>
          <img src={avatar} alt="profile image" />
          <h2>Anish</h2>
        </div>
      </div>
    </>
  );
}
