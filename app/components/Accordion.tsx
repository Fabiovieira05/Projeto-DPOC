"use client";

import { useState } from "react";

type Item = { title: string; content: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full">
      {items.map((it, i) => (
        <div key={i} className="mb-4">
          <button
            className="w-full flex items-center justify-between bg-dpoc-green text-white px-4 py-3 rounded-md"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-left font-medium">{it.title}</span>
            <span className="ml-4 text-xl">{open === i ? "▴" : "▾"}</span>
          </button>

          {open === i && (
            <div className="mt-2 rounded-md bg-white p-4 text-zinc-700 shadow-sm">
              {it.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
