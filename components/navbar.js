import '../styles/Nav.module.scss'
import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

const Navbar = () => {

  const links = [
    // { title: 'Resume', to: '/resume'},
    { title: 'Snippetts', to: '/snippets'},
    { title: 'Projects', to: '/projects'},
    { title: 'Blog', to: '/blog'},
  ]
    const [open, setOpen] = useState(false);

    const LeftCrossvariants = {
      open: {
        opacity: 1,
        rotate: [0, -45],
        fill: "#f0323f",
        width: "35px",
        y: "35%",
        transition: { duration: 0.2 },
      },
      closed: { opacity: 1, rotate: 0, y: 0 },
    };
    const RightCrossvariants = {
      open: {
        opacity: 1,
        rotate: [0, 45],
        fill: "#f0323f",
        y: "-35%",
        width: "35px",
        transition: { duration: 0.2 },
      },
      closed: { opacity: 1, rotate: 0, y: 0 },
    };
    const MiddleCrossvariants = {
      open: { opacity: 0, y: "100%", transition: { duration: 0.2 } },
      closed: { opacity: 1, y: 0 },
    };

    return (
      <header className="menu">
        <div className="menu__logo">
          <Link href="/">nataly merezhuk</Link>
        </div>
        <button
          className="menu__toggle"
          id="menubutton"
          aria-haspopup="true"
          aria-controls="nav"
          // tabIndex={-1}
          aria-label="Open menu"
          onClick={() => {
            document.body.offsetHeight;
            setOpen(!open);
          }}
        >
          <svg
            width="37"
            height="28"
            viewBox="0 0 37 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              width="37"
              height="6"
              rx="3"
              fill="#84B6B0"
              variants={LeftCrossvariants}
              animate={open ? "open" : "closed"}
            />
            <motion.rect
              y="11"
              width="37"
              height="6"
              rx="3"
              fill="#199182"
              variants={MiddleCrossvariants}
              animate={open ? "open" : "closed"}
            />
            <motion.rect
              y="22"
              width="37"
              height="6"
              rx="3"
              fill="#00473F"
              variants={RightCrossvariants}
              animate={open ? "open" : "closed"}
            />
          </svg>
        </button>
        <nav>
          <ul
            className={open ? "menu__list" : "menu__list-hidden"}
            id="nav"
            role="menu"
            aria-labelledby="menubutton"
          >
            { links.map(link => {
              return (
                <li role="none" key={link.title}>
                  <Link
                    role="menuitem"
                    href={link.to}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    { link.title }
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
}

export default Navbar;