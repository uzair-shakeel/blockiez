"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Details.module.css";
import { motion } from "framer-motion";
import "intersection-observer"; // Import the polyfill

const Details = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Stop observing after animation has started
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log("inView:", inView);
  }, [inView]);

  return (
    <div className="">
      <div ref={ref} className={styles.gridContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600b04a36ffbc054a6c046c6_Sign%20up.svg"
            alt="Sign up illustration"
          />
        </div>
        <div className="absolute top-[40%] lg:top-1/2 left-1/2 translate-x-1/2 h-full">
          <div className="absolute w-[30px] h-[30px] rounded-full -left-2 bg-[#006cd0] z-[50]"></div>
          <span className="absolute w-[8px] h-full bg-gray-200 top-2 left-1/2 translate-x-1/2 z-[40]"></span>
          {inView && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, delay: 0.8 }}
              className="absolute w-[8px] h-full bg-[#006cd0] top-2 left-1/2 translate-x-1/2 z-[40]"
            ></motion.span>
          )}
        </div>
        <div className={styles.textContainer}>
          <p className={styles.stepNumber}>01</p>
          <h2 className={styles.heading}>Open Free Account</h2>
          <p className={styles.content}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.textContainer}>
          <p className={styles.stepNumber}>02</p>
          <h2 className={styles.heading}>Submit your design</h2>
          <p className={styles.content}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="absolute top-[40%] lg:top-1/2 left-1/2 translate-x-1/2 h-full">
          <div className="absolute w-[30px] h-[30px] rounded-full -left-2 bg-[#006cd0] z-[50]"></div>
          <span className="absolute w-[8px] h-full bg-gray-200 top-2 left-1/2 translate-x-1/2 z-[40]"></span>
          {inView && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, delay: 3.2 }}
              className="absolute w-[8px] h-full bg-[#006cd0] top-2 left-1/2 translate-x-1/2 z-[40]"
            ></motion.span>
          )}
          <div className="absolute w-[30px] h-[30px] rounded-full -bottom-2 -left-[8px] bg-[#006cd0] z-[50]"></div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600b04a3a33b8e5cc5e9dd68_Submit.svg"
            alt="Sign up illustration"
          />
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600b04a3e6ddc2e9df0ad20a_Votes.svg"
            alt="Sign up illustration"
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.stepNumber}>03</p>
          <h2 className={styles.heading}>Grow in the community</h2>
          <p className={styles.content}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
