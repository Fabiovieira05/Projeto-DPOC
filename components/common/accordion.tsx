"use client";

import { useState } from "react";

type Item = { title: string; content: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <ul className="w-full flex flex-col gap-4">
      {items.map((it, i) => (
        <li key={i} className="w-full">
          <button
            className="w-full flex items-center justify-between bg-[#326750] text-white px-6 py-5 rounded-lg transition-colors hover:bg-[#285340] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#326750]"
            onClick={() => toggle(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(i);
              }
            }}
            aria-expanded={open === i}
            aria-controls={`accordion-panel-${i}`}
            id={`accordion-btn-${i}`}
          >
            <div className="flex items-center gap-4">
              <span className="text-left font-medium text-base md:text-lg leading-snug">
                {it.title}
              </span>
            </div>

            {/* Seta rotacionável */}
            <svg
              aria-hidden="true"
              className={`w-6 h-6 shrink-0 ml-4 transition-transform duration-300 ease-in-out ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Painel com animação suave */}
          <div
            id={`accordion-panel-${i}`}
            role="region"
            aria-labelledby={`accordion-btn-${i}`}
            style={{
              maxHeight: open === i ? "400px" : "0px",
              opacity: open === i ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 0.5s ease-in-out, opacity 0.45s ease-in-out",
            }}
          >
            <div
              className="mt-2 rounded-lg px-6 py-5 text-zinc-700 text-base md:text-lg leading-relaxed accordion-panel-bg"
            >
              {it.content}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}