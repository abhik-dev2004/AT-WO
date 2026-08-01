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
      {/* Stacks full-width on mobile. At 375px the three phases measure 450px,
          so a single row hid the last one behind a scrollbar, and letting them
          wrap left an odd lone pill centred on a second row. Stacking keeps
          every phase visible and evenly weighted; from `sm` up they fit one
          row and the pill returns.

          Deliberately not a marquee like the service-page anchor nav: these
          are tabs, and a moving target is hard to hit — the active one would
          drift out of view as you reached for it. */}
      <div
        role="tablist"
        aria-label="Engagement phases"
        className="glass mx-auto flex w-full flex-col gap-1 rounded-2xl p-1.5 sm:w-fit sm:max-w-full sm:flex-row sm:flex-nowrap sm:items-center sm:rounded-full sm:px-2 sm:py-2"
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
              /* min-h-11 gives a 44px touch target on mobile; the tighter
                 36px pill is fine once there's a pointer. */
              className={`flex min-h-11 w-full items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors sm:min-h-0 sm:w-auto sm:shrink-0 ${
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
