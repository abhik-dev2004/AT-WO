import Image from "next/image";

/**
 * Photograph for a case-study phase tab.
 *
 * These are photographs, not transparent icons, so they fill and crop to the
 * panel like the cover images elsewhere on the site rather than floating inside
 * it, with a scrim seating them against the dark page. A very slow ken-burns
 * keeps the panel alive without pulling attention off the copy beside it.
 */
export default function PhaseImage({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[26px] border border-white/10">
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="phase-img object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"
      />
    </div>
  );
}
