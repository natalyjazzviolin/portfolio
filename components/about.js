import "../styles/About.module.scss"
import Image from "next/image";

export default function About() {
    return (
      <section className="about">
        <div className="about__container">
          <Image
            className="about__container-photo"
            src="/avatar.png"
            alt="Portrait"
            width={300}
            height={300}
            layout="fixed"
          />
        </div>
        <div className="about__bio">
          <p> Nataly is a jazz violinist and self-taught fullstack developer. She is currently working with React, Laravel, and Python at <span className="highlight"><a href="www.wizardpig.com">WizardPig Inc.</a></span></p>
        </div>
      </section>
    );
}