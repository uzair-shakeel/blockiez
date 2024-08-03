"use client";
// components/NavBar.js
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}>Blockiez | Tene & Lisi</div>
        <div className={styles.links}>
          <a href="#" className={styles.resources}>
            More Resources
          </a>
          <button className={styles.cloneButton}>Clone</button>
        </div>
        <div onClick={() => setopen(!open)} className={styles.menu}>
          {open === false ? (
            <img src="/hamburger.png" className="w-8 h-auto cursor-pointer" />
          ) : (
            <img
              src="/x.svg"
              className="w-8 h-auto cursor-pointer absolute top-4 right-5"
            />
          )}
        </div>
      </nav>

      <div
        className={
          open === true ? `${styles.topbar}` : `${styles.topbarClosed}`
        }
      >
        <div className={styles.linkss}>
          <a href="#" className={styles.resources}>
            More Resources
          </a>
          <button className={styles.cloneButton}>Clone</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
