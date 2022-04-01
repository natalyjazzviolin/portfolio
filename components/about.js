import "../styles/About.module.scss"
import avatar from "../public/avatar.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    handleImageLoad()
  }, [loaded]);
  const handleImageLoad = (e) => {
    if (typeof e !== undefined && e?.hasOwnProperty("naturalWidth")) {
      console.log("load", e);
      setLoaded(true);
    }
  };

  const circle ={
    turn: {
      opacity: 1,
      rotate: [0, 55],
      transition: { delay: 0.5, duration: 0.5 },
  }
}

  const stripe = {
    initial: {
      opacity: 1
    }, 
    red: {
      transition: { delay: 1.17, duration: 0.7 },
      opacity: 0
    },
    orange: {
      transition: { delay: 1.1, duration: 0.5 },
      opacity: 0
    },
    purple: {
      transition: { delay: 1.3, duration: 0.9 },
      opacity: 0
    },
    yellow: {
      transition: { delay: 1.4, duration: 0.5 },
      opacity: 0
    },
    periwinkle: {
      transition: { delay: 1.48, duration: 0.8 },
      opacity: 0
    },
    blue: {
      transition: { delay: 1.6, duration: 0.4 },
      opacity: 0
    },
    green: {
      transition: { delay: 1.666, duration: 0.6 },
      opacity: 0
    },
  };

    return (
      <section className="about">
        <div className={"about__container"}>
          <Image
            className="about__container-photo"
            src={avatar}
            alt="Portrait"
            width={300}
            height={300}
            layout="fixed"
            priority={true}
            onLoadingComplete={(e) => {
              handleImageLoad(e);
            }}
          />
          <motion.svg
            className="about__container-svg"
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={circle}
            animate={loaded ? "turn" : ""}
          >
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M189.888 294.638L77.0225 18.9183C94.8304 8.98279 114.872 2.57095 136.205 0.62587L244.904 266.166C228.967 279.202 210.299 289.022 189.888 294.638Z"
              fill="#E95757"
              variants={stripe}
              initial="initial"
              animate={loaded ? "red" : ""}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.1398 18.8529L190.018 294.603C177.278 298.121 163.859 300 150 300C146.59 300 143.207 299.886 139.853 299.662L37.8242 50.4155C49.0196 37.8138 62.3062 27.1115 77.1398 18.8529Z"
              fill="#E9C957"
              variants={stripe}
              initial="initial"
              animate={loaded ? "yellow" : ""}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.2387 73.0105C26.0991 64.8992 31.7043 57.2852 37.9597 50.2632L140.057 299.676C130.495 299.05 121.179 297.528 112.189 295.194L21.2387 73.0105Z"
              fill="#BE74E0"
              variants={stripe}
              initial="initial"
              animate={loaded ? "periwinkle" : ""}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M244.466 266.523L135.643 0.678214C140.368 0.229499 145.157 0 150 0C156.348 0 162.605 0.394372 168.746 1.15995L267.728 242.963C260.862 251.645 253.057 259.549 244.466 266.523Z"
              fill="#5777E9"
              variants={stripe}
              initial="initial"
              animate={loaded ? "blue" : ""}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M267.135 243.707L167.802 1.04529C197.378 4.54246 224.317 16.6446 246.048 34.7788L299.278 164.814C296.367 194.503 284.801 221.654 267.135 243.707Z"
              fill="#E99457"
              variants={stripe}
              initial="initial"
              animate={loaded ? "orange" : ""}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M299.152 166.042L245.098 33.9924C278.617 61.5019 300 103.254 300 150C300 155.419 299.713 160.772 299.152 166.042Z"
              fill="#7D57E9"
              variants={stripe}
              initial="initial"
              animate={ loaded ? "purple" : ""}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M113.007 295.404C48.0541 278.93 0 220.077 0 150C0 121.551 7.91975 94.9522 21.6748 72.2874L113.007 295.404Z"
              fill="#74E09F"
              variants={stripe}
              initial="initial"
              animate={loaded ? "green" : ""}
            />
          </motion.svg>
        </div>
        <div className="about__bio">
          <p>
            {" "}
            Nataly is a jazz violinist and self-taught fullstack developer. She
            is currently working with React, Laravel, and Python at{" "}
            <span className="highlight">
              <a
                target="_blank"
                href="https://www.wizardpig.com"
                rel="noreferrer"
              >
                WizardPig Inc.
              </a>
            </span>
          </p>
        </div>
      </section>
    );
}