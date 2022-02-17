import "../styles/Contact.module.scss";
import { ReactElement } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
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
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    </section>
  );
}
