import Links from "./links/Links";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className="links">
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
