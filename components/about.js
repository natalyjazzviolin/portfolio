import "../styles/About.module.scss"
import avatar from "../public/avatar.png"
import Image from "next/image";

export default function About() {
    return (
      <section className="about">
        <div className="about__container">
          <Image
            className="about__container-photo"
            src={avatar}
            alt="Portrait"
            width={300}
            height={300}
            layout="fixed"
            priority
            placeholder="blur"
          />
        </div>
        <div className="about__bio">
          <p> Nataly is a jazz violinist and self-taught fullstack developer. She is currently working with React, Laravel, and Python at <span className="highlight"><a target="_blank" href="https://www.wizardpig.com" rel="noreferrer">WizardPig Inc.</a></span></p>
        </div>
      </section>
    );
}