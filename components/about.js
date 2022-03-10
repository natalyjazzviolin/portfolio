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
        {loading && (
          <SkeletonTheme
            highlightColor="rgb(220, 215, 198)"
            baseColor="rgb(232, 228, 212)"
          >
            <Skeleton
              className="about__skeleton"
              circle={true}
              height={300}
              width={300}
            />
          </SkeletonTheme>
        )}
        {!loading && (
          <div className={loading ? "noshow" : "about__container"}>
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
          </div>
        )}
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