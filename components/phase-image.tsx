/**
 * Case-study phase illustration — a pre-rendered glass icon, slowly drifting.
 *
 * The square is positioned absolutely on purpose: as a centred grid/flex item
 * its height would be content-based, so `h-[86%]` would resolve against the
 * image's intrinsic height rather than the panel's and overflow it.
 *
 * Parent supplies sizing; this fills it via `absolute inset-0`.
 */
export default function GlassIllustration({ src }: { src: string }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-1/2 top-1/2 aspect-square h-[86%] -translate-x-1/2 -translate-y-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          loading="lazy"
          className="gi-float h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
