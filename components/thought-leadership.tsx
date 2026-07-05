import Reveal from "./reveal";

export default function ThoughtLeadership() {
  return (
    <section id="about" className="mx-auto mt-28 max-w-6xl px-6 sm:mt-40">
      <Reveal className="text-center">
        <blockquote className="font-display text-2xl font-medium leading-[1.35] tracking-tight sm:text-[2.1rem]">
          <span aria-hidden className="text-gradient">“</span>
          Most enterprises don&rsquo;t need another traditional advertising
          agency or a software company. They need a{" "}
          <span className="text-gradient">partner who connects both worlds</span>{" "}
          to build a clear, repeatable path to profit.
          <span aria-hidden className="text-gradient">”</span>
        </blockquote>
      </Reveal>
    </section>
  );
}
