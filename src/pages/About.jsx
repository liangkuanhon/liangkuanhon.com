import "./About.css";
import React from 'react';

export default function About() {

  return (
    <>
      <title>Hon’s About</title>
      <main>
        <div className="main-wrapper">
          <div className="main-text-container">
            <h1>About</h1>
            <h3>Master the system. Lead the future. Based in Singapore.</h3>
            <p>I'm Hon — a student focused on AI, with roots in cybersecurity. 
              I build intelligent, secure systems with purpose and precision. 
              Clean design, deep thinking, and doing things that matters — and doing it right.</p>
          </div>

          <div className="main-image-container">
            <img
              src="/images/hon-logo.png"
              alt="Liang Kuan Hon"
              className="main-image"
            />
          </div>
        </div>
      </main>

      <div class="full-width-border"></div>

      <div className="secondary-wrapper alt-bg">
        <div className="wrapper-image">
          <img src="/images/dumbo.png" alt="Luminova Project" />
        </div>
        <div className="wrapper-text" style={{ flex: '0.35', maxWidth: '50%' }}>
          <h2>Moreee...</h2>
          <p id="line-break">
          Adapter<br/>
          Cadder<br/>
          Dreamer<br/>
          Designer<br/>
          Lifesaver<br/>
          Childhood favourite: Dumbo<br/>
          </p>
        </div>
      </div>

      <div className="secondary-wrapper">
        <div className="wrapper-text" style={{ flex: '0.3', maxWidth: '50%' }}>
          <h2>The Project That Started It All</h2>
          <p>What started as a typical uni module sparked something deeper — a shift from building projects to designing solutions that matter. 
            It ignited a drive to create with purpose, solve real problems, and bring clarity and intention to every line of code.</p>
          <a 
              href="https://dti2023luminova.wixsite.com/lightscapepavilion"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              className="wrapper-link"
            >Project documentation</a>
        </div>
        <div className="wrapper-image" style={{ flex: '0.65', maxWidth: '70%' }}>
          <a 
            href="https://dti2023luminova.wixsite.com/lightscapepavilion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Luminova Project"
          >
            <img src="/images/luminova.png" alt="Luminova Project" />
          </a>
        </div>  
      </div>

      <div className="secondary-wrapper alt-bg">
        
      </div>

      <div className="tertiary-wrapper">
        
      </div>
    </>
  );
}