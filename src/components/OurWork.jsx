import React from "react";

function ProjectCard({ title, summary, tags = [] }) {
  return (
    <article className="project-card">
      <div className="project-media" aria-hidden />
      <div className="project-body">
        <h4 className="project-title">{title}</h4>
        <p className="project-summary">{summary}</p>
        <div className="project-tags">
          {tags.map((t, i) => (
            <span key={i} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function OurWork() {
  const projects = [
    {
      title: "Commerce Studio",
      summary:
        "Headless e‑commerce platform with fast product browsing, personalized recommendations and a lightweight admin for merchants.",
      tags: ["React", "Node", "Stripe"],
    },
    {
      title: "Analytics Dashboard",
      summary:
        "Real-time analytics and reporting for operations teams with role-based access and exportable reports.",
      tags: ["Typescript", "Postgres", "Realtime"],
    },
    {
      title: "Mobile Wallet App",
      summary:
        "Cross-platform mobile wallet built for secure transactions, push notifications and offline support.",
      tags: ["React Native", "Auth", "Payments"],
    },
    {
      title: "SaaS Billing Platform",
      summary:
        "A subscription billing system with metered usage, invoicing and automated retry logic built for scale and reliability.",
      tags: ["Node", "Stripe", "Postgres"],
    },
    {
      title: "Learning Management System",
      summary:
        "An LMS with course authoring, progress tracking and integrated assessments designed for enterprise training.",
      tags: ["React", "GraphQL", "AWS"],
    },
    {
      title: "Inventory Ops Platform",
      summary:
        "Real-time inventory and order management with barcode scanning, audits and multi-warehouse support.",
      tags: ["Typescript", "Postgres", "Realtime"],
    },
  ];

  return (
    <section id="our-work" className="our-work-section">
      <h3 className="section-title">Our Work</h3>
      <p className="services-intro">
        A selection of projects that demonstrate our approach to design and
        engineering.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            summary={p.summary}
            tags={p.tags}
          />
        ))}
      </div>
    </section>
  );
}
