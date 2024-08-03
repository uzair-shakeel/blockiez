import React from "react";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <div className="">
      <div className={styles.gridContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://assets.website-files.com/600af88b128ed6334f4b7ef6/600b04a36ffbc054a6c046c6_Sign%20up.svg"
            alt="Sign up illustration"
          />
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
