import '../styles/Nav.module.scss'
import { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
      <nav className="menu">
        <div className="menu__logo">
          <a href="#">Nataly Merezhuk</a>
        </div>
        <div className="menu__toggle">
            <button aria-label="Open menu" onClick={() => {
                setOpen(!open)
            }}>
              button
            </button>
        </div>
        <ul className={open ? "menu__list" : "menu__list-hidden"}>
          <li>
            <a href="#">Latest</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;