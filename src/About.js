import * as React from "react";
import "./About.css";
import RevRide from "./RevRide.png";

function About() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <div className="hero-image-container">
          <img loading="lazy" src={RevRide} className="hero-image" alt="logo" />
        </div>
        <div className="hero-content">
          <div className="hero-text-container">
            <h2 className="hero-title">WHO ARE WE?</h2>
            <p className="hero-description">
              Welcome to RevRide, where every journey redefines the adventure of
              riding. Inspired by the spirit of Zen and the Art of Motorcycle
              Maintenance, we believe that riding a motorcycle is not just about
              traveling from one place to another but about embracing the rhythm
              of the road and the philosophy behind every turn.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
