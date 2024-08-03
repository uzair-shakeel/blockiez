import styles from "./Hero.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h2 className={styles.heading}>BLOCKIEZ 01</h2>
        <h1 className={styles.headingMain}>
          Scroll into view for how it works section
        </h1>
        <p className={styles.para}>
          Add more steps by duplicating the last 'step block'
        </p>
      </div>
      <div className={styles.stepsContainer}>
        <div className={styles.scrollWrapHero}>
          <div className={styles.scrollBase}></div>
          <div className={styles.scrollAnimate}></div>
          {/* <div className={styles.dots}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div> */}
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>STEP 01</div>
          <div className={styles.step}>STEP 02</div>
          <div className={styles.step}>STEP 03</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
