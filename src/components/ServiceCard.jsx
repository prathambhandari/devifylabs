import React from "react";

export default function ServiceCard({
  title,
  description,
  bullets = [],
  cta = "Get Quote",
}) {
  return (
    <article className="service-card">
      <h4 className="card-title">{title}</h4>
      <p className="card-desc">{description}</p>

      <ul className="card-bullets">
        {bullets.map((b, i) => (
          <li key={i} className="bullet">
            ✓ {b}
          </li>
        ))}
      </ul>

      <div className="card-cta-row">
        <button className="btn primary small">
          {cta} <span className="arrow">→</span>
        </button>
      </div>
    </article>
  );
}
