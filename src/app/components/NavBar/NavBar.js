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
      <div className={styles.menu}>
        <img src="/hamburger.png" className="w-8 h-5" />
      </div>
    </nav>
  );
};

export default NavBar;
