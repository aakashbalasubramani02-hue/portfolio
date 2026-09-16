import { useState } from 'react';
import { personalInfo, navLinks } from '../data/portfolio';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo">{personalInfo.name}</a>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
