"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./reveal";

type Item = { q: string; a: string };

export default function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal as="div" key={item.q} delay={i * 60} className="card overflow-hidden">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span className="font-display text-base font-semibold tracking-tight text-ink">
                {item.q}
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
