// components/Footer.js
import Image from "next/image";
import styles from "./Footer.module.css";
import profilePic from "/public/img.png"; // Ensure you have the image in your public directory

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <div className={styles.profile}>
          <Image
            src={profilePic} 
            alt="Profile Picture"
            className={styles.image}
          />
          <div className={styles.text}>
            <h2 className={styles.heading}>Hey Webflowers!</h2>
            <p>
              We are Mor Tene and Ilya Lisi, couple in life and partners at
              work. Mor is a designer ✍️ and Ilya is a filmmaker 🎥 Blockiez is
              our new collaboration 🤘.
            </p>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.follow}>
          <p>Follow us on</p>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com">
              <img src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600af88b128ed63f154b7f0b_Instagram.svg" />
            </a>
            <a href="https://dribbble.com">
              <img src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600af88b128ed6577a4b7efa_Dribbble.svg" />
            </a>
            <a href="https://youtube.com">
              <img src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600af88b128ed648dd4b7efb_YouTube.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
