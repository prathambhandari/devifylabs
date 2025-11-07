import React from "react";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We analyze your business goals, target audience, and competition to create a winning strategy.",
    duration: "1-2 weeks",
  },
  {
    title: "Design & Planning",
    desc: "Our team creates wireframes, prototypes, and detailed project plans for your approval.",
    duration: "2-3 weeks",
  },
  {
    title: "Development & Testing",
    desc: "We build your solution using cutting-edge technologies with rigorous testing at every stage.",
    duration: "4-8 weeks",
  },
  {
    title: "Launch & Support",
    desc: "We deploy your project and provide ongoing support to ensure optimal performance.",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section">
      <h3 className="section-title">Our Process</h3>
      <p className="services-intro">
        A clear, predictable process to take your idea from concept to
        production.
      </p>

      <div className="process-steps">
        {steps.map((s, i) => (
          <div className="process-step" key={s.title}>
            <div className="step-marker" aria-hidden>
              <span className="step-num">{i + 1}</span>
            </div>
            <div className="step-body">
              <h4 className="step-title">{s.title}</h4>
              <p className="step-desc">{s.desc}</p>
              <div className="step-duration">{s.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
