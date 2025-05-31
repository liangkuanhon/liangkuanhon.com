import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p>
        © 2025 Liang Kuan Hon. All rights reserved.&nbsp;
        <a href="https://github.com/liangkuanhon/liangkuanhon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
          Source code on GitHub{' '}
          <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </p>
      <div className="footer-link">
        <a href="mailto:liangkuanhon@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i> Contact</a>
        <a href="https://www.linkedin.com/in/liangkuanhon/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/liangkuanhon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
      </div>
    </footer>
  );
}
