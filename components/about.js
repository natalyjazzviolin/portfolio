import "../styles/About.module.scss"
import avatar from "../public/avatar.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function About() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(loading)
    handleImageLoad()
  }, [loading]);
  const handleImageLoad = (e) => {
    console.log("load", e);
    setLoading(false)
  };

    return (
      <section className="about">
        <div className={loading === true ? "noshow" : "about__container"}>
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
          <svg
            className="about__container-svg"
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M189.888 294.638L77.0225 18.9183C94.8304 8.98279 114.872 2.57095 136.205 0.62587L244.904 266.166C228.967 279.202 210.299 289.022 189.888 294.638Z"
              fill="#E95757"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.8413 19.0195L189.688 294.693C177.047 298.153 163.739 300 150 300C146.59 300 143.207 299.886 139.853 299.662L37.8242 50.4155C48.9444 37.8983 62.1279 27.2553 76.8413 19.0195Z"
              fill="#E9C957"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.2387 73.0105C26.0991 64.8992 31.7043 57.2852 37.9597 50.2632L140.057 299.676C130.495 299.05 121.179 297.528 112.189 295.194L21.2387 73.0105Z"
              fill="#BE74E0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M244.466 266.523L135.643 0.678214C140.368 0.229499 145.157 0 150 0C156.348 0 162.605 0.394372 168.746 1.15995L267.728 242.963C260.862 251.645 253.057 259.549 244.466 266.523Z"
              fill="#5777E9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M267.135 243.707L167.802 1.04529C197.378 4.54247 224.317 16.6446 246.048 34.7789L299.278 164.814C296.367 194.503 284.801 221.654 267.135 243.707Z"
              fill="#E99457"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M299.152 166.042L245.098 33.9924C278.617 61.5019 300 103.254 300 150C300 155.419 299.713 160.772 299.152 166.042Z"
              fill="#7D57E9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M113.007 295.404C48.0541 278.93 0 220.077 0 150C0 121.551 7.91975 94.9522 21.6748 72.2874L113.007 295.404Z"
              fill="#74E09F"
            />
          </svg>
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