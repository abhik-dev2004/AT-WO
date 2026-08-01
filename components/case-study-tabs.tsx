"use client";

import { useState } from "react";
import type { CaseTab } from "@/lib/customer-content";
import PhaseImage from "@/components/phase-image";

/**
 * Interactive slider: selecting a tab swaps both the copy and the image.
 * The panel is keyed on the active index so it re-mounts and replays the
 * fade/lift transition on every change.
 */
export default function CaseStudyTabs({
  tabs,
  accent,
}: {
  tabs: CaseTab[];
  accent: string;
}) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Engagement phases"
        className="nav-scroll glass mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full px-2 py-2"
      >
        {tabs.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.label}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              style={isActive ? { background: accent } : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "font-medium text-white"
                  : "text-ink-muted hover:bg-white/5 hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Panel — re-mounted per tab so the transition replays */}
      <div
        key={active}
        role="tabpanel"
        className="reveal is-in mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
      >
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          {tab.body}
        </p>

        {/* Phase photograph, cropped to the panel. */}
        <div className="relative aspect-[16/10]">
          <PhaseImage src={tab.image} />
        </div>
      </div>
    </div>
  );
}
