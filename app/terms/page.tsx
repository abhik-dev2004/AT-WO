import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The use of this website and Services on this website provided by Abstract Techvisions Pvt. Ltd. are subject to the following Terms & Conditions.",
};

const INTRO = [
  "The use of this website and Services on this website provided by Abstract Techvisions Pvt. Ltd. are subject to the following Terms & Conditions.",
];

const SECTIONS: LegalSection[] = [
  {
    heading: "Ownership",
    body: [
      "The website also its contents are the property of Abstract Techvisions Pvt. Ltd. whose registered office being based at Kolkata, West Bengal, India. For any inquiry please drop a mail at info@tekabs.com.",
    ],
  },
  {
    heading: "Disclaimer",
    body: [
      "If the User uses the ABSTRACT Website, User shall be responsible for maintaining the confidentiality of User Display Name and Password. User shall be responsible for all activities that occur under User Display Name and Password. User agrees that if provided information which is false, plagiarised, or not relevant with our Terms of usage, in that case, Abstract Techvisions having the authority to suspend or terminate or block access of User membership on the website and refuse to provide any further access. On the other hand, if suspended Users could provide the right meaningful clarification to us and that not be violating our Terms of usage then we will allow User to regain membership and further access.",
    ],
  },
  {
    heading: "Copyright",
    body: [
      "All available information which includes in or made accessible through Abstract Techvisions Pvt. Ltd., such as text, graphics, logos, button icons, images, audio clips, digital downloads, and software are all the exclusive properties of Abstract Techvisions and are being protected under copyright laws.",
    ],
  },
  {
    heading: "Protection",
    body: [
      "The copyright in the materials contained on the Abstract Techvisions website belongs to Abstract Techvisions Pvt. Ltd. All the necessary details appearing on this website are protected by international copyright, trademark property rights, and relevant applicable laws.",
    ],
  },
  {
    heading: "Browser Support",
    body: [
      "You can access our website through any Browsers you like. If you still having an issue, please remove your cookies and clear Browser history and re-try.",
    ],
  },
  {
    heading: "Communications",
    body: [
      "When the User uses our ABSTRACT website or uses to send emails or share any other information or communicate with us, User will be agreeing and understands that User is communicating with us through emails/any electronic devices and are consent to receive further information via email or voice call from Us periodically as per requirement. We may communicate with our users through emails, voice calls or another mode of communication.",
    ],
  },
  {
    heading: "Restriction",
    body: [
      "Abstract Techvisions Pvt. Ltd. holds all right to suspend or dismiss the access to certain features, contents or parts of the website, or the use of the complete website at any time without the previous announcement.",
    ],
  },
  {
    heading: "Violation",
    body: [
      "Abstract Techvisions Pvt. Ltd. holds the right to investigate and prosecute violations of any of these terms and conditions of use to the extent permitted by law.",
    ],
  },
  {
    heading: "Moderation",
    body: [
      "Abstract Techvisions Pvt. Ltd. holds the right to control the user-generated content and moderate/delete the posts, feedback, comments before publishing in the comments/blogs section accessible for all the users and/or readers.",
    ],
  },
  {
    heading: "Modifications",
    body: [
      "Abstract Techvisions Pvt. Ltd. reserves the right to modify the content on the website and make changes in the above-mentioned terms and conditions from time to time on the website.",
    ],
  },
];

const CLOSING = [
  "You confirm that you have read and accepted Abstract Techvisions Pvt. Ltd. Terms of usage. You will be responsible for and agree to pay for any losses, costs and /or expenses that Abstract Techvisions Pvt. Ltd. suffer as a result of you failing to comply with the terms and conditions of use.",
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={INTRO}
      sections={SECTIONS}
      closing={CLOSING}
    />
  );
}
