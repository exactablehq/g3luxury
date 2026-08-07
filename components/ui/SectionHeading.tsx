import type { ReactNode } from "react";

export default function SectionHeading({
  title,
  children,
}: {
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto mb-7 h-px w-10 bg-(--color-gold)" />
      <h2 className="font-display text-3xl font-medium text-(--color-text-heading) sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-6 font-sans text-base leading-relaxed text-(--color-text-muted)">
          {children}
        </p>
      )}
    </div>
  );
}
