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
            <p>I'm Hon — an architect driven by curiosity, with a focus on AI and a background in cybersecurity. 
              I build systems that are intelligent, secure, and purposeful. 
              My work blends technical depth with clean design and independent thinking. 
              I believe in doing things that matter — and doing it right.</p>
          </div>

          <div className="main-image-container">
            <img
              src="/src/assets/images/hon-logo.png"
              alt="Liang Kuan Hon"
              className="main-image"
            />
          </div>
        </div>
      </main>
    </>
  );
}