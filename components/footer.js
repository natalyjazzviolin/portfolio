import '../styles/Footer.module.scss';

export default function Footer() {

    const versions = [
        { date: 'November 2020', no: 1}
    ]
    return (
      <footer className="footer">
        <div className="footer__versions">
          <p>Previous Versions:</p>
          {versions.map((version) => {
            return <a key={version.no}>{version.date}</a>;
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