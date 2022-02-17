import "../styles/Latest.module.scss";
import Event from "./event";

export default function Latest() {
  return (
    <section className="container">
      <div className="container__latest">
        <h3>Latest</h3>
        <p>When I&apos;m not coding, I play violin at events like this:</p>
        <Event />
      </div>
    </section>
  );
}
