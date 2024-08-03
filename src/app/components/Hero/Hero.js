"use client";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsAnimating(true);
      }, 900); // Delay between loops
    }, 2500); // Duration of one complete cycle

    return () => clearInterval(interval);
  }, []);

  const lineVariants = {
    initial: { height: 0 },
    animate: { height: "100%" },
  };

  const circleVariants = {
    initial: { height: 0 },
    animate: { height: "20px" },
  };

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
        <div className="absolute top-0 left-1/2 translate-x-1/2 h-full">
          <div className="absolute w-[20px] h-[20px] rounded-full -left-[2px] bg-[#006cd0] z-[50]"></div>
          <span className="absolute w-[8px] h-full bg-gray-200 top-2 left-1/2 translate-x-1/2 z-[40]"></span>
          {isAnimating && (
            <>
              <motion.span
                initial="initial"
                animate="animate"
                variants={lineVariants}
                transition={{ duration: 0.9 }}
                className="absolute w-[8px] h-full bg-[#006cd0] top-2 left-1/2 translate-x-1/2 z-[40]"
              ></motion.span>

              <motion.div
                initial="initial"
                animate="animate"
                variants={circleVariants}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="absolute w-[20px] h-[20px] rounded-full top-[48%] -left-[2px] bg-[#006cd0] z-[50]"
              ></motion.div>
              <motion.div
                initial="initial"
                animate="animate"
                variants={circleVariants}
                transition={{ duration: 0.2, delay: 0.7 }}
                className="absolute w-[20px] h-[20px] rounded-full top-[99%] -left-[2px] bg-[#006cd0] z-[50]"
              ></motion.div>
            </>
          )}
        </div>
        <div className={styles.steps}>
          <div className={styles.step1}>STEP 01</div>
          <div className={styles.step2}>STEP 02</div>
          <div className={styles.step3}>STEP 03</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
