import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <header>
        <Link to="/">
          <img
            src="/images/hon-logo.png" // adjust path as needed
            alt="Liang Kuan Hon Logo"
            className="header-logo"
          />
        </Link>

        <div className="header-links">
          <nav>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
          </nav>

          <div className="social-icons">
            <a
              href="https://linkedin.com/in/liangkuanhon"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/liangkuanhon"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://instagram.com/liangkuanhon"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
