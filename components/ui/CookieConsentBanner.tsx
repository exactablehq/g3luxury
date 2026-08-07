"use client";

import { useEffect, useState } from "react";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reads a browser-only API unavailable during SSR, so this must run post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", value);
    window.dispatchEvent(new Event("cookie-consent-change"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[95] border-t border-(--color-border) bg-(--color-bg-panel)/95 backdrop-blur-md">
      <div className="container-page flex flex-col items-center gap-4 py-5 sm:flex-row sm:justify-between">
        <p className="font-sans text-sm text-(--color-text-muted)">
          We use cookies to understand site traffic and improve your
          experience. Read our{" "}
          <a href="/privacy" className="text-(--color-gold) underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => choose("rejected")}
            className="rounded-(--radius-pill) border border-(--color-border) px-5 py-2 font-sans text-xs font-semibold tracking-(--tracking-label) text-(--color-text-muted) uppercase transition-colors hover:text-(--color-text-primary)"
          >
            Reject
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-(--radius-pill) bg-(--color-gold) px-5 py-2 font-sans text-xs font-semibold tracking-(--tracking-label) text-black uppercase transition-colors hover:bg-(--color-gold-hover)"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
