import "../styles/About.module.scss"
import avatar from "../public/avatar.jpeg"
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
            <p> Nataly is a jazz violinist and self-taught fullstack developer. She is currently developing React apps at WizardPig.</p>
          </div>
      </section>
    );
}