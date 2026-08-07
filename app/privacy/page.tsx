import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { ORG_EMAIL, ORG_LEGAL_NAME, ORG_PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for G3 Luxury Massage & Wellness Spa, Nani Daman.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-(--color-bg-void) pt-40 pb-28">
        <div className="container-page max-w-3xl">
          <div className="mb-7 h-px w-10 bg-(--color-gold)" />
          <h1 className="font-display text-4xl font-medium text-(--color-text-heading)">
            Privacy Policy
          </h1>
          <p className="mt-3 font-sans text-sm text-(--color-text-faint)">
            Effective date: August 6, 2026
          </p>

          <div className="prose-legal mt-12 flex flex-col gap-10 font-sans text-sm leading-relaxed text-(--color-text-muted)">
            <section>
              <h2>1. Scope</h2>
              <p>
                This Privacy Policy explains how {ORG_LEGAL_NAME} (&ldquo;we&rdquo;,
                &ldquo;us&rdquo;) handles information in connection with your use of
                this website (g3luxury.in). This website is static, has no
                backend, database, or payment processing, and does not
                require you to create an account. This policy covers only
                data related to your use of the website — it does not cover
                information you may separately provide to us in person at
                our physical spa location.
              </p>
            </section>

            <section>
              <h2>2. What We Collect</h2>
              <p>
                <strong>WhatsApp enquiries:</strong> When you click a
                &ldquo;Book Appointment&rdquo; link, you are taken to WhatsApp,
                where any name, phone number, or message content you share is
                handled within WhatsApp&rsquo;s own systems, not stored on our
                website or servers.
              </p>
              <p className="mt-3">
                <strong>Analytics cookies:</strong> If you accept cookies via
                our consent banner, we use Google Analytics to collect
                anonymised usage data such as approximate location, device
                and browser type, and pages visited, to help us understand
                site traffic. If you reject cookies, no analytics script
                loads and no such data is collected. Rejecting cookies does
                not limit your ability to use the site, since it has no
                login or personalization features.
              </p>
            </section>

            <section>
              <h2>3. Cookies</h2>
              <p>
                We only load non-essential cookies (Google Analytics) after
                you actively accept them through the cookie banner shown on
                your first visit. Your choice is remembered in your browser.
                You can change your choice at any time by clearing your
                browser&rsquo;s local storage for this site. For details on how
                Google handles analytics data, see Google&rsquo;s own privacy
                policy.
              </p>
            </section>

            <section>
              <h2>4. How We Use Data</h2>
              <p>
                Any analytics data collected is used solely to understand and
                improve website performance and content. We do not sell your
                data or share it with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We follow reasonable security practices in line with the
                Information Technology Act, 2000 and the Information
                Technology (Reasonable Security Practices and Procedures and
                Sensitive Personal Data or Information) Rules, 2011. Given
                the limited data this website collects, our exposure is
                minimal, but we take this obligation seriously.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>
                Analytics data, where collected, is retained according to
                Google Analytics&rsquo; standard retention settings, which we
                have not extended beyond the default.
              </p>
            </section>

            <section>
              <h2>7. Your Rights</h2>
              <p>
                Under the Digital Personal Data Protection Act, 2023, you
                have the right to access, correct, or request erasure of your
                personal data, and to withdraw consent for analytics cookies
                at any time. To exercise these rights, contact us at{" "}
                {ORG_EMAIL}.
              </p>
            </section>

            <section>
              <h2>8. Contact</h2>
              <p>
                For any privacy-related queries or requests, contact us at{" "}
                {ORG_EMAIL} or {ORG_PHONE_DISPLAY}.
              </p>
            </section>

            <section>
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2>10. Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of India, and any
                disputes are subject to the exclusive jurisdiction of the
                courts of Daman &amp; Diu.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
