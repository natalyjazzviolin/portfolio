import "../styles/Projects.module.scss";
import Image from "next/image";
import django from "../public/django.png"

export default function Project() {
  return (
    <div className="project">
      <div className="project__image">
        <Image
          src={django}
          alt="Djangodjams screenshot"
          width={300}
          height={300}
          layout="fixed"
        />
      </div>
      <div className="project__description">
        <div className="project__description-tags">
          #Gatsby #React
        </div>
        <div className="project__description-title">
          Hot Jazz Setlist Generator
        </div>
      </div>
    </div>
  );
}
