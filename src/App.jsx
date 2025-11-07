import React from "react";
import Header from "./components/Header";
import CodePreview from "./components/CodePreview";
import ServiceCard from "./components/ServiceCard";
import OurWork from "./components/OurWork";
import Process from "./components/Process";
import About from "./components/About";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section id="hero" className="hero-row">
          <div className="hero">
            <p className="tagline">TURNING VISION INTO VALUE.</p>
            <h2 className="hero-title">
              Scale Your Business with Premium Development
            </h2>
            <p className="hero-lead">
              We transform concepts into market-ready web applications, mobile
              apps, and robust digital platforms that drive real business value.
            </p>

            <div className="hero-ctas">
              <button className="btn primary">Get started today</button>
              <button className="btn ghost">View our work</button>
            </div>
          </div>

          <aside className="preview-column" aria-hidden>
            <div className="card small">
              <CodePreview
                code={`import express from 'express'

import db from './db'

const app = express()

app.use(express.json())

app.get('/api/items', async (req, res) => {
  const items = await db.query('select id, name, created_at from items')
  res.json(items.rows)
})

app.post('/api/items', async (req, res) => {
  const { name } = req.body
  const result = await db.query('insert into items (name) values ($1) returning *', [name])
  res.status(201).json(result.rows[0])
})

export default app
`}
              />
            </div>
          </aside>
        </section>

        <section id="services" className="services-section">
          <h3 className="section-title">Services</h3>
          {/* <p className="services-intro">
            We offer end-to-end product and engineering services — from early
            discovery and UX to development, launch and ongoing maintenance.
            Below are a few ways we help teams ship reliable, user-centered
            digital products quickly.
          </p> */}

          <div className="services-grid">
            <ServiceCard
              title="Web Development"
              description={`High-converting websites that drive sales and engagement. From landing pages to e-commerce platforms. We focus on conversion optimization, analytics integration and maintainable frontend architecture.`}
              bullets={["Responsive Design", "SEO Optimized", "Fast Loading"]}
              cta="Get Quote"
            />

            <ServiceCard
              title="Web Applications"
              description={`Custom web apps that streamline operations and boost productivity. Built for scale and performance. We design APIs, robust data models and resilient deployment pipelines.`}
              bullets={["Cloud-Based", "Secure", "Scalable"]}
              cta="Get Quote"
            />

            <ServiceCard
              title="Mobile Apps"
              description={`Native and cross-platform mobile solutions that engage users and drive business growth. We prioritize performance, accessibility and smooth update cycles.`}
              bullets={["iOS & Android", "User-Friendly", "App Store Ready"]}
              cta="Get Quote"
            />
          </div>
        </section>

        <OurWork />
        <Process />
        <About />
      </main>
    </div>
  );
}
