import React from "react";

export default function CodePreview({ code = "" }) {
  const lines = code.split("\n");

  return (
    <div className="code-preview" role="region" aria-label="Code preview">
      <div className="gutter" aria-hidden>
        {lines.map((_, i) => (
          <span key={i} className="ln">
            {i + 1}
          </span>
        ))}
      </div>
      <pre className="code" tabIndex={0}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
