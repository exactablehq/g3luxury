import Image from "next/image";
import {
  ORG_ADDRESS_LINES,
  ORG_LEGAL_NAME,
  ORG_PHONE_DISPLAY,
} from "@/lib/site";
import { WHATSAPP_LINK, getAssetPath } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-(--color-border) bg-(--color-bg-void)"
    >
      <div className="container-page flex flex-col items-center gap-10 pt-20 pb-10 text-center">
        <Image
          src={getAssetPath("/logo.png")}
          alt="G3 Luxury Massage & Wellness Spa"
          width={180}
          height={64}
          className="h-16 w-auto object-contain"
          style={{ width: "auto" }}
        />

        <div className="h-px w-24 bg-(--color-gold)" />

        <div className="grid w-full max-w-3xl gap-10 text-center sm:text-left sm:grid-cols-2">
          <div className="flex flex-col gap-4 items-start px-6 sm:px-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center sm:justify-start font-sans text-sm text-(--color-text-muted) transition-colors hover:text-(--color-gold) selectable-contact w-fit"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--color-border) text-(--color-gold)">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              {ORG_PHONE_DISPLAY}
            </a>

            <div className="flex gap-3 items-start justify-center sm:justify-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--color-border) text-(--color-gold) mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              <a
                href="https://maps.google.com/?q=G3+Luxury+Massage+%26+Wellness+Spa,+Tin+Batti+Circle,+Nani+Daman"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-(--color-text-muted) selectable-contact hover:text-(--color-gold) transition-colors duration-300 block text-left"
              >
                <p className="text-(--color-text-primary)">{ORG_LEGAL_NAME}</p>
                {ORG_ADDRESS_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-end gap-3 sm:items-end">
            <a
              href="/terms"
              className="font-sans text-sm text-(--color-text-muted) transition-colors hover:text-(--color-gold)"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="font-sans text-sm text-(--color-text-muted) transition-colors hover:text-(--color-gold)"
            >
              Privacy Policy
            </a>
            <p className="mt-4 font-sans text-xs text-(--color-text-faint) text-center sm:text-right">
              &copy; {new Date().getFullYear()} G3 Luxury Wellness. All Rights
              Reserved.
            </p>
          </div>
        </div>

        {/* Attribution Subfooter */}
        <div className="mt-16 flex flex-col items-center justify-center gap-1.5 border-t border-white/5 pt-8">
          <a
            href="https://exactable.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1.5 opacity-60 transition-opacity duration-300 hover:opacity-100"
          >
            <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase">
              Crafted By
            </span>
            <div className="flex items-center">
              <Image
                src={getAssetPath("/exactable.svg")}
                alt="Exactable"
                width={120}
                height={22}
                priority
                unoptimized
                className="h-5 w-auto object-contain sm:h-5 md:h-5"
                style={{ width: "auto" }}
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
