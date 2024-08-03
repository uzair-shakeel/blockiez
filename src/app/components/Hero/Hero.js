"use client";
import { useEffect } from "react";
import styles from "./Hero.module.css";

const HeroSection = () => {
  useEffect(() => {
    const progressLine = document.querySelector(`.${styles.progressLine}`);
    const circles = [
      document.querySelector(`.${styles.circle2}`),
      document.querySelector(`.${styles.circle3}`),
    ];
    const steps = [
      document.querySelector(`.${styles.step}:nth-child(2) span`), // Step 02
      document.querySelector(`.${styles.step}:nth-child(3) span`), // Step 03
    ];

    let animationPaused = false;

    const handleAnimation = () => {
      const containerHeight = progressLine.parentElement.offsetHeight;
      const height = progressLine.offsetHeight;
      const isNearEnd = height >= containerHeight * 0.999;

      // Add or remove filled class
      circles.forEach((circle, index) => {
        const circlePosition = (index + 1) * (containerHeight / 2.1);
        if (height >= circlePosition) {
          circle.classList.add(styles.filled);
        } else {
          circle.classList.remove(styles.filled);
        }
      });

      // Add or remove styling for steps
      steps.forEach((step, index) => {
        const stepPosition = (index + 1) * (containerHeight / 2.1);
        if (height >= stepPosition) {
          step.style.backgroundColor = "white";
          step.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
          step.style.color = "#006cd0";
        } else {
          step.style.backgroundColor = ""; // Reset to default
          step.style.boxShadow = ""; // Reset to default
          step.style.color = "#70768A";
        }
      });

      // Control animation pause and resume
      if (isNearEnd && !animationPaused) {
        animationPaused = true;
        // Pause the animation and hold at current height
        progressLine.classList.add(styles.hold);
        setTimeout(() => {
          // Remove the hold class to resume the animation
          progressLine.classList.remove(styles.hold);
          progressLine.offsetHeight; // Trigger reflow
          progressLine.classList.add(styles.resumeAnimation);
          setTimeout(() => {
            progressLine.classList.remove(styles.resumeAnimation);
          }, 10); // Small delay to ensure the class is applied
        }, 800); // Pause for 0.8 seconds
      } else if (!isNearEnd) {
        animationPaused = false;
        progressLine.classList.remove(styles.hold, styles.resumeAnimation);
        // Reapply animation if needed
        progressLine.classList.add(styles.fillAnimation);
      }
    };

    handleAnimation(); // Initial call

    const interval = setInterval(handleAnimation, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, []);

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
        <div className={styles.verticalLine}>
          <div
            className={`${styles.progressLine} ${styles.fillAnimation}`}
          ></div>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={`${styles.leftSide} ${styles.firstStep}`}>
              Step 01
            </span>
            <div className={`${styles.circle} ${styles.circle1}`}></div>
          </div>
          <div className={styles.step}>
            <div className={`${styles.circle} ${styles.circle2}`}></div>
            <span>Step 02</span>
          </div>
          <div className={styles.step}>
            <span className={styles.leftSide}>Step 03</span>
            <div className={`${styles.circle} ${styles.circle3}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HeroSection;
