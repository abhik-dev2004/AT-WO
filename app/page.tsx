import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import StatsBand from "@/components/stats-band";
import ThoughtLeadership from "@/components/thought-leadership";
import Services from "@/components/services";
import PainPoints from "@/components/pain-points";
import CaseStudies from "@/components/case-studies";
import Contact from "@/components/contact";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <ThoughtLeadership />
        <Services />
        <PainPoints />
        <CaseStudies />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
