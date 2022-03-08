import "../styles/Projects.module.scss"
import Project from "../components/project";

export default function Projects() {
  return (
    <div className="projects">
      <p className="projects__title">
        When I have time to code outside my full-time job, I like to work on fun
        projects like this portfolio website. <br></br>Take a look at my code on{" "}
        <span className="highlight">
          <a
            target="_blank"
            href="https://github.com/natalyjazzviolin"
            rel="noreferrer"
          >
            GitHub.
          </a>
        </span>
      </p>
    </div>
  );
}
