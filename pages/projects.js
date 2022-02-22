import "../styles/projects.module.scss"
import Project from "../components/project";

export default function Projects() {
  return (
    <div className="projects">
      <p className="projects__title">
        When I have time to code outside my full-time job, I like to work on
        music-related projects. Here are some of the latest:
      </p>
      <div className="projects__list">
        <Project />
      </div>
    </div>
  );
}
