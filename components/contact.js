import "../styles/Contact.module.scss";
import { ReactElement } from "react";
import {
  fab,
  faTwitterSquare,
  faSpotify,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {

  const socials = [
    { icon: faGithub, link: "https://github.com/natalyjazzviolin" },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/nataly-merezhuk/",
    },
    { icon: faTwitterSquare, link: "https://twitter.com/NatalyMerezhuk" },
    {
      icon: faSpotify,
      link: "https://open.spotify.com/artist/2FYFa34QGVgikiF4d9SPwL?si=HkUcMI2ARZucj-srxSq0Jg",
    },
  ];
  
  return (
    <section className="container">
      <div className="container__contact">
        <h3>Contact</h3>
        <p>
          Send me an{" "}
          <a
            href="mailto:hello+portfolio@nataly.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            email
          </a>{" "}
          or find me on social media:
        </p>
        <div className="container__contact-social">
          { socials.map( social => {
            return (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={social.icon}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
