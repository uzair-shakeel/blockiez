"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Details.module.css";
import { motion } from "framer-motion";
import "intersection-observer"; // Import the polyfill

const Details = () => {
  const [animationCompleted, setAnimationCompleted] = useState({
    section3: false,
    section6: false,
  });
  const [animationCompleted2, setAnimationCompleted2] = useState({
    section3: false,
    section6: false,
  });
  const [sectionInView, setSectionInView] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
  });

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useEffect(() => {
    const observerCallback = (entries, observer, section) => {
      if (entries[0].isIntersecting) {
        setSectionInView((prevState) => ({
          ...prevState,
          [section]: true,
        }));
        observer.unobserve(entries[0].target); // Stop observing after animation has started
      }
    };

    const observerOptions = { threshold: 0.5 };

    const observer1 = new IntersectionObserver(
      (entries) => observerCallback(entries, observer1, "section1"),
      observerOptions
    );
    const observer2 = new IntersectionObserver(
      (entries) => observerCallback(entries, observer2, "section2"),
      observerOptions
    );
    const observer3 = new IntersectionObserver(
      (entries) => observerCallback(entries, observer3, "section3"),
      observerOptions
    );
    const observer4 = new IntersectionObserver(
      (entries) => observerCallback(entries, observer4, "section4"),
      observerOptions
    );
    const observer5 = new IntersectionObserver(
      (entries) => observerCallback(entries, observer5, "section5"),
      observerOptions
    );
    const observer6 = new IntersectionObserver(
      (entries) => observerCallback(entries, observer6, "section6"),
      observerOptions
    );

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);
    if (ref4.current) observer4.observe(ref4.current);
    if (ref5.current) observer5.observe(ref5.current);
    if (ref6.current) observer6.observe(ref6.current);

    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
      if (ref3.current) observer3.unobserve(ref3.current);
      if (ref4.current) observer4.unobserve(ref4.current);
      if (ref5.current) observer5.unobserve(ref5.current);
      if (ref6.current) observer6.unobserve(ref6.current);
    };
  }, []);

  useEffect(() => {
    console.log("sectionInView:", sectionInView);
  }, [sectionInView]);

  return (
    <div className="">
      <div className={styles.gridContainer}>
        <div ref={ref1}>
          <img
            className={styles.image}
            src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600b04a36ffbc054a6c046c6_Sign%20up.svg"
            alt="Sign up illustration"
          />
        </div>
        <div className="absolute top-[45%] lg:top-1/2 left-1/2 translate-x-1/2 h-full">
          <div className="absolute w-[30px] h-[30px] rounded-full -left-2 bg-[#006cd0] z-[50]"></div>
          <span className="absolute w-[8px] h-full bg-gray-200 top-2 left-1/2 translate-x-1/2 z-[40]"></span>
          {sectionInView.section3 && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, delay: 0.3 }}
              onAnimationComplete={() =>
                setAnimationCompleted((prev) => ({ ...prev, section3: true }))
              }
              className="absolute hidden md:block w-[8px] h-full bg-[#006cd0] top-2 left-1/2 translate-x-1/2 z-[40]"
            ></motion.span>
          )}
          {sectionInView.section3 && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2 }}
              className="absolute md:hidden w-[8px] h-full bg-[#006cd0] top-2 left-1/2 translate-x-1/2 z-[40]"
            ></motion.span>
          )}
        </div>
        <div ref={ref2} className={styles.textContainer}>
          <p className={styles.stepNumber}>01</p>
          <h2 className={styles.heading}>Open Free Account</h2>
          <p className={styles.content}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className={`${styles.gridContainer}`}>
        <div
          ref={ref3}
          className={`${
            styles.textContainer
          } transition-opacity duration-600 ease-in-out ${
            animationCompleted.section3 ? `bg-white` : `bg-gray-100`
          }`}
        >
          <p
            className={`${
              styles.stepNumber
            } transition-opacity duration-600 ease-in-out ${
              animationCompleted.section3 ? `text-[#006cd0]` : `text-gra-700`
            }`}
          >
            02
          </p>
          <h2 className={styles.heading}>Submit your design</h2>
          <p className={styles.content}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="absolute top-[45%] lg:top-1/2 left-1/2 translate-x-1/2 h-full">
          <div className="absolute w-[30px] h-[30px] rounded-full -left-2 bg-[#006cd0] z-[50]"></div>
          <span className="absolute w-[8px] h-full bg-gray-200 top-2 left-1/2 translate-x-1/2 z-[40]"></span>
          {sectionInView.section6 && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              onAnimationComplete={() =>
                setAnimationCompleted2((prev) => ({ ...prev, section3: true }))
              }
              transition={{ duration: 2 }}
              className="absolute md:hidden w-[8px] h-full bg-[#006cd0] top-2 left-1/2 translate-x-1/2 z-[40]"
            ></motion.span>
          )}
          {sectionInView.section5 && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, delay: 0.3 }}
              className="absolute hidden md:block w-[8px] h-full bg-[#006cd0] top-2 left-1/2 translate-x-1/2 z-[40]"
            ></motion.span>
          )}
          <div className="absolute w-[30px] h-[30px] rounded-full -bottom-2 -left-[8px] bg-[#006cd0] z-[50]"></div>
        </div>
        <div
          ref={ref4}
          className={`transition-opacity duration-600 ease-in-out ${
            animationCompleted.section3 ? "opacity-100" : "opacity-40"
          }`}
        >
          <img
            className={styles.image}
            src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600b04a3a33b8e5cc5e9dd68_Submit.svg"
            alt="Submit illustration"
          />
        </div>
      </div>
      <div className={`${styles.gridContainer}`}>
        <div
          ref={ref5}
          className={`transition-opacity duration-600 ease-in-out ${
            animationCompleted2.section3 ? "opacity-100" : "opacity-40"
          }`}
        >
          <img
            className={styles.image}
            src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600b04a3e6ddc2e9df0ad20a_Votes.svg"
            alt="Votes illustration"
          />
        </div>
        <div
          ref={ref6}
          className={`${
            styles.textContainer
          } transition-opacity duration-600 ease-in-out ${
            animationCompleted2.section3 ? `bg-white` : `bg-gray-100`
          }`}
        >
          <p
            className={`${
              styles.stepNumber
            } transition-opacity duration-600 ease-in-out ${
              animationCompleted2.section3 ? `text-[#006cd0]` : `text-gray-700`
            }`}
          >
            03
          </p>
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
