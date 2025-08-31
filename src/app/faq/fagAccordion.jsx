"use client";
import { useState } from "react";

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="grid gap-3">
      {faqs.map((f, i) => {
        const expanded = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;

        return (
          <div key={i} className="card">
            <button
              id={btnId}
              aria-controls={panelId}
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : i)}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              <span className="font-medium">{f.q}</span>
              <span className="text-gray-500" aria-hidden>
                {expanded ? "—" : "+"}
              </span>
            </button>

            {expanded && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="px-6 pb-6 text-gray-700"
              >
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}