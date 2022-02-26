import "../styles/Projects.module.scss";
import Image from "next/image";
import django from "../public/django.png"

export default function Project() {
  return (
    <div className="project">
      <div className="project__description">
        <div className="project__description-tags">
          #Gatsby #React
        </div>
        <div className="project__description-title">
          Jazz Tune Picker
        </div>
        <div className="project__description-full">
          Who has nott been in this situation before: you are in a jam, ready to play the next tune and no one knows what to play next.
        </div>
      </div>
    </div>
  );
}
