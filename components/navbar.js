import '../styles/Nav.module.scss'
import { useState } from 'react';
import { motion } from "framer-motion";
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const menuBtn = useRef();

    const Clefvariants = {
      open: { opacity: 0, x: "-100%" },
      closed: { opacity: 1, x: 0 },
    };

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
        // x: 0,
        // x: "10%",
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
          <a href="#">nataly merezhuk</a>
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
            <li role="none">
              <a role="menuitem" href="#latest" onClick={() => {
                setOpen(false);
              }}>
                Latest
              </a>
            </li>
            <li role="none">
              <a role="menuitem" href="#blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar;