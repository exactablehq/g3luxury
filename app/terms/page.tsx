import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import {
  ORG_ADDRESS_LINES,
  ORG_EMAIL,
  ORG_LEGAL_NAME,
  ORG_PHONE_DISPLAY,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for G3 Luxury Massage & Wellness Spa, Nani Daman.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-(--color-bg-void) pt-40 pb-28">
        <div className="container-page max-w-3xl">
          <div className="mb-7 h-px w-10 bg-(--color-gold)" />
          <h1 className="font-display text-4xl font-medium text-(--color-text-heading)">
            Terms of Service
          </h1>
          <p className="mt-3 font-sans text-sm text-(--color-text-faint)">
            Effective date: August 6, 2026
          </p>

          <div className="prose-legal mt-12 flex flex-col gap-10 font-sans text-sm leading-relaxed text-(--color-text-muted)">
            <section>
              <h2>1. About Us</h2>
              <p>
                This website is operated by {ORG_LEGAL_NAME}, located at{" "}
                {ORG_ADDRESS_LINES.join(", ")}. You can reach us at{" "}
                {ORG_PHONE_DISPLAY} or {ORG_EMAIL}. By using this website, you
                agree to these Terms of Service.
              </p>
            </section>

            <section>
              <h2>2. Nature of This Website</h2>
              <p>
                This website is an informational and marketing platform only.
                It does not process online payments, does not create user
                accounts, and does not operate an automated booking system.
                All appointment requests are made via WhatsApp or phone and
                are confirmed manually by our staff. No binding contract for
                services is formed through use of this website alone — a
                booking is only confirmed once our team has responded to your
                WhatsApp or phone enquiry.
              </p>
            </section>

            <section>
              <h2>3. Acceptable Use</h2>
              <p>
                You agree to use this website only for lawful purposes. You
                may not scrape, copy, or misuse the content, images, or
                branding on this site. All text, images, and the G3 Luxury
                name and logo are the intellectual property of {ORG_LEGAL_NAME}
                {" "}and may not be reproduced without permission.
              </p>
            </section>

            <section>
              <h2>4. Pricing &amp; Service Information</h2>
              <p>
                Prices and durations listed on this website are indicative
                and provided for general guidance only. Final pricing and
                availability are confirmed at the time of booking via
                WhatsApp or phone, and may vary based on therapist
                availability, promotions, or in-spa consultation.
              </p>
            </section>

            <section>
              <h2>5. Limitation of Liability</h2>
              <p>
                This website is provided on an &ldquo;as is&rdquo; basis. While we take
                reasonable care to ensure the information on this site is
                accurate, we do not warrant that it is complete or error-free.
                To the extent permitted by law, {ORG_LEGAL_NAME} is not liable
                for any indirect or consequential loss arising from your use
                of this website.
              </p>
            </section>

            <section>
              <h2>6. Third-Party Links</h2>
              <p>
                This site links to WhatsApp and other third-party services
                for the purpose of contacting us. We are not responsible for
                the content, policies, or practices of these third-party
                platforms.
              </p>
            </section>

            <section>
              <h2>7. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes
                arising out of or in connection with this website or these
                Terms shall be subject to the exclusive jurisdiction of the
                courts of Daman &amp; Diu (Union Territory of Dadra and Nagar
                Haveli and Daman and Diu).
              </p>
            </section>

            <section>
              <h2>8. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of
                this website after changes are posted constitutes your
                acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2>9. Contact</h2>
              <p>
                For questions about these Terms, contact us at {ORG_EMAIL} or{" "}
                {ORG_PHONE_DISPLAY}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
