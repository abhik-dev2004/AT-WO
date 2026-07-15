import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what's holding your business back. We'll respond within 1 business day.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
