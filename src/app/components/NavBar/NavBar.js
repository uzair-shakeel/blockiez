// components/NavBar.js
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}> 
      <div className={styles.brand}>Blockiez | Tene & Lisi</div>
      <div className={styles.links}>
        <a href="#" className={styles.resources}>
          More Resources
        </a>
        <button className={styles.cloneButton}>Clone</button>
      </div>
    </nav>
  );
};

export default NavBar;
