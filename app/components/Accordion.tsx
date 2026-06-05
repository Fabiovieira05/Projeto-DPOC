"use client";

import { useState } from "react";

type Item = { title: string; content: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-3">
      {items.map((it, i) => (
        <div key={i} className="w-full">
          <button
            className="w-full flex items-center justify-between bg-[#326750] text-white px-4 py-3 sm:px-5 sm:py-4 rounded-md transition-colors hover:bg-[#285340]"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <div className="flex items-center gap-4">
             
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-left font-medium text-sm md:text-[15px]">{it.title}</span>
            </div>
            
            
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open === i && (
            <div className="mt-2 rounded-md bg-white p-4 md:p-5 text-zinc-700 text-sm md:text-base shadow-sm border-2 border-dpoc-green">
              {it.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}