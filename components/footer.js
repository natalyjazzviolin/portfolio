import '../styles/Footer.module.scss';

export default function Footer() {

  //TODO: sort version by date
    const versions = [
      { date: "NextJS, Feb '22", no: 1, url: "https://www.v1.nataly.dev/" },
      { date: "GatsbyJS, Nov '20", no: 1, url: "https://www.v1.nataly.dev/" },
    ];
    return (
      <footer className="footer">
        <div className="footer__versions">
          <p>Versions:</p>
          {versions.map((version) => {
            return <a key={version.no} href={version.url} target="_blank" rel="noreferrer">{version.date}</a>;
          })}
        </div>
        <div className="footer__resume">
          <a href="/resume">View Resume</a>
        </div>
        <div className="footer__music">
          <p>Music Portfolio:</p>
          <a href="https://www.natalyjazzviolin.com/" target="_blank" rel="noreferrer">
            www.natalyjazzviolin.com
          </a>
        </div>
      </footer>
    );
}