import React from "react";

const team = [
  { name: "Test", role: "Founder & CEO", initials: "AK" },
  { name: "Test", role: "Lead Designer", initials: "AK" },
  { name: "Test", role: "Engineering Manager", initials: "AK" },
  { name: "test", role: "Senior Developer", initials: "AK" },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">We build digital products that matter</h2>
      <p className="about-desc">
        Devify Labs is a product-focused engineering studio that partners with
        startups and enterprises to design, build and scale meaningful
        experiences. We combine strategy, design and engineering to deliver
        measurable outcomes for our clients.
      </p>

      <div className="team">
        <h3 className="section-title">Team</h3>
        <div className="team-grid">
          {team.map((m) => (
            <article key={m.name} className="team-card">
              <div className="avatar" aria-hidden>
                {m.initials}
              </div>
              <div className="team-body">
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
