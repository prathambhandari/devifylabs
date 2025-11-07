import React from "react";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <a className="brand" href="#hero">
          devify<span className="brand-muted">Labs</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#our-work">Our Work</a>
          <a href="#process">Process</a>
          <a href="#about">About Us</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
